import { Component } from '@angular/core';
import { Tool, ToolsService } from '../tools.service';

@Component({
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent {
  data: Tool[] = [];
  searchValue = '';
  constructor(private toolService: ToolsService) { }

  ngOnInit() {
    this.toolService
      .getToolList(this.searchValue)
      .subscribe((data) => {
        this.data = data;
        console.log(data);
      });
  }

  protected readonly ToolsService = ToolsService;
}
