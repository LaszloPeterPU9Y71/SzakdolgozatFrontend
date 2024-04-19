import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss']
})
export class ErrorPopupComponent {

  errorMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { errorMessage: string }) {
    this.errorMessage = data.errorMessage;
  }
}


