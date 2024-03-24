import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDto} from "../models/backend.models";





@Injectable({
  providedIn: 'root'
})

export class RepairManService{
  host = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {
  }


  getRepairManList(searchValue: string): Observable<UserDto[]>{
    return this.http.get<UserDto[]>(this.host + '/all')
  }

}
