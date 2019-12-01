import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movies } from './Movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  domain: string = "https://localhost:3000"

  constructor(private http: HttpClient ) { }
  //Trae todas las peliculas existentes.
   getMovies(){
     return this.http.get<Movies[]>(`${this.domain}/api/movies`)
     .pipe(map(res => res));
   }
   //Trae una pelicula segun su ID.
   getMovie(id){
     return this.http.get<Movies[]>(`${this.domain}/api/movies/${id}`)
     .pipe(map(res => res));
   }
}
