import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {

  @Input() pelicuas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }

  constructor() { }

  ngOnInit() {}

}
