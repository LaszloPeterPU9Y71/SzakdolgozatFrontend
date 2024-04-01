import {Component, OnInit} from '@angular/core';
import { ToolsService} from "../../../services/tools.service";

import {ToolDto} from "../../../models/backend.models";


@Component({
  selector: 'app-tool-search-typenumber',
  templateUrl: './tool-search-typenumber.component.html',
  styleUrls: ['./tool-search-typenumber.component.scss']
})
export class ToolSearchTypenumberComponent implements OnInit {

  searchValue = 'Folyamatban';
  searchList: ToolDto[] = [];


  constructor(
    private toolsService: ToolsService,
  ) {
  }

  ngOnInit(): void {
    this.toolsService
      .getToolByStatus(this.searchValue)
      .subscribe((searchList) => {
        this.searchList = searchList
        console.log(searchList)
        console.log(this.searchValue)
      })
  }
  onStatusChange(machine: ToolDto, $event: Event) {
    const newStatus = $event.target as HTMLInputElement;
    machine.status = newStatus.value;
    this.toolsService
      .updateTool(machine)
        .subscribe(console.log)
  }
}

