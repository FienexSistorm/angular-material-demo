import { SharedModule } from './../shared/shared.module';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MaterialCardsComponent } from './material-cards/material-cards.component';
import { MaterialProgressBarComponent } from './material-progress-bar/material-progress-bar.component';
import { MaterialSnackbarComponent } from './material-snackbar/material-snackbar.component';


@NgModule({
  declarations: [
    MaterialButtonsComponent,
    ComponentsComponent,
    MaterialCardsComponent,
    MaterialProgressBarComponent,
    MaterialSnackbarComponent,
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
