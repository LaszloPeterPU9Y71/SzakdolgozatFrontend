import {Component, OnInit, } from '@angular/core';
import { CustomerCompanyService,} from "../../../services/customer-company.service";
import {CustomerService} from "../../../services/customer-company-employee.service";
import {OwnerCompanyDto, OwnerCompanyEmployeeDto} from "../../../models/backend.models";


@Component({
  selector: '.app-customer-company-list',
  templateUrl: './customer-company-list.component.html',
  styleUrls: ['./customer-company-list.component.scss']
})
export class CustomerCompanyListComponent implements  OnInit{

  searchValue = '';
  searchCompany: OwnerCompanyDto[] = [];
  searchEmployee: OwnerCompanyEmployeeDto[] = [];


  constructor(
    private customerCompanyService: CustomerCompanyService,
    private customerEmployeeService: CustomerService
  ){}

  ngOnInit(): void {
    this.customerCompanyService
      .getCustomerCompanyList(this.searchValue)
      .subscribe((searchList: OwnerCompanyDto[]) => {
        this.searchCompany = searchList
        console.log(searchList)
        console.log(this.searchValue)
      } )
    this.customerEmployeeService
      .getEmployeeList(this.searchValue)
      .subscribe((searchList: OwnerCompanyEmployeeDto[]) => {
        this.searchEmployee = searchList
        console.log(searchList)
        console.log(this.searchValue)
      } )
  }

}
