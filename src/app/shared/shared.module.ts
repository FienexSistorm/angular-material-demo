import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// An array of all the material module that we will use
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
]



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    materialModules
  ], exports: [
    materialModules
  ]
})
export class SharedModule { }
