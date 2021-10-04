import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../Interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  PeliculasNuevas: Pelicula[] = []

  constructor( private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.getFeature()
    .subscribe(resp => {
      console.log('Resp', resp.results);
      this.PeliculasNuevas = resp.results;
    });
  }

}
