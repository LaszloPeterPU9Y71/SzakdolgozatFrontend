import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {MainComponent} from "./main/main.component";
import {AddWorksheetComponent} from "./worksheet/newWorksheet/addWorksheet.component";
import {PrintWorksheetComponent} from "./worksheet/printWorksheet/printWorksheet.component";


const routes: Routes = ([

  {
    path: 'register',
    component: UserRegisterComponent,
  },

  {
    path: 'worksheet',
    component: PrintWorksheetComponent,
  },

  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  }




]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
