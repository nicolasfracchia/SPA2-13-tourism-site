import { Injectable } from '@angular/core';
import { citiesData } from '../components/cities/cities-data';
import { iCity } from '../interfaces/city';
import { iWeather } from '../interfaces/weather';
import { weatherData } from '../components/weather/weather-data';
import { iAttractions, iImage } from '../interfaces/attractions';
import { attractionsData } from '../components/carousel/carousel-data';
import { dataProtectionPoliciesData } from '../components/tech-ideas/policies-data';

@Injectable({
  providedIn: 'root'
})
export class getDataService {
  cities: iCity[] = citiesData;
  weather: iWeather[] = weatherData;
  attractions: iAttractions[] = attractionsData;
  dataProtectionPolicies: string[] = dataProtectionPoliciesData;

  constructor() { }

  getAllCities(): iCity[]{
    return this.cities;
  }

  getAllCitiesName(): string[]{
    return this.cities.map(city => city.name);
  }

  getWeatherInfo(city_name: string): iWeather | undefined {
    return this.weather.find((i) => i.city_name === city_name);
  }

  getCityAttractions(city_name: string): iAttractions | undefined {
    return this.attractions.find((i) => i.city_name === city_name);
  }

  getDataProtectionPolicies(): string[]{
    return this.dataProtectionPolicies;
  }
}
