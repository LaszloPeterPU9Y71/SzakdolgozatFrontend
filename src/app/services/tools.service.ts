import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DefectDto, ToolDto} from "../models/backend.models";






@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  host = 'http://localhost:8080/api/v1/tools';

  constructor(private http: HttpClient) { }

  createTool(tool: {
    itemNumber: string;
    serialNumber: string;
    typeNumber: string;
    name: string;
    employeeId: number | undefined;
    description: string;
    defects: number[];
  }): Observable<ToolDto>{
    return this.http.post<ToolDto>(this.host + "/create", tool);
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

  getToolByIdentifier(searchValue: string): Observable<ToolDto[]> {
    const encodedSearchValue = encodeURIComponent(searchValue);
    return this.http.get<ToolDto[]>(this.host + "/identifier/" + encodedSearchValue);
  }

  getToolBySerialNumber(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/serial/${searchValue}`);
  }

  getToolByStatus(searchValue: string): Observable<ToolDto[]> {
    return this.http.get<ToolDto[]>(this.host + `/status/${searchValue}`);
  }

  getToolById(id: number): Observable<ToolDto> {
    return this.http.get<ToolDto>(this.host + `/id/` + id);
  }

  updateStatus(machine: ToolDto): Observable<ToolDto> {
    return this.http.put<ToolDto>(this.host + `/update-status/${machine.id}`, machine);
  }










}
