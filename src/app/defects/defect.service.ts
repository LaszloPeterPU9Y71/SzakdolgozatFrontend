import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Defect {

  defectName: string;

}

@Injectable({
  providedIn: 'root'
})
export class DefectService {
  host = 'http://localhost:8080/api/v1/defects';



  constructor(private http: HttpClient) { }

  createDefect(defect: Defect): Observable<Defect[]>{
   return this.http.post<Defect[]>(this.host + `/create`, defect);
  }

  getDefectList(searchValue: string): Observable<Defect[]> {
    return this.http.get<Defect[]>(this.host +`/all`);
  }

}
