import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import {ToolSearchComponent} from "./tools/tool-search/tool-search.component";

const routes: Routes = ([
  {
    path: 'tools',
    component: ToolListComponent,
  },

  {
    path: 'name',
    component: ToolSearchComponent,
  }

]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
