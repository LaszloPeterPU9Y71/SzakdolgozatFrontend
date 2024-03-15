import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RepairMan} from "../models/repair-man.model";





@Injectable({
  providedIn: 'root'
})

export class RepairManService{
  host = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {
  }


  getRepairManList(searchValue: string): Observable<RepairMan[]>{
    return this.http.get<RepairMan[]>(this.host + '/all')
  }

}
