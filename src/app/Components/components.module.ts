import { SharedModule } from './../shared/shared.module';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MaterialCardsComponent } from './material-cards/material-cards.component';



@NgModule({
  declarations: [
    MaterialButtonsComponent,
    ComponentsComponent,
    MaterialCardsComponent
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
