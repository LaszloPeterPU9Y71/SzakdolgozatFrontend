import {Component} from "@angular/core";
import {ToolsService} from "../../../services/tools.service";
import {
  DefectDto,
  OwnerCompanyDto,
  OwnerCompanyEmployeeDto,
  SparePartDto, SparepartsWithAmount,
  ToolDto, UserDto
} from "../../../models/backend.models";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";

import {ObjectStore} from "../../../services/object-store";
import {DefectService} from "../../../services/defect.service";
import {SparePartService} from "../../../services/spare-part.service";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-update-worksheet',
  templateUrl: './update-worksheet.component.html',
  styleUrls: ['./update-worksheet.component.scss']
})

export class UpdateWorksheetComponent {


  clickedTool: ToolDto | undefined;
  clickedCompany: OwnerCompanyDto | undefined;
  clickedCompanyEmployee: OwnerCompanyEmployeeDto | undefined;
  defect = '';
  description: string | undefined;
  defects: DefectDto[] = [];
  selectedDefect: DefectDto[] = [];
  addedDefects: DefectDto[] = [];
  newDescription: string = "";
  spareparts: SparePartDto[] = [];
  sumBruttoPrice: number = 0;
  quantities: number[] = [];
  sumBruttoPrices: number[] = [];
  warrantyIsChecked: boolean = this.objectStore.selectedTool?.isWarranty!;
  warrantyTicketIsChecked: boolean = this.objectStore.selectedTool?.isWarrantyTicket!;
  invoiceIsChecked: boolean = this.objectStore.selectedTool?.isInvoice!;
  registrationIsChecked: boolean = this.objectStore.selectedTool?.isRegistration!;
  loggedInUser: UserDto | undefined;
  addedSparepartsIds: number[] = []
  addedSparePartsQuantities: number[] = [];
  quantity: number | undefined;
  index: number = 0;
  selectedSparepart: SparepartsWithAmount[] = [];
  margin: number = 1.4;
  tax: number = 1.27;


  constructor(
    private objectStore: ObjectStore,
    private customerCompanyService: CustomerCompanyService,
    private customerCompanyEmployeeService: CustomerService,
    private toolService: ToolsService,
    private defectService: DefectService,
    private sparepartService: SparePartService,
    private userService: UserService,
  ) {
  }


  ngOnInit() {
    this.getAddedDefects();
    this.findToolById(this.objectStore.selectedTool!.id);
    this.findCustomerCompanyEmployeeById(this.objectStore.selectedTool!.employeeId);
    this.getDescription();
    this.findUserByEmail();
    this.getSparePartsMap();


  }

  findToolById(id: number) {
    this.toolService.getToolById(id).subscribe((response: ToolDto) => {
      this.clickedTool = response;
      console.log(response)
      this.defectService.findDefectById(response.defects).subscribe((response: DefectDto[]) => {
        this.addedDefects = response;
      })


    })
  }

  findUserByEmail() {
    this.userService.getRepairManByEmail(localStorage.getItem("email")!)
      .subscribe((response: UserDto) => {
        this.loggedInUser = response;


      })
  }


  findCustomerCompanyById(id: number | undefined) {
    if (id) {
      this.customerCompanyService.findCompanyById(id).subscribe((response: OwnerCompanyDto) => {
        this.clickedCompany = response;
      })
    }
  }
  findCustomerCompanyEmployeeById(id: number | undefined) {
    this.customerCompanyEmployeeService.findEmployeeById(id).subscribe((response: OwnerCompanyEmployeeDto) => {
      this.clickedCompanyEmployee = response;
      if (this.clickedCompanyEmployee) {
        this.findCustomerCompanyById(this.clickedCompanyEmployee.ownerCompanyId);
      }
    })
  }

  onStatusChange(machine: ToolDto | undefined, $event: Event) {
    if (machine) {
      const newStatus = $event.target as HTMLInputElement;
      machine.status = newStatus.value;
      this.toolService
        .updateStatus(machine)
        .subscribe(console.log)
    }
  }

  getAddedDefects(): DefectDto[] {
    const selectedDefectIds = this.objectStore.selectedTool?.defects;

    if (selectedDefectIds && selectedDefectIds.length > 0) {
      for (const index of selectedDefectIds) {
        if (this.defects[index]) {

          this.addedDefects.push(this.defects[index]);
        }
      }
    }


    return this.addedDefects;
  }


  getDescription(): void {
    this.description = this.objectStore.selectedTool?.description
    if (this.description == undefined) {
      this.description = "Ehhez a géphez nem adtak meg hibaleírást";
    }
  }

  getDefect($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.defectService.findDefect(value).subscribe((response: DefectDto[]) => {
      this.defects = response;
      ($event.target as HTMLInputElement).value = "";
    })
  }


