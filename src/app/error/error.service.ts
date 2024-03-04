import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ErrorService {


  errors = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {
  }
  public addErrors(errors: string[]){
    this.errors.next(errors);
  }
  public clearErrors(){
    this.errors.next([])
  }

}
