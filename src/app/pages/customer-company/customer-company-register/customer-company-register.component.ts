import {Component, inject} from "@angular/core";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
    selector: 'customer-company-register',
    templateUrl: './customer-company-register.component.html',
    styleUrls: ['./customer-company-register.component.scss'],
  })




export class CustomerCompanyRegisterComponent {

  constructor(private router: Router) {
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
              this.router.navigate(['/home/add-company-employee']);
          })



      }
  }




