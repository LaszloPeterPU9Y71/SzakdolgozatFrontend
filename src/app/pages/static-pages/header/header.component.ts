import {Component, } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private auth: AuthenticationService) {
  }

  logout(){
    this.auth.logout()
  }
}
