import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cities', component: CitiesComponent},
    {path: 'cities/:city', component: WeatherComponent},
    {path: 'ideas', component: TechIdeasComponent},
    {path: '404', component: Error404Component},
    {path: '404/:message', component: Error404Component},
    {path: '**', redirectTo: '/404', pathMatch: 'full'}
];