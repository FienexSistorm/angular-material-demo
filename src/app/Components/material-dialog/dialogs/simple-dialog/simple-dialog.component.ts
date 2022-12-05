import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<SimpleDialogComponent>) { }

  ngOnInit(): void {

  }

  closeModal(): void {
    this._dialogRef.close()
  }
}
