import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-snackbar',
  templateUrl: './material-snackbar.component.html',
  styleUrls: ['./material-snackbar.component.scss']
})
export class MaterialSnackbarComponent implements OnInit {


  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  simpleToastTrigger(): void {
    this.matSnackBar.open("This is my simple snackbar", "Close!", {
      data: {},
      // direction: "rtl | ltr",
      duration: 2000, // The value is ms
      horizontalPosition: "left", // center| end -right|| start - left // note :: when the direction is rtl, the start will be right and not left , the same goes for the end
    })
  }

  /* ------------------------- Positionning the Toast ------------------------ */
  positionedToast(v_position: "top" | "bottom", h_position: "left" | "right" | "start" | "end" | "center"): void {
    this.matSnackBar.open(
      `Toast Position :${v_position}  -  ${h_position} `,
      "Close",
      {
        verticalPosition: v_position,
        horizontalPosition: h_position
      }
    )
  }

  openCustomizedToast(): void {
    this.matSnackBar.open(
      `Toast Styling `,
      "Close",
      {
        politeness: "polite",
      }
    )
  }
}
