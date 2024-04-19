import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ErrorPopupComponent} from "../error-popup/error-popup.component";

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorPopupComponent, {
      width: '800px',
      data: { errorMessage: errorMessage }
    });
  }
}
