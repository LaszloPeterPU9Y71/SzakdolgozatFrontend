import {Component, OnInit, } from '@angular/core';
import {CustomerCompanyCreateRequest, CustomerCompanyService} from "../customer-company.service";


@Component({
  selector: '.app-defect-list',
  templateUrl: './customer-company-list.component.html',
  styleUrls: ['./customer-company-list.component.scss']
})
export class CustomerCompanyListComponent implements  OnInit{



  searchValue = '';
  searchList: CustomerCompanyCreateRequest[] = [];




  constructor(
    private customerComapnyService: CustomerCompanyService,

  ) {}

  ngOnInit(): void {
    this.customerComapnyService
      .getCustomerCompanyList(this.searchValue)
      .subscribe((searchList: CustomerCompanyCreateRequest[]) => {
        this.searchList = searchList
        console.log(searchList)
        console.log(this.searchValue)
      })
  }

}

