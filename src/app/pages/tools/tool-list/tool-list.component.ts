import {Component, OnInit, } from '@angular/core';
import {  ToolsService } from '../../../services/tools.service';
import {FormBuilder} from "@angular/forms";
import {OwnerCompanyDto, OwnerCompanyEmployeeDto, ToolDto} from "../../../models/backend.models";
import {Router} from "@angular/router";
import {ObjectStore} from "../../../services/object-store";
import {CustomerService} from "../../../services/customer-company-employee.service";
import {CustomerCompanyService} from "../../../services/customer-company.service";
import {EmailService} from "../../../services/email.service";


@Component({
  selector: '.app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements  OnInit {


  searchValue = '';
  searchList: ToolDto[] = [];
  searchFormName = this.fb.nonNullable.group({searchValue: ''});
  searchFormTypeNumber = this.fb.nonNullable.group({searchValue: ''});
  searchFormSerialNumber = this.fb.nonNullable.group({searchValue: ''});
  searchFormItemNumber = this.fb.nonNullable.group({searchValue: ''});


  constructor(
    private toolsService: ToolsService,
    private fb: FormBuilder,
    private router: Router,
    private objectStore: ObjectStore,
    private emailService: EmailService,

  ){
  }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByName(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmitName(): void {
    this.searchValue = this.searchFormName.value.searchValue ?? '';
    this.fetchData();
  }

  fetchDataTypeNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByTypeNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmitTypeNumber(): void {
    this.searchValue = this.searchFormTypeNumber.value.searchValue ?? '';
    this.fetchDataTypeNumber();
  }

  fetchDataItemNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByItemNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmitItemNumber(): void {
    this.searchValue = this.searchFormItemNumber.value.searchValue ?? '';
    this.fetchDataItemNumber();
  }

  fetchDataSerialNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolBySerialNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmitSerialNumber(): void {

    this.searchValue = this.searchFormSerialNumber.value.searchValue ?? '';
    this.fetchDataSerialNumber();
  }

  onStatusChange(machine: ToolDto, $event: Event) {
    const newStatus = $event.target as HTMLInputElement;
    machine.status = newStatus.value;
    this.toolsService
      .updateTool(machine)
        .subscribe(console.log)
  }

  selectOnClick(id: number) {
    this.toolsService.getToolById(id).subscribe((response: ToolDto) => {
      this.objectStore.selectedTool = response;
      this.router.navigate(['/home/update-worksheet']);
    })

  }

}