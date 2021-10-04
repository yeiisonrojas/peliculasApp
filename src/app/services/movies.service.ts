import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../Interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ) {
    query = URL + query;
    query += `&api_key=${ apikey }&language=es`;
    return this.http.get<T>( query )
  }

  getFeature(){
    debugger;
    const hoy = new Date ();
    const ultimoDias = new Date ( hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if( mes < 10){
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear() }-${ mesString } -01`;
    const fin = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDias}`;

    return this.ejecutarQuery<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${ hoy.getFullYear() }-${ mesString } -01&primary_release_date.lte=${ hoy.getFullYear() }-${ mesString }-${ ultimoDias}&api_key=b148578379d7973621a1d0c1411d0992`)
  }
}
