import {Component, OnInit} from '@angular/core';
import {Tool, ToolsService} from "../tools.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss']
})
export class ToolSearchComponent implements  OnInit{

  searchValue = ''
  searchList: Tool[] = [];
  searchForm = this.fb.nonNullable.group({searchValue: ''});

  constructor(
    private toolsService: ToolsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    this.toolsService
      .getToolByName(this.searchValue)
      .subscribe((searchList) =>{
      this.searchList = searchList
    });
  }

  onSearchSubmit(): void{
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }

}
