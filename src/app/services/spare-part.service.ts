import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SparePartCreateRequest} from "../models/spare-parts.model";

@Injectable({
  providedIn: 'root'
})
export class SparePartService {
  host = 'http://localhost:8080/api/v1/spare';



  constructor(private http: HttpClient) { }

  createSparePart(sparePart: SparePartCreateRequest): Observable<SparePartCreateRequest[]> {
    return this.http.post<SparePartCreateRequest[]>(this.host +`/create`, sparePart);
  }

  getSparepartsList(searchValue: string): Observable<SparePartCreateRequest[]> {
    return this.http.get<SparePartCreateRequest[]>(this.host +`/all`);
  }

}
