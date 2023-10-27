import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tool {
  id: number;
  name: string ;
  typeNumber: string ;
  itemNumber: string ;
  serialNumber: string ;
  dateOfReceiving: Date;
  status: string ;
}



@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  host = 'http://localhost:8080/api/v1/tools';

  constructor(private http: HttpClient) { }

  getToolList(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host +`/all`);
  }

  getToolByName(searchValue: string): Observable<Tool[]> {
   return this.http.get<Tool[]>(this.host + `/name=${searchValue}`);
   }

  getToolByTypeNumber(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + `/type=${searchValue}`);
  }
  getToolByItemNumber(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + `/item=${searchValue}`);
  }
  getToolBySerialNumber(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + `/serial=${searchValue}`);
  }

  getToolByStatus(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + `/status=${searchValue}`);
  }






}
