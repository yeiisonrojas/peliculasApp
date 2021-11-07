import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../Interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  PeliculasNuevas: Pelicula[] = []
  poulares: Pelicula[] = []

  constructor( private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.getFeature()
    .subscribe(resp => {
       this.PeliculasNuevas = resp.results;  
    });

    this.movieService.getPopulares()
    .subscribe(resp => {
      console.log('Populares', resp);
      this.poulares = resp.results;
    });
   
  }

}
