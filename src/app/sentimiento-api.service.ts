import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sentimiento } from './sentimiento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SentimientoApiService {

  constructor(private http: HttpClient) { }

  get_sentimiento(texto: string): Observable<Sentimiento>{
    let url = environment.apiURL + texto;
    let respuesta = this.http.get<Sentimiento>(url)
    return respuesta;
  }
}
