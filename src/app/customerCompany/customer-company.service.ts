import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface CustomerCreateRequest {

  name: string;
  telNum: number;
  email: string;
  password: string;
  title: string;
}




export interface CustomerCompanyCreateRequest{

  name: string;
  postalCode: number;
  town: string;
  street: string;
  taxNumber: string;
  accountNumber: string;

}


@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  host = 'http://localhost:8080/api/v1/ownercompany';



  constructor(private http: HttpClient) { }

  createCustomer(customer: CustomerCreateRequest): Observable<CustomerCreateRequest>{
    return this.http.post<CustomerCreateRequest>(this.host + `addEmployee`, customer)
  }

}

export class CustomerCompanyService {
  host = 'http://localhost:8080/api/v1/ownercompany';

  constructor(private http: HttpClient) { }

  createCustomerCompany(customerCompany: CustomerCompanyCreateRequest): Observable<CustomerCompanyCreateRequest>{
    return this.http.post<CustomerCompanyCreateRequest>(this.host + `addCompany`, customerCompany)
  }




}
