import {Component, inject, OnInit} from "@angular/core";

import {FormControl, FormGroup} from "@angular/forms";
import {DefectDto, OwnerCompanyDto, OwnerCompanyEmployeeDto} from "../../../models/backend.models";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";
import {ToolsService} from "../../../services/tools.service";
import {DefectService} from "../../../services/defect.service";


@Component({
    selector: 'app-user-login',
    templateUrl: './addWorksheet.component.html',
    styleUrls: ['./addWorksheet.component.scss']
  })

export class AddWorksheetComponent implements OnInit{


    defectService = inject(DefectService);
    ownerCompanyEmployeeService = inject(CustomerService);
    ownerCompanyService = inject(CustomerCompanyService);
    selectedCompany: OwnerCompanyDto | undefined;
    employees: OwnerCompanyEmployeeDto[] = [];
    selectedEmployee: OwnerCompanyEmployeeDto| undefined;
    defects: DefectDto[] = [];
    selectedDefect: DefectDto |undefined;

    ngOnInit() {
    }

    createCompany(){
      window.open("http://localhost:4200/add-company", '_blank');
    }

      findEmployee($event: Event) {
      let value = ($event.target as HTMLInputElement).value;
      this.ownerCompanyEmployeeService.findEmployee(value).subscribe((response) => {
        this.employees = response;
        console.log(this.employees);
        ($event.target as HTMLInputElement).value = "";
      })
    }

    onEmployeeSelect(employee: OwnerCompanyEmployeeDto) {
      this.selectedEmployee = employee
      console.log(employee);
      this.ownerCompanyService.findCompanyById(employee.ownerCompanyId).subscribe((response: OwnerCompanyDto) =>{
        this.selectedCompany = response
      });

        console.log(employee);
        this.employees = [];
      }








  private worksheetService2 = inject(ToolsService)
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    typeNumber: new FormControl(),
    itemNumber: new FormControl(),
    serialNumber: new FormControl()
  });



  onSubmit() {
    console.log(this.selectedEmployee);
    this.worksheetService2.createTool({
      name: this?.form.controls['name'].value,
      typeNumber: this?.form.controls['typeNumber'].value,
      itemNumber: this?.form.controls['itemNumber'].value,
      serialNumber: this?.form.controls['serialNumber'].value,
      id: this.selectedEmployee?.ownerCompanyId,
      defectsId: this.selectedDefect?.id,
    }).subscribe((response: any) => {
      console.log(response)
    })
  }
  findDefect($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.defectService.findDefect(value).subscribe((response) => {
      this.defects = response;
      console.log(this.defects);
      ($event.target as HTMLInputElement).value = "";
    })
  }
  onDefectSelect(defect: any) {
    this.selectedDefect = defect;
    console.log(defect.id)
    this.defects = [];
  }
}





