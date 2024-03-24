import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseTypes} from "../models/customer-company.model";
import {OwnerCompanyEmployeeDto} from "../models/backend.models";

@Injectable({
  providedIn: "root"
})

export class CustomerService {
  host = 'http://localhost:8080/api/v1/owner-company-employee';



  constructor(private http: HttpClient) { }

  createCustomer(customer: {
    name: string;
    telNum: string;
    title: string;
    email: string})
    : Observable<ResponseTypes<OwnerCompanyEmployeeDto>>{
    return this.http.post<ResponseTypes<OwnerCompanyEmployeeDto>>(this.host + `/add-employee`, customer)
  }

  getEmployeeList(searchValue: string):Observable<OwnerCompanyEmployeeDto[]> {
    return this.http.get<OwnerCompanyEmployeeDto[]>(this.host + `/all`);

  }

}
