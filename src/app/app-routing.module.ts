import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRegisterComponent} from "./pages/user/user-register/user-register.component";
import {UserLoginComponent} from "./pages/login/user-login/user-login.component";
import {MainComponent} from "./pages/login/main.component";
import {PrintWorksheetComponent} from "./pages/worksheet/print-worksheet/print-worksheet.component";


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
    loadChildren: () => import('./home.module').then(x => x.HomeModule)
  }




]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
