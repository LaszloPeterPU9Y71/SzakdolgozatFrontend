import {Component, OnInit} from '@angular/core';
import {Tool, ToolsService} from "../tools.service";


@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss']
})
export class ToolSearchComponent implements OnInit {


  searchList: Tool[] = [];


  constructor(
    private toolsService: ToolsService,
  ) {
  }

  ngOnInit(): void {
    this.toolsService
      .getToolByStatus('Beérkezett')
      .subscribe((searchList) => {
        this.searchList = searchList
        console.log(searchList)
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

