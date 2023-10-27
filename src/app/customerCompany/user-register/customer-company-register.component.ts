import {Component, inject, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";



  @Component({
    selector: 'app-user-register',
    templateUrl: './customer-company-register.component.html',
    styleUrls: ['./customer-company-register.component.scss'],
  })




export class CustomerCompanyRegisterComponent {


    private userService = inject(UserService)
    form: FormGroup = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      telNum: new FormControl(),
      title: new FormControl(),
      password: new FormControl(),
      status: new FormControl()
    });


    ngOnInit() {
      this.form = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        telNum: new FormControl(),
        title: new FormControl(),
        password: new FormControl(),
        status: new FormControl()
      })
    }


    onSave() {
      this.userService.createUser({
        name: this.form?.controls['name'].value,
        email: this.form?.controls['email'].value,
        telNum: this.form?.controls['telNum'].value,
        title: this.form?.controls['title'].value,
        password: this.form?.controls['password'].value,
        status: this.form?.controls['status'].value
      }).subscribe((response) => {
        console.log(response)
      })
    }
  }

