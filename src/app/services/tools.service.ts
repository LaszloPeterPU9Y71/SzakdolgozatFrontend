import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {DefectDto, ToolDto} from "../models/backend.models";
import {AuthenticationService} from "./authentication.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";






@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  host = 'http://localhost:8080/api/v1/tools';

  constructor(private http: HttpClient,
              private loginService: AuthenticationService,
              private router: Router) { }

  createTool(tool: {
    itemNumber: string;
    serialNumber: string;
    typeNumber: string;
    name: string;
    employeeId: number | undefined;
    description: string;
    defects: number[];
    isWarranty: boolean | undefined;
    isWarrantyTicket: boolean | undefined;
    isInvoice: boolean | undefined;
    isRegistration: boolean | undefined;
  }): Observable<ToolDto>{
    return this.http.post<ToolDto>(this.host + "/create", tool,{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
        responseType: "json"
    })
  .pipe(catchError((err, caught) => {
      if(err.status === 401){
        this.router.navigate(["/login"])
      }
      console.log("error?", err, caught)
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
          console.log("error?", err, caught)
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
      console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
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
        console.log("error?", err, caught)
        return of()
      }))
  }










}
