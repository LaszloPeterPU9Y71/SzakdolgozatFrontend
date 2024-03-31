import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto} from "../models/backend.models";





@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = 'http://localhost:8080/api/v1/users';



  constructor(private http: HttpClient) { }

    createUser(user: {
      password: string;
      name: string;
      telNum: string;
      title: string;
      email: string;
      companyId: number | undefined;
    }): Observable<UserDto> {
    return this.http.post<UserDto>(this.host +`/create`, user);
  }

  getRepairManList(searchValue: string): Observable<UserDto[]>{
    return this.http.get<UserDto[]>(this.host + '/all')
  }

}
