import { Component, OnInit } from '@angular/core';
import results from '../json/resultados.json';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  constructor() { }

  cards = results;
  
  
   

  ngOnInit(): void {

    
  }

}
