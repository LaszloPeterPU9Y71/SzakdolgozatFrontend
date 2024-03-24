import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ToolDto} from "../models/backend.models";






@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  host = 'http://localhost:8080/api/v1/tools';

  constructor(private http: HttpClient) { }

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

  getToolList(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host +`/all`);
  }

  getToolByName(searchValue: string): Observable<ToolDto[]> {
   return this.http.get<ToolDto[]>(this.host + `/name/${searchValue}`);
   }

  getToolByTypeNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/type/${searchValue}`);
  }
  getToolByItemNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/item/${searchValue}`);
  }
  getToolBySerialNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/serial/${searchValue}`);
  }

  getToolByStatus(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/status/${searchValue}`);
  }

  updateTool(machine: ToolDto): Observable<string> {
    return this.http.put<string>(this.host + `/update/${machine.id}`, machine);
  }








}
