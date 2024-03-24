import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {UserRegisterComponent} from "./pages/user/user-register/user-register.component";
import {UserLoginComponent} from "./pages/user/user-login/user-login.component";
import {MainComponent} from "./pages/login/main.component";
import {HomeModule} from "./home.module";
import {ErrorCatchingInterceptor} from "./services/Interceptor/interceptor";
import {ErrorComponent} from "./services/error/error.component";


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    MainComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    FormsModule,
    HomeModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
