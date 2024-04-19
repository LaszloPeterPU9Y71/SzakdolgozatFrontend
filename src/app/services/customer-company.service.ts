import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {OwnerCompanyDto} from "../models/backend.models";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {AuthenticationService} from "./authentication.service";
import {PopupService} from "./error-popup.service";


@Injectable({
  providedIn: "root"
})

export class CustomerCompanyService {
  host = 'http://localhost:8080/api/v1/owner';

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService,
    private errorPopup: PopupService
  ) { }

  createCustomerCompany(ownerCompany: {
    town: string;
    street: string;
    companyName: string;
    postalCode: number;
    taxNumber: string;
    accountNumber: string;
  }): Observable<OwnerCompanyDto>{
    return this.http.post<OwnerCompanyDto>(this.host + `/add-company`,ownerCompany,{
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


  getCustomerCompanyList(searchValue: string):Observable<OwnerCompanyDto[]> {
    return this.http.get<OwnerCompanyDto[]>(this.host + `/all`,{
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

  findCompanyById(id: number | undefined): Observable<OwnerCompanyDto>{
    return this.http.get<OwnerCompanyDto>(this.host + "/find-by-id/" + id,{
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

  findCompanyByName(name: string): Observable<OwnerCompanyDto[]>{
    return this.http.get<OwnerCompanyDto[]>(this.host + "/find-by-name/" + name,{
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
