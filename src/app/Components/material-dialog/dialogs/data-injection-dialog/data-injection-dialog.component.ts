import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-injection-dialog',
  templateUrl: './data-injection-dialog.component.html',
  styleUrls: ['./data-injection-dialog.component.scss']
})
export class DataInjectionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public title: string) {
  }

  ngOnInit(): void {
    // if (this.title) {
    //   this.title = "The data was not received "
    // }

  }

}
