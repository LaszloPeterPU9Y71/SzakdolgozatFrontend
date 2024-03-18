import {NgModule } from '@angular/core';
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home.component';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../pages/static-pages/header/header.component";
import {RouterModule} from "@angular/router";
import {ToolListComponent} from "../pages/tools/tool-list/tool-list.component";
import {ToolSearchComponent} from "../pages/tools/tool-arrived/tool-search.component";
import {ToolSearchTypenumberComponent} from "../pages/tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "../pages/tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "../pages/tools/tool-closed/tool-closed.component";
import {RepairManComponent} from "../pages/repairman/repairMan.component";
import {AddWorksheetComponent} from "../pages/worksheet/newWorksheet/addWorksheet.component";
import {ToolsService} from "../services/tools.service";
import {CommonModule} from "@angular/common";
import {CreateSparePartComponent} from "../pages/spareParts/createSparePart/create-spare-part.component";
import {SparePartsListComponent} from "../pages/spareParts/sparePartsList/spare-parts-list.component";
import {DefectListComponent} from "../pages/defects/defectList/defect-list.component";
import {CreateDefectComponent} from "../pages/defects/createDefect/create-defect.component";
import {
  CustomerCompanyRegisterComponent
} from "../pages/customer-company/customer-company-register/customer-company-register.component";
import {CustomerCompanyListComponent} from "../pages/customer-company/customer-company-list/customer-company-list.component";
import {FooterComponent} from "../pages/static-pages/footer/footer.component";
import {UpdateWorksheetComponent} from "../pages/worksheet/updateWorksheet/updateWorksheet.component";
import {PrintWorksheetComponent} from "../pages/worksheet/printWorksheet/printWorksheet.component";
import {
  CustomerRegisterComponent
} from "../pages/customer-company-employee/customer-company-employee-register.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ToolListComponent,
    ToolSearchComponent,
    ToolSearchTypenumberComponent,
    ToolReadyComponent,
    ToolClosedComponent,
    RepairManComponent,
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
    PrintWorksheetComponent

  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [ToolsService],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
