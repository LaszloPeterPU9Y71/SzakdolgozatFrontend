import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {CreateToolRequest, Tool} from "./tools.service";

@Injectable({
  providedIn: 'root'
})
export class WorksheetService {
  host = 'http://localhost:8080/api/v1/';



  constructor(private http: HttpClient) { }

  findCompany(name: String){
   return this.http.get<any>(this.host + "owner/findbyname/" + name);
  }
  findEmployee(name: String) {
    return this.http.get<any>(this.host + "ownercompany/findemployee/" + name);
  }

  createTool(tool: CreateToolRequest ): Observable<Tool>{
    return this.http.post<Tool>(this.host + "tools/create", tool);
  }

  findDefect(name: String) {
    return this.http.get<any>(this.host + "defects/name/" + name );
  }
}
