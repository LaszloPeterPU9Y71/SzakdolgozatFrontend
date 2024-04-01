import {Component, OnInit} from "@angular/core";
import {ToolsService} from "../../../services/tools.service";
import {DefectDto, OwnerCompanyDto, OwnerCompanyEmployeeDto, ToolDto} from "../../../models/backend.models";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";

import {ObjectStore} from "../../../services/object-store";
import {DefectService} from "../../../services/defect.service";
import {AddWorksheetComponent} from "../newWorksheet/addWorksheet.component";

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
    searchDefect: DefectDto | undefined;
    description: string | undefined;
    defects: DefectDto[] = [];
    selectedDefect: DefectDto |undefined;


    constructor(
      private objectStore: ObjectStore,
      private customerCompanyService: CustomerCompanyService,
      private customerCompanyEmployeeService: CustomerService,
      private toolService: ToolsService,
      private defectService: DefectService,

    ) {
    }


    ngOnInit() {
      this.findToolById(this.objectStore.selectedTool!.id);
      this.findCustomerCompanyEmployeeById(this.objectStore.selectedTool!.employeeId);
      this.findDefectById(this.objectStore.selectedTool!.defects)
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

    findDefectById(id: number): void {
      this.defectService.findDefectById(id)
        .subscribe((defect) => {
          this.searchDefect = defect

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
    this.defectService.findDefect(value).subscribe((response) => {
      this.defects = response;
      console.log(this.defects);
      ($event.target as HTMLInputElement).value = "";
    })
  }
  onDefectSelect(defect: DefectDto) {
      this.searchDefect!.name = '';
    this.selectedDefect = defect;
    this.defects = [];
  }


    onSubmit() {

    }
  }
