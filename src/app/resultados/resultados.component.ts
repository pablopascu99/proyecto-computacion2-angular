import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  constructor() { }

  cards = [
    {
      titulo_card: 'Titulo de la tarjeta',
      subtitulo_card: 'Subtitulo de la tarjeta',
      entradilla_card: 'Entradilla de la tarjeta',
      texto_card: '',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      titulo_card: 'Titulo de la tarjeta',
      subtitulo_card: 'Subtitulo de la tarjeta',
      entradilla_card: 'Entradilla de la tarjeta',
      texto_card: '',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      titulo_card: 'Titulo de la tarjeta',
      subtitulo_card: 'Subtitulo de la tarjeta',
      entradilla_card: 'Entradilla de la tarjeta',
      texto_card: '',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      titulo_card: 'Titulo de la tarjeta',
      subtitulo_card: 'Subtitulo de la tarjeta',
      entradilla_card: 'Entradilla de la tarjeta',
      texto_card: '',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];

  ngOnInit(): void {
  }

}
