import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getAuthenticationHeader(email: string, password: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(email + ':' + password)
    })
  }

  login(email: string, password: string) {
    return this.http.post<string>("http://localhost:8080/api/v1/login", {}, {
      headers: this.getAuthenticationHeader(email, password),
      responseType: "json"
    },)
      .pipe(catchError((err, caught) => {
        console.log("error?", err, caught)
        return of()
      }))
  }

}
