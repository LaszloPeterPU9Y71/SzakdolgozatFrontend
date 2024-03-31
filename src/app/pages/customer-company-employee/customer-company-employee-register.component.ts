import {Component, inject} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../services/customer-company-employee.service";
import {CustomerCompanyService} from "../../services/customer-company.service";
import {OwnerCompanyDto} from "../../models/backend.models";

@Component({
  selector: 'customer-company-employee-register',
  templateUrl: './customer-company-employee-register.component.html',
  styleUrls: ['./customer-company-employee-register.component.scss'],
})
export class CustomerRegisterComponent {

    ownerCompanyService = inject(CustomerCompanyService);
    companies: OwnerCompanyDto[] | [] |undefined;
    selectedCompany: OwnerCompanyDto | undefined;

    private CustomerService = inject(CustomerService)
    Customerform: FormGroup = new FormGroup({
        name: new FormControl(),
        telNum: new FormControl(),
        email: new FormControl(),
        title: new FormControl(),
    })

    onSave() {
        this.CustomerService.createCustomer({
            name: this.Customerform?.controls['name'].value,
            telNum: this.Customerform?.controls['telNum'].value,
            email: this.Customerform?.controls['email'].value,
            title: this.Customerform?.controls['title'].value,
            ownerCompanyId: this.selectedCompany?.id,
        }).subscribe((response) => {
            console.log(response)
          console.log("companyId " + this.selectedCompany?.id)
        })
    }

  findCompany($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.ownerCompanyService.findCompanyByName(value).subscribe((response : OwnerCompanyDto[] | []) => {
      this.companies = response;
      console.log(this.companies);
      ($event.target as HTMLInputElement).value = "";
    })
  }

  onCompanySelect(company: OwnerCompanyDto) {
     this.selectedCompany = company
     this.ownerCompanyService.findCompanyById(company.id).subscribe((response: OwnerCompanyDto | undefined) =>{
       this.selectedCompany = response
     });
     this.companies = undefined;
   }
}
