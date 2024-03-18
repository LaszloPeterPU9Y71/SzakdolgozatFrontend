import {Component, OnInit, } from '@angular/core';
import {
  SparePartService} from "../../../services/spare-part.service";
import {SparePartCreateRequest} from "../../../models/spare-parts.model";



@Component({
  selector: '.app-tool-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent implements  OnInit{



  searchValue = '';
  searchList: SparePartCreateRequest[] = [];




  constructor(
    private sparePartService: SparePartService,

  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    if (this.searchValue == '') {
      this.sparePartService
        .getSparepartsList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    }
  }
}
