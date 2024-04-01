import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OwnerCompanyDto} from "../models/backend.models";


@Injectable({
  providedIn: "root"
})

export class CustomerCompanyService {
  host = 'http://localhost:8080/api/v1/owner';

  constructor(private http: HttpClient) { }

  createCustomerCompany(ownerCompany: {
    town: string;
    street: string;
    companyName: string;
    postalCode: number;
    taxNumber: string;
    accountNumber: string;
  }): Observable<OwnerCompanyDto>{
    return this.http.post<OwnerCompanyDto>(this.host + `/add-company`,ownerCompany)
  }


  getCustomerCompanyList(searchValue: string):Observable<OwnerCompanyDto[]> {
    return this.http.get<OwnerCompanyDto[]>(this.host + `/all`);

  }

  findCompanyById(id: number | undefined): Observable<OwnerCompanyDto>{
    return this.http.get<OwnerCompanyDto>(this.host + "/find-by-id/" + id);
  }

  findCompanyByName(name: string): Observable<OwnerCompanyDto[]>{
    return this.http.get<OwnerCompanyDto[]>(this.host + "/find-by-name/" + name);
  }

}
