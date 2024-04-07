import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToolDto} from "../models/backend.models";




@Injectable({
  providedIn: "root"
})

export class EmailService {
  host = 'http://localhost:8080/api/v1/mail';

  constructor(private http: HttpClient) { }

  sendSimpleEmail(email: string, tool: ToolDto): void {

    this.http.post(this.host + '/send-email',  {email: email, tool }).subscribe(
      response => {
        console.log('Az e-mail-t sikeresen elküldtük:', response);
      },
      error => {
        console.error('Hiba történt az üzenet küldése közben:', error);
      }
    );
  }
}
