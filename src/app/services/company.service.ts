import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CompanyDto} from "../models/backend.models";


@Injectable({
  providedIn: "root"
})

export class CompanyService {
  host = 'http://localhost:8080/api/v1/company';

  constructor(private http: HttpClient) { }

  createCompany(company: {
    town: string;
    street: string;
    name: string;
    postalCode: number;
    taxNumber: string
  }): Observable<CompanyDto>{
    return this.http.post<CompanyDto>(this.host + `/create`, company)
  }

  findCompanyById(id: number): Observable<CompanyDto>{
    return this.http.get<CompanyDto>(this.host + "/find-by-id/" + id);
  }

  findCompanyByName(name: string): Observable<CompanyDto[]>{
    return this.http.get<CompanyDto[]>(this.host + "/find-by-name/" + name);
  }

}
