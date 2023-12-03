import { Component } from '@angular/core';
import { iCity } from '../../interfaces/city';
import { CommonModule } from '@angular/common';
import { getDataService } from '../../services/getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  cities: iCity[];

  constructor(private _getDataService: getDataService, private router: Router){
    this.cities = _getDataService.getAllCities();
  }

  openWeatherPage = (cityName:string) => {
    const path = 'cities/' + cityName;
    this.router.navigate([path]);
  }
}
