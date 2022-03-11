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

  constructor(private api: SentimientoApiService) { }

  analizar_texto() {
   this.resultado_visible = true;
   let respuesta = this.api.get_sentimiento(this.texto);
   let resultado_analisis = respuesta.subscribe(sentimiento =>{
     this.positivo = sentimiento.sentiment.pos;
     this.negativo = sentimiento.sentiment.neg;

     if(sentimiento.sentiment.compound > 0){
      document.getElementById("resultado_sentimiento")!.style.background = "#BED442";
      document.getElementById("resultado_sentimiento")!.style.borderColor = "black";
      this.img_sentimiento = 'assets/images/happiness.png';

     } 
     else if (sentimiento.sentiment.compound == 0) {
      document.getElementById("resultado_sentimiento")!.style.background = "#f6ead1";
      document.getElementById("resultado_sentimiento")!.style.borderColor = "#dbcbbd";
      this.img_sentimiento = 'assets/images/sceptic.png';
     }
     else{
       document.getElementById("resultado_sentimiento")!.style.background = "#F36F61";
       document.getElementById("resultado_sentimiento")!.style.borderColor = "black";
       this.img_sentimiento = 'assets/images/sad.png';
     }
   });  
  }

  ngOnInit(): void {

  }


}
