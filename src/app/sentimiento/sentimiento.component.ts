import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SentimientoApiService } from '../sentimiento-api.service';

@Component({
  selector: 'app-sentimiento',
  templateUrl: './sentimiento.component.html',
  styleUrls: ['./sentimiento.component.scss']
})
export class SentimientoComponent implements OnInit {
  texto = "";
  img_sentimiento = "";
  positivo: number = 0.0;
  negativo: number = 0.0;
  neutral: number = 0.0;
  resultado_visible = false;
  compound:number = 0.0;

  constructor(private api: SentimientoApiService) { }

  analizar_texto() {
   let respuesta = this.api.get_sentimiento(this.texto);
   let resultado_analisis = respuesta.subscribe(sentimiento =>{
     // Se pone visisble una vez recibido el resultado de la API
     this.resultado_visible = true;
     this.positivo = sentimiento.sentiment.pos;
     this.negativo = sentimiento.sentiment.neg;
     this.compound = sentimiento.sentiment.compound;
     

     if(this.compound > 0){
      this.img_sentimiento = 'assets/images/happiness.png';

     } 
     else if (this.compound == 0) {
      this.img_sentimiento = 'assets/images/sceptic.png';
     }
     else{
       this.img_sentimiento = 'assets/images/sad.png';
     }
   });  
  }

  ngOnInit(): void {

  }


}
