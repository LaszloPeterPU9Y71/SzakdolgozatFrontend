import {Component, OnInit, } from '@angular/core';
import {ToolsService } from '../../../services/tools.service';
import {FormBuilder} from "@angular/forms";
import {ToolDto} from "../../../models/backend.models";
import {Router} from "@angular/router";
import {ObjectStore} from "../../../services/object-store";


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
  searchFormCustomerEmployee = this.fb.nonNullable.group({searchValue: ''});
  searchFormIdentifier = this.fb.nonNullable.group({searchValue: ''});
  searchFormCustomerCompany = this.fb.nonNullable.group({searchValue: ''});
  currentPage: number = 1;
  pageSize: number = 20;
  totalPages: number = 0;






  constructor(
    private toolsService: ToolsService,
    private fb: FormBuilder,
    private router: Router,
    private objectStore: ObjectStore
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

          this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
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
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
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
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
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
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormItemNumber.value.searchValue ?? '';
    this.fetchDataItemNumber();
  }

  fetchDataIdentifier(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByIdentifier(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList
          console.log(searchList)
        })
  }

  onSearchSubmitIdentifier(): void {
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormIdentifier.value.searchValue ?? '';
    this.fetchDataIdentifier();
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
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormSerialNumber.value.searchValue ?? '';
    this.fetchDataSerialNumber();
  }

  onStatusChange(machine: ToolDto, $event: Event) {
    const newStatus = $event.target as HTMLInputElement;
    machine.status = newStatus.value;
    this.toolsService
      .updateStatus(machine)
        .subscribe(console.log)
  }

  filterByStatus(status: string): void {
    this.currentPage = 1;
    this.toolsService
      .getToolByStatus(status)
      .subscribe((searchList) => {
        this.searchList = searchList
        console.log(searchList)
        console.log(status)
        this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
      })

  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  selectOnClick(id: number) {
    this.toolsService.getToolById(id).subscribe((response: ToolDto) => {
      this.objectStore.selectedTool = response;
      this.router.navigate(['/home/update-worksheet']);
    })
  }
}
