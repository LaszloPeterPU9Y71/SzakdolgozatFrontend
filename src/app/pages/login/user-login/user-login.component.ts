import {Component} from "@angular/core";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent {
  email: string = "";
  password: string = "";
  msg: string = "";

  constructor(private loginService: AuthenticationService,
              private router: Router) {

  }

  onLogin() {
    this.loginService.login(this.email, this.password).subscribe((res) => {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.router.navigate(['/home/tools'])
    });

  }


}

