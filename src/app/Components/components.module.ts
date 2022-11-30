import { SharedModule } from './../shared/shared.module';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    MaterialButtonsComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
