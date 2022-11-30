import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'


// An array of all the material module that we will use
const materialModules = [
  MatButtonModule,
  MatIconModule,

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
