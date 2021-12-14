import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';

@NgModule({
  declarations: [
    InformationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    InformationDialogComponent
  ]
})
export class SharedModule { }
