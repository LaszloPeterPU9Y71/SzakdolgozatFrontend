import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CustomerCreateRequest} from "../models/customer-company-employee.model";
import {Observable} from "rxjs";
import {ResponseTypes} from "../models/customer-company.model";

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
