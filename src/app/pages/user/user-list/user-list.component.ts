import {Component, OnInit} from "@angular/core";
import {UserDto} from "../../../models/backend.models";
import {UserService} from "../../../services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user-list.component.html',
    styleUrls: ['user-list.component.css']
})

export class UserListComponent implements OnInit {


    searchValue = '';
    searchList: UserDto[] = [];


    constructor(
        private userService: UserService,
    ) {}

    ngOnInit(): void {
        this.userService
            .getRepairManList(this.searchValue)
            .subscribe((searchList) => {
                this.searchList = searchList
                console.log(searchList)
                console.log(this.searchValue)
            })
    }

}
