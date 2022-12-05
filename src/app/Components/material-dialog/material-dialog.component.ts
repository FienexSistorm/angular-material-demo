import { StyledDialogComponent } from './dialogs/styled-dialog/styled-dialog.component';
import { DataInjectionDialogComponent } from './dialogs/data-injection-dialog/data-injection-dialog.component';
import { SimpleDialogComponent } from './dialogs/simple-dialog/simple-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})

/**
 * NOTE - The dialog name has the same meaning as modal
 */

export class MaterialDialogComponent implements OnInit {

  @ViewChild("templateDialog") templateDial: any;

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {

  }


  /* ------------------------- Openning a simple Modal ------------------------ */
  openSimpleModal(): void {
    this._dialog?.open(SimpleDialogComponent)

  }


  /* ------------------------- Injecting data to Modal ------------------------ */
  openDataModal(): void {
    this._dialog.open(DataInjectionDialogComponent, {
      data: "This title is injected from the caller component of this dialog"
    })
  }


  /* ----------------------------- Template Dialog ---------------------------- */
  openTemplateDialog(): void {
    this._dialog.open(this.templateDial);
  }

  /* ------------------------------ Modal Styling ----------------------------- */
  openStyledDialog(): void {
    this._dialog.open(StyledDialogComponent, {
      data: {},  // injecting data
      height: '100vh',
      width: "30vw",
      minHeight: '100vh',
      minWidth: '300px',
      autoFocus: true,
      hasBackdrop: true, // if false, the dialog won't have a backdrop (coloring + closing event if the user clicks outside the modal)
      id: "styled",     // Setting an id to the modal to make it easy to extract the disalog if needed
      backdropClass: 'backdrop-primary',
      closeOnNavigation: true,
      direction: 'ltr', // Content-rendering direction :: rtl| ltr
      position: {
        left: "0px",
        top: "0px"
      },

    })

      .afterClosed().subscribe(res => { // This callback will called when the dialog is closed
        alert("The dialog was closed with the value" + res)
      })



    /**
     * NOTE - Besides the afterClosed() method, we have also:
     *  - afterOpened()
     *  - backdropClick()
     *  - beforeClosed()
     *  ....
    */
  }

}
