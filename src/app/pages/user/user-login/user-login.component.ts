import {Component, EventEmitter, Output} from "@angular/core";


  @Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
  })

export class UserLoginComponent{

    @Output() onSubmitLoginEvent = new EventEmitter();
    login: string = "";
    password: string = "";

    onSubmitLogin(): void{
      this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password})
    }

  }

