import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ToolDto} from "../models/backend.models";
import {AuthenticationService} from "./authentication.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

import {PopupService} from "./error-popup.service";






@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  host = 'http://localhost:8080/api/v1/tools';


  constructor(private http: HttpClient,
              private loginService: AuthenticationService,
              private router: Router,
              private errorPopup: PopupService,
  ) { }

  createTool(tool: {
    itemNumber: string;
    serialNumber: string;
    typeNumber: string;
    name: string;
    employeeId: number | undefined;
    description: string;
    defects: number[];
    isWarranty: boolean;
    isWarrantyTicket: boolean;
    isInvoice: boolean;
    isRegistration: boolean;

  }): Observable<ToolDto>{
    return this.http.post<ToolDto>(this.host + "/create", tool,{
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

  getToolList(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host +`/all`, {
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

  getToolByName(searchValue: string): Observable<ToolDto[]> {
   return this.http.get<ToolDto[]>(this.host + `/name/${searchValue}`,{
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

  getToolByTypeNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/type/${searchValue}`,{
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
  getToolByItemNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/item/${searchValue}`,{
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

  getToolByIdentifier(searchValue: string): Observable<ToolDto[]> {
    const encodedSearchValue = encodeURIComponent(searchValue);
    return this.http.get<ToolDto[]>(this.host + "/identifier/" + encodedSearchValue,{
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

  getToolBySerialNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/serial/${searchValue}`,{
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

  getToolByStatus(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/status/${searchValue}`,{
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

  getToolById(id: number): Observable<ToolDto> {
    return this.http.get<ToolDto>(this.host + `/id/` + id, {
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

  updateStatus(machine: ToolDto): Observable<ToolDto> {
    return this.http.put<ToolDto>(this.host + `/update-status/${machine.id}`, machine ,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error.text);
        console.log(err, caught)
        return of()
      }))
  }
  updateToolData(machine: ToolDto): Observable<ToolDto> {
    console.log("+++", machine)
    const convMap = {};
    machine.spareParts.forEach((val: number, key: number) => {
      convMap[key.toString()] = val;
    });
    return this.http.put<ToolDto>(this.host + `/update-tool-data/${machine.id}`, machine ,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"

    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog(err.error.text);
        console.log(err, caught)
        return of()
      }))
  }









}
