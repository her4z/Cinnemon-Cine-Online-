import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Functions } from './Functions';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  domain: string = "https://localhost:3000"

  constructor(private http: HttpClient) { }
  //Trae todas las funciones.
  getFunctions(){
    return this.http.get<Functions[]>(`${this.domain}/api/functions`)
    .pipe(map(res => res));
  }

  //Trae funcion/es segun el id de la pelicula elegida para mostrar
  //los dias donde hay funciones.
  getFunctionsByMovie(id){
    return this.http.get<Functions[]>(`${this.domain}/api/functions/${id}`)
    .pipe(map(res => res));
  }

  //Trae las funciones disponibles segun el dia elegido y el id de la 
  //pelicula previamente elegida para mostrar los tipos de funciones disponibles.
  getFunctionByMovieDay(id, day){
    return this.http.get<Functions[]>(`${this.domain}/api/functions/${id}/${day}`)
    .pipe(map(res => res));
  }

  //Trae las funciones disponibles segun el dia, el id del tipo elegido 
  //y el id de la pelicula previamente elegida para mostrar los
  //horarios disponibles.
  getFunctionsByMovieDayType(id, day, idtype){
    return this.http.get<Functions[]>(`${this.domain}/api/functions/${id}/${day}/${idtype}`)
    .pipe(map(res => res));

  }


}
