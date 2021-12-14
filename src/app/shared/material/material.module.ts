import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const ngModules = [
  MatButtonModule,
  MatRippleModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngModules,
  ],
  exports: [
    ...ngModules,
  ]
})
export class MaterialModule { }
