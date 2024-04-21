import {Component} from "@angular/core";
import {ToolsService} from "../../../services/tools.service";
import {
  DefectDto,
  OwnerCompanyDto,
  OwnerCompanyEmployeeDto,
  SparePartDto,
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
  selectedSparepart: SparePartDto[] = [];
  sumBruttoPrice: number = 0;
  quantities: number[] = [];
  sumBruttoPrices: number[] = [];
  warrantyIsChecked: boolean = this.objectStore.selectedTool?.isWarranty!;
  warrantyTicketIsChecked: boolean = this.objectStore.selectedTool?.isWarrantyTicket!;
  invoiceIsChecked: boolean = this.objectStore.selectedTool?.isInvoice!;
  registrationIsChecked: boolean = this.objectStore.selectedTool?.isRegistration!;
  loggedInUser: UserDto | undefined;
  addedSpareparts : Map<number, number> = new Map<number, number>
  quantity : number | undefined;
  index: number | undefined;





  constructor(
    private objectStore: ObjectStore,
    private customerCompanyService: CustomerCompanyService,
    private customerCompanyEmployeeService: CustomerService,
    private toolService: ToolsService,
    private defectService: DefectService,
    private sparepartService: SparePartService,
    private userService: UserService
  ) {
  }


  ngOnInit() {
    this.getAddedDefects();
    this.findToolById(this.objectStore.selectedTool!.id);
    this.findCustomerCompanyEmployeeById(this.objectStore.selectedTool!.employeeId);
    this.getDescription();
    this.findUserByEmail()

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
    this.customerCompanyService.findCompanyById(id).subscribe((response: OwnerCompanyDto) => {
      this.clickedCompany = response;
    })
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

  findDefect($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.defectService.findDefect(value).subscribe((response: DefectDto[]) => {
      this.defects = response;
      console.log(this.defects);
      ($event.target as HTMLInputElement).value = "";
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

  onSparepartSelect(sparepart: SparePartDto) {
    this.selectedSparepart.push(sparepart);
    this.spareparts = [];
  }

  onSparepartRemove(index: number) {
    this.selectedSparepart.splice(index, 1);
    this.spareparts = [];
  }

  findSparepartsByItemNumber($event: Event) {
    let itemNumber = ($event.target as HTMLInputElement).value;
    this.sparepartService.getSparepartByNumber(itemNumber).subscribe((response: SparePartDto[]) => {
      this.spareparts = response;
      console.log(this.spareparts);
      ($event.target as HTMLInputElement).value = "";
    })
  }



  calculatePrice(index: number) {
    this.index = index
    console.log(index);
    this.quantity = this.quantities[index];
    console.log(this.quantities);
    console.log(this.quantity);
    const sparepart = this.selectedSparepart[index];

    if (this.quantity >= 0 && sparepart) {
      const price = sparepart.nettoSellingPrice;
      const sumBruttoPrice = price * this.quantity;
      this.sumBruttoPrices[index] = sumBruttoPrice;
      this.sumBruttoPrice = this.sumBruttoPrices.reduce((total, current) => total + current, 0);
      this.addedSpareparts.set(this.selectedSparepart[index].id, this.quantity)
      console.log(this.addedSpareparts)
    }
  }


  onDataChange(machine: ToolDto | undefined) {
    if (machine) {

      machine.description = "Tulajdonos megjegyzése: " + machine.description! + "    A mi megjegyzésünk: " + this.newDescription!;
      machine.isWarranty = this.warrantyIsChecked
      machine.isInvoice = this.invoiceIsChecked
      machine.isRegistration = this.registrationIsChecked
      machine.isWarrantyTicket = this.warrantyTicketIsChecked
      machine.spareParts = this.addedSpareparts






      this.toolService
        .updateToolData(machine)
        .subscribe()



    }
   // window.location.href = 'http://localhost:4200/home/tools'
  }
}
