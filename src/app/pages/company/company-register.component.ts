import {Component, inject} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";


@Component({
    selector: 'company-register',
    templateUrl: './company-register.component.html',
    styleUrls: ['./company-register.component.scss'],
  })




export class CompanyRegisterComponent {


  constructor(private router: Router) {
  }



    private CompanyService = inject(CompanyService)
          Companyform : FormGroup = new FormGroup({
          companyName: new FormControl(),
          postalCode: new FormControl(),
          town: new FormControl(),
          street: new FormControl(),
          taxNumber: new FormControl(),


      })


      onSaveCompany() {
          this.CompanyService.createCompany({
              name: this.Companyform?.controls['companyName'].value,
              postalCode: this.Companyform?.controls['postalCode'].value,
              town: this.Companyform?.controls['town'].value,
              street: this.Companyform?.controls['street'].value,
              taxNumber: this.Companyform?.controls['taxNumber'].value,
          }).subscribe((response) => {
              console.log(response)
              this.router.navigate(['/register']);
          })



      }
  }




