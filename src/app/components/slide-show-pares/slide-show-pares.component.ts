import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }
  constructor() { }

  ngOnInit() {}

}
