import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import { ToolsService } from './tools/tools.service';
import { HttpClientModule } from '@angular/common/http';
import { ToolSearchComponent } from './tools/tool-search/tool-search.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
