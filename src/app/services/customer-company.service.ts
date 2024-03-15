import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CustomerCompanyCreateRequest, CustomerCreateRequest, ResponseTypes} from "../models/customer-company.model";


@Injectable({
  providedIn: "root"
})

export class CustomerService {
  host = 'http://localhost:8080/api/v1/ownercompany';



  constructor(private http: HttpClient) { }

  createCustomer(customer: CustomerCreateRequest): Observable<ResponseTypes<CustomerCreateRequest>>{
    return this.http.post<ResponseTypes<CustomerCreateRequest>>(this.host + `/addEmployee`, customer)
  }

  getEmployeeList(searchValue: string):Observable<CustomerCreateRequest[]> {
    return this.http.get<CustomerCreateRequest[]>(this.host + `/findall`);

  }

}

@Injectable({
  providedIn: "root"
})

export class CustomerCompanyService {
  host = 'http://localhost:8080/api/v1/owner';

  constructor(private http: HttpClient) { }

  createCustomerCompany(customerCompany: {
    town: any;
    street: any;
    companyName: any;
    postalCode: any;
    taxNumber: any;
    accountNumber: any

  }): Observable<CustomerCompanyCreateRequest>{
    return this.http.post<CustomerCompanyCreateRequest>(this.host + `/addCompany`, customerCompany)
  }


  getCustomerCompanyList(searchValue: string):Observable<CustomerCompanyCreateRequest[]> {
    return this.http.get<CustomerCompanyCreateRequest[]>(this.host + `/all`);

  }

}
