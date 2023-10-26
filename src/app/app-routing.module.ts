import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import {ToolSearchComponent} from "./tools/tool-arrived/tool-search.component";
import {ToolSearchTypenumberComponent} from "./tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "./tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "./tools/tool-closed/tool-closed.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {MainComponent} from "./main/main.component";
import {WorksheetComponent} from "./worksheet/worksheet.component";
import {RepairManComponent} from "./repairMen/repairMan/repairMan.component";

const routes: Routes = ([
  {
    path: 'tools',
    component: ToolListComponent,
  },

  {
    path: 'arrived',
    component: ToolSearchComponent,
  },

  {
    path: 'inprogress',
    component: ToolSearchTypenumberComponent,
  },

  {
    path: 'ready',
    component: ToolReadyComponent,
  },

  {
    path: 'closed',
    component: ToolClosedComponent,
  },

  {
    path: 'repairman',
    component: RepairManComponent,
  },

  {
    path: 'register',
    component: UserRegisterComponent,
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
    path: 'worksheet',
    component: WorksheetComponent,
  }


]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
