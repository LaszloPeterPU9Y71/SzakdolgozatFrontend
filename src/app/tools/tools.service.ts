import { Injectable } from '@angular/core';
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
  host = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getToolList(searchValue: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + '/tools/all');
  }

  getToolByName(name: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.host + `/tools/name/title_like=${name}`);
  }
}
