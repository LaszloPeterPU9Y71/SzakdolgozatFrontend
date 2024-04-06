import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DefectDto} from "../models/backend.models";




@Injectable({
  providedIn: 'root'
})
export class DefectService {
  host = 'http://localhost:8080/api/v1/defects';



  constructor(private http: HttpClient) { }

  createDefect(defect: { name: string }): Observable<DefectDto[]> {
   return this.http.post<DefectDto[]>(this.host + '/create', defect);
  }

  getDefectList(searchValue: string | undefined): Observable<DefectDto[]> {
    return this.http.get<DefectDto[]>(this.host + '/all');
  }

  findDefect(name: String): Observable<DefectDto[]> {
    return this.http.get<DefectDto[]>(this.host + "/name/" + name );
  }

  findDefectById(id: number[] | undefined): Observable<DefectDto[]>{
    return this.http.get<DefectDto[]>(this.host + "/find-by-id/" + id)
  }

}
