import {Component, OnInit, } from '@angular/core';
import { DefectService} from "../../../services/defect.service";
import {Defect} from "../../../models/defect.model";



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
    this.defectService
      .getDefectList(this.searchValue)
      .subscribe((searchList) => {
        this.searchList = searchList
        console.log(searchList)
        console.log(this.searchValue)
      })
  }

}

