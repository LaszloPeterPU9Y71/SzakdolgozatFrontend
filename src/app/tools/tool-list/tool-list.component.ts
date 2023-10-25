import {Component, OnInit, } from '@angular/core';
import { Tool, ToolsService } from '../tools.service';
import {FormBuilder} from "@angular/forms";



@Component({
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements  OnInit{



  searchValue = '';
  searchList: Tool[] = [];
  searchForm = this.fb.nonNullable.group({searchValue:''});



  constructor(
    private toolsService: ToolsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    }else
      this.toolsService
        .getToolByName(this.searchValue)
        .subscribe((searchList) =>{
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }

}
