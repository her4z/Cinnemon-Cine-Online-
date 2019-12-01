import { Component, OnInit } from '@angular/core';
import { MovieSelected } from '../MovieSelected';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movie: MovieSelected[];

  constructor() { }

  ngOnInit() {
  }

}
