import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowParesComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
