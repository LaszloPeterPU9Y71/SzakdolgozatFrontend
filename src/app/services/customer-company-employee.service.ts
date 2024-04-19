import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {OwnerCompanyEmployeeDto} from "../models/backend.models";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {AuthenticationService} from "./authentication.service";
import {PopupService} from "./error-popup.service";

@Injectable({
  providedIn: "root"
})

export class CustomerService {
  host = 'http://localhost:8080/api/v1/owner-company-employee';



  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService,
    private errorPopup: PopupService
  ) { }

  createCustomer(customer: {
    ownerCompanyId: number | undefined;
    name: string;
    telNum: string;
    title: string;
    email: string
  })
    : Observable<OwnerCompanyEmployeeDto>{
    return this.http.post<OwnerCompanyEmployeeDto>(this.host + `/add-employee`, customer,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error);
        return of()
      }))
  }

  getEmployeeList(searchValue: string):Observable<OwnerCompanyEmployeeDto[]> {
    return this.http.get<OwnerCompanyEmployeeDto[]>(this.host + `/all`,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error);
        return of()
      }))

  }

  findEmployeeByName(name: String) {
    return this.http.get<OwnerCompanyEmployeeDto[]>(this.host + "/find-employee/" + name,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error);
        return of()
      }))
  }

  findEmployeeById(id: number | undefined) {
    return this.http.get<OwnerCompanyEmployeeDto>(this.host + "/find-by-id/" + id,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error);
        return of()
      }))
  }

}