  getSparePartsMap(): void {
    this.toolService.getSparePartsMap(this.objectStore.selectedTool!).subscribe(
      (response: SparepartsWithAmount[]) => {
        this.selectedSparepart = response;
        for (let x of response) {
          this.quantities[x.id] = x.amount;
          this.sumBruttoPrices[x.id] = x.spareParts.nettoBuyingPrice *this.margin * this.tax * x.amount
          this.sumBruttoPrice = this.sumBruttoPrices.reduce((total, current) => total + current, 0);
        }
        for (let n of this.sumBruttoPrices) {
          this.sumBruttoPrice = this.sumBruttoPrices.reduce((total, current) => total + current, 0);
        }
      })

  }

  onDefectSelect(defect: DefectDto) {
    this.selectedDefect.push(defect);
    this.clickedTool?.defects.push(defect.id)
    this.defects = [];
  }

  onDefectRemove(index: number) {
    this.selectedDefect.splice(index, 1);
    this.clickedTool?.defects.splice(index, 1);
    this.defects = [];
  }


  setDescription($event: Event) {
    if (this.newDescription == undefined || this.newDescription == "")
      this.newDescription = ($event.target as HTMLInputElement).value;
    else
      this.newDescription = this.newDescription + " + " + ($event.target as HTMLInputElement).value;
    const descriptionElement = document.getElementById("newDescription");
    if (descriptionElement) {
      descriptionElement.textContent = this.newDescription;
      ($event.target as HTMLInputElement).value = "";
    }
  }

  descriptionRemove($event: Event) {
    this.newDescription = "";
    const descriptionElement = document.getElementById("newDescription");
    if (descriptionElement) {
      descriptionElement.textContent = this.newDescription;
    }

  }

  findSparepartsByName($event: Event) {
    let name = ($event.target as HTMLInputElement).value;

    this.sparepartService.getSparepartByName(name).subscribe((response: SparePartDto[]) => {
      this.spareparts = response;
      console.log(this.spareparts);
      ($event.target as HTMLInputElement).value = "";
    })
  }

  findSparepartsByItemNumber($event: Event) {
    let itemNumber = ($event.target as HTMLInputElement).value;
    this.sparepartService.getSparepartByNumber(itemNumber).subscribe((response: SparePartDto[]) => {
      this.spareparts = response;
      console.log(this.spareparts);
      ($event.target as HTMLInputElement).value = "";
    })
  }

  onSparepartSelect(index: number, sparepart: SparePartDto) {
    let x: SparepartsWithAmount = {
      id: sparepart.id,
      spareParts: sparepart,
      amount: 1
    }
    if(x){
      this.quantities[x.id] = 1;
      this.sumBruttoPrices[index] = sparepart.nettoBuyingPrice*this.margin*this.tax * this.quantities[x.id]
      this.selectedSparepart.push(x);
      this.spareparts = [];
      this.sumBruttoPrice = this.sumBruttoPrices.reduce((total, current) => total + current, 0);
    }

  }
    calculatePrice(index: number, amount?: number) {
    if (amount === undefined || amount < 0 || !this.selectedSparepart[index]) {
      return;
    }
    this.quantity = amount!;
    const sparepart = this.selectedSparepart[index];
    const price = sparepart.spareParts.nettoBuyingPrice * this.tax * this.margin;
    const sumBruttoPrice = Math.round(price * this.quantity);


    if (!this.sumBruttoPrices[index]) {
      this.sumBruttoPrices[index] = 0;
    }
    if (!this.addedSparePartsQuantities[index]) {
      this.addedSparePartsQuantities[index] = 0;
    }
    if (!this.addedSparepartsIds[index]) {
      this.addedSparepartsIds[index] = 0;
    }
    this.sumBruttoPrices[index] = sumBruttoPrice;
    this.sumBruttoPrice = this.sumBruttoPrices.reduce((total, current) => total + current, 0);
    this.addedSparePartsQuantities[index] = this.quantity;
    this.addedSparepartsIds[index] = this.selectedSparepart[index].id;
  }


  onDataChange(machine: ToolDto | undefined) {
    if (machine) {
      if (!this.description) {
        machine.description = this.newDescription!;
      } else if (this.description) {
        machine.description = machine.description + " + " + this.newDescription
      }
      machine.isWarranty = this.warrantyIsChecked;
      machine.isInvoice = this.invoiceIsChecked;
      machine.isRegistration = this.registrationIsChecked;
      machine.isWarrantyTicket = this.warrantyTicketIsChecked;
      machine.sparepartlist = this.selectedSparepart;

      for (let x of this.selectedSparepart) {
        x.amount = this.quantities[x.id]
      }


      this.toolService
        .updateToolData(machine!)
        .subscribe()


    }
    window.location.href = 'http://localhost:4200/home/tools'
  }
}

