import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {OwnerCompanyDto, ToolDto} from "../models/backend.models";


@Injectable({
  providedIn: 'root'
})
export class WorksheetService {
  host = 'http://localhost:8080/api/v1/';



  constructor(private http: HttpClient) { }

  findCompanyById(id: number): Observable<OwnerCompanyDto>{
   return this.http.get<OwnerCompanyDto>(this.host + "owner/find-by-id/" + id);
  }
  findEmployee(name: String) {
    return this.http.get<any>(this.host + "owner-company-employee/find-employee/" + name);
  }

  createTool(tool: {
    itemNumber: String;
    serialNumber: String;
    typeNumber: String;
    name: String;
    id: number | undefined;
    defectsId: number | undefined;
  }): Observable<ToolDto>{
    return this.http.post<ToolDto>(this.host + "tools/create", tool);
  }

  findDefect(name: String) {
    return this.http.get<any>(this.host + "defects/name/" + name );
  }
}
