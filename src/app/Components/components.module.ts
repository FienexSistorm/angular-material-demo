import { SharedModule } from './../shared/shared.module';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { MaterialCardsComponent } from './material-cards/material-cards.component';
import { MaterialProgressBarComponent } from './material-progress-bar/material-progress-bar.component';
import { MaterialSnackbarComponent } from './material-snackbar/material-snackbar.component';
import { MaterialTooltipComponent } from './material-tooltip/material-tooltip.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { SimpleDialogComponent } from './material-dialog/dialogs/simple-dialog/simple-dialog.component';
import { DataInjectionDialogComponent } from './material-dialog/dialogs/data-injection-dialog/data-injection-dialog.component';
import { StyledDialogComponent } from './material-dialog/dialogs/styled-dialog/styled-dialog.component';


@NgModule({
  declarations: [
    MaterialButtonsComponent,
    ComponentsComponent,
    MaterialCardsComponent,
    MaterialProgressBarComponent,
    MaterialSnackbarComponent,
    MaterialTooltipComponent,
    MaterialDialogComponent,
    SimpleDialogComponent,
    DataInjectionDialogComponent,
    StyledDialogComponent,
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
