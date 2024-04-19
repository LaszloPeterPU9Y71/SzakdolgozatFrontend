import {NgModule } from '@angular/core';
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home/home.component';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./pages/static-pages/header/header.component";
import {RouterModule} from "@angular/router";
import {ToolListComponent} from "./pages/tools/tool-list/tool-list.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";
import {AddWorksheetComponent} from "./pages/worksheet/new-worksheet/add-worksheet.component";
import {ToolsService} from "./services/tools.service";
import {CommonModule} from "@angular/common";
import {CreateSparePartComponent} from "./pages/spareParts/create-sparepart/create-spare-part.component";
import {SparePartsListComponent} from "./pages/spareParts/spareparts-list/spare-parts-list.component";
import {DefectListComponent} from "./pages/defects/defectList/defect-list.component";
import {CreateDefectComponent} from "./pages/defects/create-defect/create-defect.component";
import {

  CustomerCompanyRegisterComponent
} from "./pages/customer-company/customer-company-register/customer-company-register.component";
import {CustomerCompanyListComponent} from "./pages/customer-company/customer-company-list/customer-company-list.component";
import {FooterComponent} from "./pages/static-pages/footer/footer.component";
import {UpdateWorksheetComponent} from "./pages/worksheet/update-worksheet/update-worksheet.component";
import {PrintWorksheetComponent} from "./pages/worksheet/print-worksheet/print-worksheet.component";
import {
  CustomerRegisterComponent
} from "./pages/customer-company-employee/customer-company-employee-register.component";
import {CompanyRegisterComponent} from "./pages/company/company-register.component";

import {ErrorPopupComponent} from "./error-popup/error-popup.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ToolListComponent,
    UserListComponent,
    AddWorksheetComponent,
    CreateSparePartComponent,
    SparePartsListComponent,
    DefectListComponent,
    CreateDefectComponent,
    CustomerCompanyRegisterComponent,
    CustomerCompanyListComponent,
    CustomerRegisterComponent,
    FooterComponent,
    UpdateWorksheetComponent,
    PrintWorksheetComponent,
    CompanyRegisterComponent,
    ErrorPopupComponent

  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,


  ],
  providers: [ToolsService],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
