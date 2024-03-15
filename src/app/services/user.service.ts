import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserCreateRequest} from "../models/user.model";





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
