import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SparePartDto} from "../models/backend.models";

@Injectable({
  providedIn: 'root'
})
export class SparePartService {
  host = 'http://localhost:8080/api/v1/spare';



  constructor(private http: HttpClient) { }

  createSparePart(sparePart: SparePartDto): Observable<SparePartDto[]> {
    return this.http.post<SparePartDto[]>(this.host +`/create`, sparePart);
  }

  getSparepartsList(searchValue: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/all`);
  }

  getSparepartByName(name: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/find-by-name/` + name);
  }

  getSparepartByNumber(name: string): Observable<SparePartDto[]> {
    return this.http.get<SparePartDto[]>(this.host +`/find-by-number/` + name);
  }
}
