import {Component, OnInit} from '@angular/core';
import {Tool, ToolsService} from "../tools.service";


@Component({
  selector: 'app-tool-ready',
  templateUrl: './tool-ready.component.html',
  styleUrls: ['./tool-ready.component.scss']
})
export class ToolReadyComponent implements OnInit {

  searchValue = 'Kész';
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
}

