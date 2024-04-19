import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CompanyDto} from "../models/backend.models";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {PopupService} from "./error-popup.service";


@Injectable({
  providedIn: "root"
})

export class CompanyService {
  host = 'http://localhost:8080/api/v1/company';

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService,
    private errorPopup: PopupService
  ) { }

  createCompany(company: {
    town: string;
    street: string;
    name: string;
    postalCode: number;
    taxNumber: string
  }): Observable<CompanyDto>{
    return this.http.post<CompanyDto>(this.host + `/create`, company,{
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error);
        return of()
      }))
  }

  findCompanyById(id: number): Observable<CompanyDto>{
    return this.http.get<CompanyDto>(this.host + "/find-by-id/" + id,{
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

  findCompanyByName(name: string): Observable<CompanyDto[]>{
    return this.http.get<CompanyDto[]>(this.host + "/find-by-name/" + name,{
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
