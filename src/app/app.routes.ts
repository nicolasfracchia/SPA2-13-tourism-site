import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cities', component: CitiesComponent},
    {path: 'cities/:city', component: WeatherComponent},
    {path: '404', component: HomeComponent},
    {path: '404/:message', component: HomeComponent}
    // ADD 404 COMPONENT!!!
];