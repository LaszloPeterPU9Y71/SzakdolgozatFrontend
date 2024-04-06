import {Component} from "@angular/core";
import {ToolsService} from "../../../services/tools.service";
import {
  DefectDto,
  OwnerCompanyDto,
  OwnerCompanyEmployeeDto,
  SparePartDto,
  ToolDto
} from "../../../models/backend.models";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";

import {ObjectStore} from "../../../services/object-store";
import {DefectService} from "../../../services/defect.service";
import {AddWorksheetComponent} from "../newWorksheet/addWorksheet.component";
import {SparePartService} from "../../../services/spare-part.service";


@Component({
    selector: 'app-user-login',
    templateUrl: './updateWorksheet.component.html',
    styleUrls: ['./updateWorksheet.component.scss']
  })

export class UpdateWorksheetComponent {


    clickedTool: ToolDto | undefined;
    clickedCompany: OwnerCompanyDto | undefined;
    clickedCompanyEmployee: OwnerCompanyEmployeeDto | undefined;
    defect = '';
    searchDefect: DefectDto[] = [];
    description: string | undefined;
    defects: DefectDto[] = [];
    selectedDefect: DefectDto[] = [];
    newDescription: string | undefined;
    spareparts: SparePartDto[] = [];
    selectedSparepart: SparePartDto | undefined;
    sumBruttoPrice: number = 0;





    constructor(
      private objectStore: ObjectStore,
      private customerCompanyService: CustomerCompanyService,
      private customerCompanyEmployeeService: CustomerService,
      private toolService: ToolsService,
      private defectService: DefectService,
      private sparepartService: SparePartService,

    ) {
    }


    ngOnInit() {
      this.findToolById(this.objectStore.selectedTool!.id);
      this.findCustomerCompanyEmployeeById(this.objectStore.selectedTool!.employeeId);
      this.getDescription();

    }

    findToolById(id: number) {
      this.toolService.getToolById(id).subscribe((response: ToolDto) => {
        this.clickedTool = response;
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


    getDescription(): void {
      this.description = this.objectStore.selectedTool?.description
      if(this.description == undefined){
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
    this.defects = [];
  }

  onDefectRemove(index: number) {
    this.selectedDefect.splice(index, 1);
    this.defects = [];
  }



    onSubmit() {

    }

  setDescription($event: Event) {
    if (this.newDescription == undefined || this.newDescription == "")
      this.newDescription = ($event.target as HTMLInputElement).value;
    else
      this.newDescription = this.newDescription+ " + " +  ($event.target as HTMLInputElement).value;
    const descriptionElement = document.getElementById("newDescription");
      if (descriptionElement) {
        descriptionElement.textContent = this.newDescription;
        console.log(" EZ lett az értéke: " + this.newDescription);
        ($event.target as HTMLInputElement).value = "";
      }
    }
  descriptionRemove($event: Event){
      this.newDescription = "";
    const descriptionElement = document.getElementById("newDescription");
    if (descriptionElement) {
      descriptionElement.textContent = this.newDescription;
    }

  }

  findSparepartsByName($event: Event){
      let name = ($event.target as HTMLInputElement).value;
      this.sparepartService.getSparepartByName(name).subscribe((response: SparePartDto[]) => {
        this.spareparts = response;
        console.log(this.spareparts);
        ($event.target as HTMLInputElement).value = "";
      })
    }
    onSparepartSelect(sparepart: SparePartDto) {
      this.selectedSparepart = sparepart;
      this.spareparts = [];
    }

  calculatePrice($event: Event) {
    if (!(($event.target as HTMLInputElement).value)) {
      this.sumBruttoPrice = 0;
    }
    let quantity = parseFloat(($event.target as HTMLInputElement).value);
    if (this.selectedSparepart && ($event.target as HTMLInputElement).value) {
      let sumBruttoPriceCalculated = this.selectedSparepart.nettoSellingPrice * quantity;
      this.sumBruttoPrice = sumBruttoPriceCalculated;





    }
  }
}
