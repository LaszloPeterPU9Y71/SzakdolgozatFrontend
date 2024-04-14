import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {OwnerCompanyEmployeeDto} from "../models/backend.models";

@Injectable({
  providedIn: "root"
})

export class CustomerService {
  host = 'http://localhost:8080/api/v1/owner-company-employee';



  constructor(private http: HttpClient) { }

  createCustomer(customer: {
    ownerCompanyId: number | undefined;
    name: string;
    telNum: string;
    title: string;
    email: string
  })
    : Observable<OwnerCompanyEmployeeDto>{
    console.log("++++++++++" + customer.ownerCompanyId)
    return this.http.post<OwnerCompanyEmployeeDto>(this.host + `/add-employee`, customer)
  }

  getEmployeeList(searchValue: string):Observable<OwnerCompanyEmployeeDto[]> {
    return this.http.get<OwnerCompanyEmployeeDto[]>(this.host + `/all`);

  }

  findEmployeeByName(name: String) {
    return this.http.get<OwnerCompanyEmployeeDto[]>(this.host + "/find-employee/" + name);
  }

  findEmployeeById(id: number | undefined) {
    return this.http.get<OwnerCompanyEmployeeDto>(this.host + "/find-by-id/" + id);
  }

}
