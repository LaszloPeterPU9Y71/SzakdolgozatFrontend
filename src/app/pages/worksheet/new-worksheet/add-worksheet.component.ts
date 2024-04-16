import {Component, inject, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {DefectDto, OwnerCompanyDto, OwnerCompanyEmployeeDto} from "../../../models/backend.models";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";
import {ToolsService} from "../../../services/tools.service";
import {DefectService} from "../../../services/defect.service";



@Component({
    selector: 'app-add-worksheet',
    templateUrl: './add-worksheet.component.html',
    styleUrls: ['./add-worksheet.component.scss']
  })

export class AddWorksheetComponent implements OnInit{


    defectService = inject(DefectService);
    ownerCompanyEmployeeService = inject(CustomerService);
    ownerCompanyService = inject(CustomerCompanyService);
    selectedCompany: OwnerCompanyDto | undefined;
    employees: OwnerCompanyEmployeeDto[] = [];
    selectedEmployee: OwnerCompanyEmployeeDto| undefined;
    defects: DefectDto[] = [];
    selectedDefectsIds: number[]= [];
    selectedDefects: DefectDto[] = [];




    ngOnInit() {
    }

    createCompany(){
      window.open("http://localhost:4200/add-company", '_blank');
    }

      findEmployee($event: Event) {
      let value = ($event.target as HTMLInputElement).value;
      this.ownerCompanyEmployeeService.findEmployeeByName(value).subscribe((response) => {
        this.employees = response;
        console.log(this.employees);
        ($event.target as HTMLInputElement).value = "";
      })
    }

    onEmployeeSelect(employee: OwnerCompanyEmployeeDto) {
      this.selectedEmployee = employee
      this.ownerCompanyService.findCompanyById(employee.ownerCompanyId).subscribe((response: OwnerCompanyDto) =>{
        this.selectedCompany = response
      });
        this.employees = [];
      }

  private worksheetService2 = inject(ToolsService)
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    typeNumber: new FormControl(),
    itemNumber: new FormControl(),
    serialNumber: new FormControl(),
    description: new FormControl()
  });



  onSubmit() {this.worksheetService2.createTool({
        name: this?.form.controls['name'].value,
        typeNumber: this?.form.controls['typeNumber'].value,
        itemNumber: this?.form.controls['itemNumber'].value,
        serialNumber: this?.form.controls['serialNumber'].value,
        description: this?.form.controls['description'].value,
        employeeId: this.selectedEmployee?.id,
        defects: this.selectedDefectsIds
      }).subscribe((response: any) => {

    })
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
    this.selectedDefectsIds.push(defect.id);
    this.selectedDefects.push(defect);
    this.defects = [];
  }

  onDefectRemove(index: number) {
    this.selectedDefects.splice(index, 1);

    this.defects = [];
  }

}





