import {Component, inject} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../services/customer-company-employee.service";

@Component({
  selector: 'customer-company-employee-register',
  templateUrl: './customer-company-employee-register.component.html',
  styleUrls: ['./customer-company-employee-register.component.scss'],
})
export class CustomerRegisterComponent {




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
        }).subscribe((response) => {
            console.log(response)
        })
    }

}
