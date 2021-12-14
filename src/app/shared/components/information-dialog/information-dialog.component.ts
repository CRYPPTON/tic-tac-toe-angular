import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { informationDialogData } from '@app-models';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent {

  //#region Class properties

  public icon: string;
  public styleClass: string;

  //#endregion

  constructor(@Inject(MAT_DIALOG_DATA) public data: informationDialogData) {
    if (data.informationDialogType === 'Greska') {
      this.icon = 'error_outline';
      this.styleClass = 'failure-icon';
    } else {
      this.icon = 'check_circle_outline';
      this.styleClass = 'success-icon';
    }
  }

}
