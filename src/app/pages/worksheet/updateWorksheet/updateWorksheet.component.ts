import {Component, inject, OnInit} from "@angular/core";

import {ToolListComponent} from "../../tools/tool-list/tool-list.component";
import {ToolsService} from "../../../services/tools.service";
import {ToolDto} from "../../../models/backend.models";


  @Component({
    selector: 'app-user-login',
    templateUrl: './updateWorksheet.component.html',
    styleUrls: ['./updateWorksheet.component.scss']
  })

export class UpdateWorksheetComponent implements OnInit {

    searchList: ToolDto[] = [];
    toolService = inject(ToolsService);

    ngOnInit() {
      this.toolService.getToolByName("Fúrókalapács")
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    }
  }
