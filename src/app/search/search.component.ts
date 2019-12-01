import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../Movies';
import { MovieSelected } from '../MovieSelected';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: Movies[];
  movie: MovieSelected[];

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies()
    .subscribe(movies => {
      this.movies = movies
    })
   }

  ngOnInit() {
  }
  
  movieSelected(id){
    this.moviesService.getMovie(id)
    .subscribe(movie => {
      console.log(movie);
      this.movie = movie;
    });    
  }
}

