import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToolListComponent} from "./pages/tools/tool-list/tool-list.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";
import {AddWorksheetComponent} from "./pages/worksheet/new-worksheet/add-worksheet.component";
import {HomeComponent} from "./home/home.component";
import {CreateSparePartComponent} from "./pages/spareParts/create-sparepart/create-spare-part.component";
import {SparePartsListComponent} from "./pages/spareParts/spareparts-list/spare-parts-list.component";
import {DefectListComponent} from "./pages/defects/defectList/defect-list.component";
import {CreateDefectComponent} from "./pages/defects/create-defect/create-defect.component";
import {
  CustomerCompanyRegisterComponent
} from "./pages/customer-company/customer-company-register/customer-company-register.component";
import {CustomerCompanyListComponent} from "./pages/customer-company/customer-company-list/customer-company-list.component";
import {UpdateWorksheetComponent} from "./pages/worksheet/update-worksheet/update-worksheet.component";
import {
  CustomerRegisterComponent
} from "./pages/customer-company-employee/customer-company-employee-register.component";
import {CompanyRegisterComponent} from "./pages/company/company-register.component";


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
      path: 'repairman',
      component: UserListComponent
    }]
  },

  {
    path: 'repairman',
    component: UserListComponent,
  },

  {
    path:'',
    component: HomeComponent,
    children: [{
      path: 'new-worksheet',
      component: AddWorksheetComponent
    }]
  },

  {
    path: 'new-worksheet',
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
      path: 'add-defect',
      component: CreateDefectComponent
    }]
  },

  {
    path: 'add-defect',
    component: CreateDefectComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'add-company',
      component: CustomerCompanyRegisterComponent
    }]
  },

  {
    path: 'add-company',
    component: CustomerCompanyRegisterComponent
  },

  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'add-company-employee',
      component: CustomerRegisterComponent
    }]
  },

  {
    path: 'add-company-employee',
    component: CustomerRegisterComponent
  },


  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'company-list',
      component: CustomerCompanyListComponent
    }]
  },

  {
    path: 'company-list',
    component: CustomerCompanyListComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'update-worksheet',
      component: UpdateWorksheetComponent
    }]
  },

  {
    path: 'update-worksheet',
    component: UpdateWorksheetComponent
  },

  {
    path: 'create-company',
    component: CompanyRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
