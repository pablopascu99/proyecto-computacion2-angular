import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../modelos/localidad';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get_localidad(localidad: string): Observable<Localidad>{
    let url = environment.apiURL + "localidad/" + localidad;
    return this.http.get<Localidad>(url);
  }
}
