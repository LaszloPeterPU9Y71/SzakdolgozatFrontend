import {Component, inject} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {CompanyDto, OwnerCompanyDto} from "../../../models/backend.models";
import {CompanyService} from "../../../services/company.service";



  @Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.scss'],
  })




export class UserRegisterComponent {

    errorfield : string[] = []
    companies : CompanyDto[] | [] | undefined;
    selectedCompany: CompanyDto | undefined;
    companyService = inject(CompanyService);



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
        companyId: this.selectedCompany?.id,
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
    findCompany($event: Event) {
      let value = ($event.target as HTMLInputElement).value;
      this.companyService.findCompanyByName(value).subscribe((response : CompanyDto[] | []) => {
        this.companies = response;
        console.log(this.companies);
        ($event.target as HTMLInputElement).value = "";
      })
    }

    onCompanySelect(company: CompanyDto) {
      this.selectedCompany = company
      this.companyService.findCompanyById(company.id).subscribe((response: CompanyDto | undefined) =>{
        this.selectedCompany = response
      });
      this.companies = undefined;
    }
  }

