import {Component, inject, OnInit} from "@angular/core";
import {WorksheetService} from "../worksheet.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
    selector: 'app-user-login',
    templateUrl: './addWorksheet.component.html',
    styleUrls: ['./addWorksheet.component.scss']
  })

export class AddWorksheetComponent implements OnInit{
worksheetService = inject(WorksheetService);
    companies: any[] = [];
    selectedCompany: any = null;
    employees: any[] = [];
    selectedEmployee: any = null;
    defects: any[] = [];
    selectedDefect: any = null;






    ngOnInit() {

    }

    createcompany(){
      window.open("http://localhost:4200/addcompany", '_blank');
    }


    findCompany($event: Event) {
      let value = ($event.target as HTMLInputElement).value;
      this.worksheetService.findCompany(value).subscribe((response) => {
        this.companies = response;
        console.log(this.companies);
        ($event.target as HTMLInputElement).value = "";
      })
    }

    onCompanySelect(company: any) {
      this.selectedCompany = company;
      this.companies = [];
    }

    findEmployee($event: Event) {
      let value = ($event.target as HTMLInputElement).value;
      this.worksheetService.findEmployee(value).subscribe((response) => {
        this.employees = response;
        console.log(this.employees);
        ($event.target as HTMLInputElement).value = "";
      })
    }
    onEmployeeSelect(employee: any) {
      this.selectedEmployee = employee
      console.log(employee);
      console.log(this.selectedCompany= employee?.ownerCompanyEntity);
      this.worksheetService.findCompany(employee.ownerCompanyEmployee).subscribe((response) => {
        this.companies = response;
        console.log(this.companies)

      });

        console.log(employee);
        this.employees = [];
      }








  private worksheetService2 = inject(WorksheetService)
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
      ownerCompanyEmployee: this.selectedEmployee.id,
      defectsId: this.selectedDefect.id,
    }).subscribe((response: any) => {
      console.log(response)
    })
  }
  findDefect($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.worksheetService.findDefect(value).subscribe((response) => {
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





