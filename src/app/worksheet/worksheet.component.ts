import {Component, OnInit} from "@angular/core";


  @Component({
    selector: 'app-user-login',
    templateUrl: './worksheet.component.html',
    styleUrls: ['./worksheet.component.scss']
  })

export class WorksheetComponent implements OnInit{


    ngOnInit() {

    }

    createcompany(){
      window.open("http://localhost:4200/addcompany", '_blank');
    }



  }

