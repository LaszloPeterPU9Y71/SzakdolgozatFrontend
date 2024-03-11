import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolListComponent} from "../tools/tool-list/tool-list.component";
import {ToolSearchComponent} from "../tools/tool-arrived/tool-search.component";
import {ToolSearchTypenumberComponent} from "../tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "../tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "../tools/tool-closed/tool-closed.component";
import {RepairManComponent} from "../repairMan/repairMen/repairMan.component";
import {AddWorksheetComponent} from "../worksheet/newWorksheet/addWorksheet.component";
import {HomeComponent} from "./home.component";
import {CreateSparePartComponent} from "../spareParts/createSparePart/create-spare-part.component";
import {SparePartsListComponent} from "../spareParts/sparePartsList/spare-parts-list.component";
import {DefectListComponent} from "../defects/defectList/defect-list.component";
import {CreateDefectComponent} from "../defects/createDefect/create-defect.component";
import {
  CustomerCompanyRegisterComponent
} from "../customerCompany/customer-company-register/customer-company-register.component";
import {CustomerCompanyListComponent} from "../customerCompany/customer-company-list/customer-company-list.component";
import {UpdateWorksheetComponent} from "../worksheet/updateWorksheet/updateWorksheet.component";
import {PrintWorksheetComponent} from "../worksheet/printWorksheet/printWorksheet.component";





const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'tools',
      component: ToolListComponent
    }]
  },

  {
    path: 'tools',
    component: ToolListComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'arrived',
      component: ToolSearchComponent
    }]
  },

  {
    path: 'arrived',
    component: ToolSearchComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'inprogress',
      component: ToolSearchTypenumberComponent
    }]
  },

  {
    path: 'inprogress',
    component: ToolSearchTypenumberComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'ready',
      component: ToolReadyComponent
    }]
  },

  {
    path: 'ready',
    component: ToolReadyComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'closed',
      component: ToolClosedComponent
    }]
  },

  {
    path: 'closed',
    component: ToolClosedComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'repairman',
      component: RepairManComponent
    }]
  },

  {
    path: 'repairman',
    component: RepairManComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'newworksheet',
      component: AddWorksheetComponent
    }]
  },

  {
    path: 'newworksheet',
    component: AddWorksheetComponent


  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'spareparts2',
      component: CreateSparePartComponent
    }]
  },

  {
    path: 'spareparts2',
    component: CreateSparePartComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'spareparts',
      component: SparePartsListComponent
    }]
  },

  {
    path: 'spareparts',
    component: SparePartsListComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'defects',
      component: DefectListComponent
    }]
  },

  {
    path: 'defects',
    component: DefectListComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'adddefect',
      component: CreateDefectComponent
    }]
  },

  {
    path: 'adddefect',
    component: CreateDefectComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'addcompany',
      component: CustomerCompanyRegisterComponent
    }]
  },

  {
    path: 'addcompany',
    component: CustomerCompanyRegisterComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'companylist',
      component: CustomerCompanyListComponent
    }]
  },

  {
    path: 'companylist',
    component: CustomerCompanyListComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'updateworksheet',
      component: UpdateWorksheetComponent
    }]
  },

  {
    path: 'updateworksheet',
    component: UpdateWorksheetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
