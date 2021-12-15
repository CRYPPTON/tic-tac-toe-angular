import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from 'src/app/shared/components/information-dialog/information-dialog.component';
import { InformationDialogType } from '@app-enums';

@Injectable({
  providedIn: 'root'
})
export class InformationDialogService {

  constructor(public dialog: MatDialog) { }

  public showDialog(message: string, informationDialogType: InformationDialogType): void {
    this.dialog.open(InformationDialogComponent, {
      data: {
        message: message,
        informationDialogType: informationDialogType
      }
    });
  }
}
