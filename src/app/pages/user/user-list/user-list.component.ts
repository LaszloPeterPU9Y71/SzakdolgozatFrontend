import {Component, OnInit} from "@angular/core";

import { RepairManService} from "../../../services/repair-man.service";

import {UserDto} from "../../../models/backend.models";

@Component({
    selector: 'app-user',
    templateUrl: './user-list.component.html',
    styleUrls: ['user-list.component.css']
})

export class UserListComponent implements OnInit {


    searchValue = '';
    searchList: UserDto[] = [];


    constructor(
        private repairManService: RepairManService,
    ) {}

    ngOnInit(): void {
        this.repairManService
            .getRepairManList(this.searchValue)
            .subscribe((searchList) => {
                this.searchList = searchList
                console.log(searchList)
                console.log(this.searchValue)
            })
    }

}
