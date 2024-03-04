import {NgModule } from '@angular/core';
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home.component';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {RouterModule} from "@angular/router";
import {ToolListComponent} from "../tools/tool-list/tool-list.component";
import {ToolSearchComponent} from "../tools/tool-arrived/tool-search.component";
import {ToolSearchTypenumberComponent} from "../tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "../tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "../tools/tool-closed/tool-closed.component";
import {RepairManComponent} from "../repairMen/repairMan/repairMan.component";
import {AddWorksheetComponent} from "../worksheet/newWorksheet/addWorksheet.component";
import {ToolsService} from "../tools/tools.service";
import {CommonModule} from "@angular/common";
import {CreateSparePartComponent} from "../spareParts/createSparePart/create-spare-part.component";
import {SparePartsListComponent} from "../spareParts/sparePartsList/spare-parts-list.component";
import {DefectListComponent} from "../defects/defectList/defect-list.component";
import {CreateDefectComponent} from "../defects/createDefect/create-defect.component";
import {
  CustomerCompanyRegisterComponent
} from "../customerCompany/customer-company-register/customer-company-register.component";
import {CustomerCompanyListComponent} from "../customerCompany/customer-company-list/customer-company-list.component";
import {FooterComponent} from "../footer/footer.component";
import {UpdateWorksheetComponent} from "../worksheet/updateWorksheet/updateWorksheet.component";
import {PrintWorksheetComponent} from "../worksheet/printWorksheet/printWorksheet.component";

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
