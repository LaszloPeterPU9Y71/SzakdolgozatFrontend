import {Component, OnInit} from '@angular/core';
import {Tool, ToolsService} from "../tools.service";


@Component({
  selector: 'app-tool-search-typenumber',
  templateUrl: './tool-search-typenumber.component.html',
  styleUrls: ['./tool-search-typenumber.component.scss']
})
export class ToolSearchTypenumberComponent implements OnInit {

  searchValue = 'Folyamatban';
  searchList: Tool[] = [];


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
  onStatusChange(machine: Tool, $event: Event) {
    const newStatus = $event.target as HTMLInputElement;
    machine.status = newStatus.value;
    this.toolsService
      .updateTool(machine)
      .subscribe(console.log)
  }
}

