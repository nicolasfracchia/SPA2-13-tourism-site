import { Component } from '@angular/core';
import { ImportantTextDirective } from '../../directives/important-text.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [ImportantTextDirective],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {
  message!: string;

  constructor(private routeService: ActivatedRoute){
    this.message = this.routeService.snapshot.paramMap.get('message')?.toString() || "Sorry, but the requested page couldn't be found";
  }
}
