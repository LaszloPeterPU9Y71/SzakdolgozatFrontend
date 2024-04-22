import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SparePartDto} from "../models/backend.models";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {PopupService} from "./error-popup.service";

@Injectable({
  providedIn: 'root'
})
export class SparePartService {
  host = 'http://localhost:8080/api/v1/spare';



  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService,
  private errorPopup: PopupService,
  ) { }

  createSparePart(sparePart: {
    partNumber: string;
    nettoSellingPrice: number;
    partName: string;
    nettoBuyingPrice: number;
  }): Observable<SparePartDto[]> {
    return this.http.post<SparePartDto[]>(this.host +`/create`, sparePart,{
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

  getSparepartsList(searchValue: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/all`,{
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

  getSparepartByName(name: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/find-by-name/` + name,{
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

  getSparepartByNumber(name: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/find-by-number/` + name,{
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
  getSparepartById(id: number): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/id/` + id,{
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
