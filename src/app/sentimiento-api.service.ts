import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentimiento } from './sentimiento';

@Injectable({
  providedIn: 'root'
})
export class SentimientoApiService {

  constructor(private http: HttpClient) { }

  get_sentimiento(texto: string): Observable<Sentimiento>{
    let url = 'http://127.0.0.1:5000/sentiment/sentimentVader/' + texto;
    let respuesta = this.http.get<Sentimiento>(url)
    return respuesta;
  }
}
