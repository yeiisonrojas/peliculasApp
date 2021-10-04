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
  
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  }

  constructor( private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.getFeature()
    .subscribe(resp => {
      this.movieService.getFeature()
      .subscribe( resp => {
       this.PeliculasNuevas = resp.results;
      });
   
    });
  }

}