import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CustomerCompanyCreateRequest} from "../models/customer-company.model";


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
