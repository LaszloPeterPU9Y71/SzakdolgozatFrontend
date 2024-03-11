import {Component, inject, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";



  @Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss'],
  })




export class UserRegisterComponent {

    errorfield : string[] = []

    private userService = inject(UserService)
    form: FormGroup = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      telNum: new FormControl(),
      title: new FormControl(),
      password: new FormControl(),

    });

    onSave() {
      this.userService.createUser({
        name: this.form?.controls['name'].value,
        email: this.form?.controls['email'].value,
        telNum: this.form?.controls['telNum'].value,
        title: this.form?.controls['title'].value,
        password: this.form?.controls['password'].value,
      }).pipe(
        catchError((err, caught) => {
          const errorMessage = 'error';
          this.errorfield[0] = errorMessage
          return of()
        }))

    .subscribe((response) => {
        console.log(response)
      })
    }
  }

