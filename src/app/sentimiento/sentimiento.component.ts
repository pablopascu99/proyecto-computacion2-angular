import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentimiento',
  templateUrl: './sentimiento.component.html',
  styleUrls: ['./sentimiento.component.scss']
})
export class SentimientoComponent implements OnInit {
  currentValue = "";
  constructor() { }

  ngOnInit(): void {
  }
  getTextInputValue(value: any) {
    this.currentValue = "Texto introducido: " + value;
  }

}
