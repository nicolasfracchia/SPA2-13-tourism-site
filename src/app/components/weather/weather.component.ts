import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getDataService } from '../../services/getdata.service';
import { iWeather } from '../../interfaces/weather';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { iAttractions, iImage } from '../../interfaces/attractions';
import { ImportantTextDirective } from '../../directives/important-text.directive';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ImportantTextDirective],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  city_details!: iWeather | undefined;
  city_attractions!: iAttractions | undefined;

  constructor(private _getDataService: getDataService, private router: Router, private routeService: ActivatedRoute){
    const city: string = this.routeService.snapshot.paramMap.get('city')?.toString() || '';
    // If the city doesn't exist redirect to 404 with message
    this.validateCity(city);
    this.getAttractions(city);
  }

  async validateCity(city: string): Promise<void> {
    try {
      this.city_details = await this._getDataService.getWeatherInfo(city);
      if(this.city_details === undefined){
        const error = `The city ${city} couldn't be found.`;
        this.router.navigate(['404/'+error]);
      }
    } catch (error) {
      this.router.navigate(['404/' + error]);
    }
  }

  async getAttractions(city: string): Promise<void> {
    try {
      this.city_attractions = await this._getDataService.getCityAttractions(city);
    } catch (error) {
      this.router.navigate(['404/' + error]);
    }
  }
}
