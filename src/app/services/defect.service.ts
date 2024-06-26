import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {DefectDto} from "../models/backend.models";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {AuthenticationService} from "./authentication.service";
import {PopupService} from "./error-popup.service";




@Injectable({
  providedIn: 'root'
})
export class DefectService {
  host = 'http://localhost:8080/api/v1/defects';



  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService,
    private errorPopup: PopupService,
  ) { }

  createDefect(defect: { name: string }): Observable<DefectDto[]> {
   return this.http.post<DefectDto[]>(this.host + '/create', defect,{
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

  getDefectList(searchValue: string | undefined): Observable<DefectDto[]> {
    return this.http.get<DefectDto[]>(this.host + '/all',{
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

  findDefect(name: String): Observable<DefectDto[]> {
    return this.http.get<DefectDto[]>(this.host + "/name/" + name,{
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

  findDefectById(id: number[] | undefined): Observable<DefectDto[]>{
    return this.http.get<DefectDto[]>(this.host + "/find-by-id/" + id,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog("Ehhez a géphez még nem vettek fel hibajelenséget");
        return of()
      }))
  }

}
