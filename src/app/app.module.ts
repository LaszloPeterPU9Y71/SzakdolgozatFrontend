import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {UserRegisterComponent} from "./pages/user/user-register/user-register.component";
import {UserLoginComponent} from "./pages/login/user-login/user-login.component";
import {MainComponent} from "./pages/login/main.component";
import {HomeModule} from "./home.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    MainComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    FormsModule,
    HomeModule,
    BrowserAnimationsModule,





  ],
  providers: [

  ],
  exports: [
    UserLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
