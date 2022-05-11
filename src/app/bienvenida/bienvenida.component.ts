import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';
import { ApiService } from 'src/app/servicios/api.service';
import results from '../json/csv_prov.json';

var nombres = []
nombres = results

 @Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})

export class BienvenidaComponent implements OnInit {
  
  tipos: Array<String> = ["Pisos", "Oficinas", "Naves", "Garajes"]
  inmueble: string = "";
  localidad: string = ""

  constructor(private api: ApiService) { }
  get_localidad(){
    this.api.get_localidad(this.localidad).subscribe(respuesta =>{
      console.log(respuesta.localidad);
    });
  }
  
  title = 'material-test';

  countries: Array<string> = results;
  

  control = new FormControl();
  filCountries: Observable<string[]>;


  ngOnInit(): void {
    this.filCountries = this.control.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val))
    );
  }

  private _filter(val: string): string[] {
    const formatVal = val.toLowerCase();

    return this.countries.filter(country => country.toLowerCase().indexOf(formatVal) === 0);
  }
}




