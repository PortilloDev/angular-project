import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  {

  //al entrecomillar un nombre dentro del imput, se renombra el argumento que viene del padre
  //  @Input('valor') progres: number = 50;
 @Input() progres: number = 50;


  changeValue(value: number)
  {
    if (this.progres >= 100 && value >= 0) {

      this.progres = 100;

    } else if (this.progres <= 0 && value < 0) {

      this.progres = 0;

    } else {

      this.progres = this.progres + value;

    }

  }
}
