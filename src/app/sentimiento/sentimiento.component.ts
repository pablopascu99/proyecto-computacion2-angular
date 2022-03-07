import { Component, OnInit } from '@angular/core';
import { SentimientoApiService } from '../sentimiento-api.service';

@Component({
  selector: 'app-sentimiento',
  templateUrl: './sentimiento.component.html',
  styleUrls: ['./sentimiento.component.scss']
})
export class SentimientoComponent implements OnInit {
  texto = "";
  constructor(private api: SentimientoApiService) { }

  analizar_texto() {
   let respuesta = this.api.get_sentimiento(this.texto);
   let resultado_analisis = respuesta.subscribe(sentimiento =>{
    console.log(sentimiento)
   });  
  }

  ngOnInit(): void {

  }


}
