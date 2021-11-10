import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from 'peliculas-app/node_modules/@ionic/angular/ionic-angular';
import { Pelicula } from 'src/app/Interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle( id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

  onClick() {
    this.cargarMas.emit();
  }

}
