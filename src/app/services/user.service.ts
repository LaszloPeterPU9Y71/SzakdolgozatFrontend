import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserDto} from "../models/backend.models";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";





@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = 'http://localhost:8080/api/v1/users';


  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: AuthenticationService
  ) {
  }

  createUser(user: {
    password: string;
    name: string;
    telNum: string;
    title: string;
    email: string;
    companyId: number | undefined;
  }): Observable<UserDto> {
    return this.http.post<UserDto>(this.host + `/create`, user)
      .pipe(catchError((err, caught) => {
        if (err.status === 401) {
          this.router.navigate(["/login"])
        }
        console.log("error?", err, caught)
        return of()
      }))
  }

  getRepairManList(searchValue: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.host + '/all',{
      headers: this.loginService.getAuthenticationHeader(localStorage.getItem("email")!,localStorage.getItem("password")!),
      responseType: "json"
    })
      .pipe(catchError((err, caught) => {
        if (err.status === 401) {
          this.router.navigate(["/login"])
        }
        console.log("error?", err, caught)
        return of()
      }))

  }
}
