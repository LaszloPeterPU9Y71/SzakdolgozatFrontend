import {Component, OnInit, } from '@angular/core';
import {Defect, DefectService} from "../defect.service";



@Component({
  selector: '.app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.scss']
})
export class DefectListComponent implements  OnInit{



  searchValue = '';
  searchList: Defect[] = [];




  constructor(
    private defectService: DefectService,

  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    if (this.searchValue == '') {
      this.defectService
        .getDefectList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    }
  }
}
