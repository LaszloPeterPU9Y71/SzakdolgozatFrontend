import {Injectable} from "@angular/core";
import {OwnerCompanyDto, OwnerCompanyEmployeeDto, ToolDto} from "../models/backend.models";

@Injectable({
  providedIn: 'root'
})

export class ObjectStore {

  selectedTool: ToolDto | undefined;

}
