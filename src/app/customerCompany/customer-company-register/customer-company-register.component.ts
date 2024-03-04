import {Component, inject} from "@angular/core";
import {CustomerCompanyService, CustomerService} from "../customer-company.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
    selector: 'customer-company-register',
    templateUrl: './customer-company-register.component.html',
    styleUrls: ['./customer-company-register.component.scss'],
  })




export class CustomerCompanyRegisterComponent {

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
              companyName: this.Companyform?.controls['companyName'].value
          }).subscribe((response) => {
            console.log(response)
          })
      }

    private CustomerCompanyService = inject(CustomerCompanyService)
      Companyform : FormGroup = new FormGroup({
          companyName: new FormControl(),
          postalCode: new FormControl(),
          town: new FormControl(),
          street: new FormControl(),
          taxNumber: new FormControl(),
          accountNumber: new FormControl()


      })
      onSaveCustomer() {
          this.CustomerCompanyService.createCustomerCompany({
              companyName: this.Companyform?.controls['companyName'].value,
              postalCode: this.Companyform?.controls['postalCode'].value,
              town: this.Companyform?.controls['town'].value,
              street: this.Companyform?.controls['street'].value,
              taxNumber: this.Companyform?.controls['taxNumber'].value,
              accountNumber: this.Companyform?.controls['accountNumber'].value
          }).subscribe((response) => {
              console.log(response)
          })

      }
  }




