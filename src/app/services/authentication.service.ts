import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";
import {PopupService} from "./error-popup.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private router: Router,
              private errorPopup: PopupService,
              ) {

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
    })
      .pipe(catchError((err, caught) => {
        if(err.status === 401){
          this.router.navigate(["/login"])
        }
        this.errorPopup.openErrorDialog("Hibás e-mail cím vagy jelszó");
        return of()
      }))
  }

  logout(){
    localStorage.setItem("email", "")
    localStorage.setItem("password", "")
    this.router.navigate(["/login"])
  }

}
