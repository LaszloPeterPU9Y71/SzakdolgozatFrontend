import {Component, OnInit} from "@angular/core";

import {RepairMan, RepairManService} from "../../../services/repair-man.service";

@Component({
    selector: 'app-repairman',
    templateUrl: './repairMan.component.html',
    styleUrls: ['repairMan.component.css']
})

export class RepairManComponent implements OnInit {


    searchValue = '';
    searchList: RepairMan[] = [];


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
