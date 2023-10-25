import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {ToolListComponent} from './tools/tool-list/tool-list.component';
import {ToolsService } from './tools/tools.service';
import {HttpClientModule } from '@angular/common/http';
import {ToolSearchComponent } from './tools/tool-arrived/tool-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {ToolSearchTypenumberComponent} from "./tools/tool-inprogress/tool-search-typenumber.component";
import {ToolReadyComponent} from "./tools/tool-ready/tool-ready.component";
import {ToolClosedComponent} from "./tools/tool-closed/tool-closed.component";
import {RepairManComponent} from "./repairMen/repairMan/repairMan.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolSearchComponent,
    HeaderComponent,
    ToolSearchTypenumberComponent,
    ToolReadyComponent,
    ToolClosedComponent,
    RepairManComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
