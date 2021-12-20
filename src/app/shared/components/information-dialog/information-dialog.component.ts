import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformationDialogData } from '@app-models';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: InformationDialogData) {

    if (data.informationDialogType == 'success') {
      this.icon = 'check_circle_outline';
      this.styleClass = 'success-icon';
    } else if (data.informationDialogType == 'reset') {
      this.icon = 'announcement';
      this.styleClass = 'failure-icon';
    } else {
      this.icon = 'error_outline';
      this.styleClass = 'failure-icon';
    }
  }
}
