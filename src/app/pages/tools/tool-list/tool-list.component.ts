import {Component, OnInit, } from '@angular/core';
import {ToolsService } from '../../../services/tools.service';
import {FormBuilder} from "@angular/forms";
import {ToolDto, UserDto} from "../../../models/backend.models";
import {Router} from "@angular/router";
import {ObjectStore} from "../../../services/object-store";
import {AddWorksheetComponent} from "../../worksheet/new-worksheet/add-worksheet.component";
import {UserService} from "../../../services/user.service";


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
  loggedInUser: UserDto | undefined
  timeOut: number = 1000;






  constructor(
    private toolsService: ToolsService,
    private fb: FormBuilder,
    private router: Router,
    private objectStore: ObjectStore,
    private userService: UserService,


  ){
  }

  ngOnInit(): void {
    this.fetchData();
    this.findUserByEmail();


  }




  fetchData(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));
          this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
        })
    } else
      this.toolsService
        .getToolByName(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)

        })
  }



  onSearchSubmitName(): void {
    setTimeout(() => {
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormName.value.searchValue ?? '';
    this.fetchData();
    }, this.timeOut);
  }

  fetchDataTypeNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByTypeNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
  }



  onSearchSubmitTypeNumber(): void {
    setTimeout(() => {
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormTypeNumber.value.searchValue ?? '';
    this.fetchDataTypeNumber();
    }, this.timeOut);
  }

  fetchDataItemNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByItemNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
  }

  onSearchSubmitItemNumber(): void {
    setTimeout(() => {
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormItemNumber.value.searchValue ?? '';
    this.fetchDataItemNumber();
    }, this.timeOut);
  }

  fetchDataIdentifier(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolByIdentifier(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
  }

  onSearchSubmitIdentifier(): void {
    setTimeout(() => {
      this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
      this.searchValue = this.searchFormIdentifier.value.searchValue ?? '';
      this.fetchDataIdentifier();
    }, this.timeOut);
  }

  fetchDataSerialNumber(): void {
    if (this.searchValue == '') {
      this.toolsService
        .getToolList(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)
        })
    } else
      this.toolsService
        .getToolBySerialNumber(this.searchValue)
        .subscribe((searchList) => {
          this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));

          console.log(searchList)

        })
  }

  findUserByEmail() {
    this.userService.getRepairManByEmail(localStorage.getItem("email")!)
        .subscribe((response : UserDto) => {
          this.loggedInUser = response;

        })
  }

  onSearchSubmitSerialNumber(): void {
    setTimeout(() => {
    this.totalPages = Math.ceil(this.searchList.length / this.pageSize)
    this.searchValue = this.searchFormSerialNumber.value.searchValue ?? '';
    this.fetchDataSerialNumber();
    }, this.timeOut);
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
        this.searchList = searchList.sort((a, b) => b.identifier.localeCompare(a.identifier));
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
