import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: "root"
})

export class EmailService {
  host = 'http://localhost:8080/api/v1/mail';

  constructor(private http: HttpClient) { }

  sendEmail(to : string){
    return this.http.get(this.host + `/mail`);
  }

}
