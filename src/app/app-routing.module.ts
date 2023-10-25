import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import {ToolSearchComponent} from "./tools/tool-arrived/tool-search.component";
import {ToolSearchTypenumberComponent} from "./tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "./tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "./tools/tool-closed/tool-closed.component";
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
  }


]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
