import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iAttractions, iImage } from '../../interfaces/attractions';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  
  @Input() images!: iImage[];

  currentImageIndex: number = 0;

  nextImage() {
    if(this.images !== undefined){
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
  prevImage() {
    if(this.images !== undefined){
      this.currentImageIndex--;
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.images.length - 1;
      }
    }
  }

  getUriPath(i: number): string | undefined {
    return encodeURIComponent(this.images[i].src);
  }
}
