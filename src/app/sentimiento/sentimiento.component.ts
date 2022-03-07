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

  constructor(private api: SentimientoApiService) { }

  analizar_texto() {
   this.resultado_visible = true;
   let respuesta = this.api.get_sentimiento(this.texto);
   let resultado_analisis = respuesta.subscribe(sentimiento =>{
     this.positivo = sentimiento.sentiment.pos;
     this.negativo = sentimiento.sentiment.neg;

     if(sentimiento.sentiment.compound > 0){
       this.img_sentimiento = 'assets/images/smiley.png';
     }else{
       this.img_sentimiento = 'assets/images/sad.png';
     }
   });  
  }

  ngOnInit(): void {

  }


}
