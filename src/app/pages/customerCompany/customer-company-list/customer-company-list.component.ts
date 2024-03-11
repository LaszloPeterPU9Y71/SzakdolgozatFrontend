import {Component, OnInit, } from '@angular/core';
import {CustomerCompanyCreateRequest, CustomerCompanyService, CustomerCreateRequest, CustomerService} from "../../../services/customer-company.service";


@Component({
  selector: '.app-defect-list',
  templateUrl: './customer-company-list.component.html',
  styleUrls: ['./customer-company-list.component.scss']
})
export class CustomerCompanyListComponent implements  OnInit{



  searchValue = '';
  searchCompany: CustomerCompanyCreateRequest[] = [];
  searchEmployee: CustomerCreateRequest[] = [];




  constructor(
    private customerComapnyService: CustomerCompanyService,
    private customerEmployeeService: CustomerService

  ) {}

  ngOnInit(): void {
    this.customerComapnyService
      .getCustomerCompanyList(this.searchValue)
      .subscribe((searchList: CustomerCompanyCreateRequest[]) => {
        this.searchCompany = searchList
        console.log(searchList)
        console.log(this.searchValue)
      } )
    this.customerEmployeeService
      .getEmployeeList(this.searchValue)
      .subscribe((searchList: CustomerCreateRequest[]) => {
        this.searchEmployee = searchList
        console.log(searchList)
        console.log(this.searchValue)
      } )
  }

}
