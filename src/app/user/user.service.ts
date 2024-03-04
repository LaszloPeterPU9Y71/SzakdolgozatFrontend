import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";

export interface UserCreateRequest {
  name: string
  telNum: number;
  email: string;
  password: string;
  title: string;

}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  host = 'http://localhost:8080/api/v1/users';



  constructor(private http: HttpClient) { }

  createUser(user: UserCreateRequest): Observable<any> {
    return this.http.post<any>(this.host +`/create`, user);
  }
  load(user: UserCreateRequest): Observable<any> {
    return this.http
      .post<any>(this.host +`/create`, user)
  }

}
