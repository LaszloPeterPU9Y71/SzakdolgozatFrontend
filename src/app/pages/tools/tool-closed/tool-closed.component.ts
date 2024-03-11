import {Component, OnInit} from '@angular/core';
import {Tool, ToolsService} from "../../../services/tools.service";


@Component({
  selector: 'app-tool-closed-typenumber',
  templateUrl: './tool-closed.component.html',
  styleUrls: ['./tool-closed.component.scss']
})
export class ToolClosedComponent implements OnInit {

  searchValue = 'Lezárt';
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
      .subscribe();
      console.log(machine);
    };

}

