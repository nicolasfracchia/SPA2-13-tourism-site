import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getDataService } from '../../services/getdata.service';
import { ImportantTextDirective } from '../../directives/important-text.directive';

@Component({
  selector: 'app-tech-ideas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ImportantTextDirective],
  templateUrl: './tech-ideas.component.html',
  styleUrl: './tech-ideas.component.scss'
})
export class TechIdeasComponent {
  techIdeasForm!: FormGroup;
  cities!: string[];
  dataProtetionPolicies: string[];

  constructor(private formBuilder: FormBuilder, private _getDataService: getDataService) {
    this.cities = _getDataService.getAllCitiesName();
    this.dataProtetionPolicies = _getDataService.getDataProtectionPolicies();
    this.techIdeasForm = formBuilder.group({
      name: [''],
      age: [''],
      email: [''],
      city: [''],
      idea: ['']
    });
  }

  submitForm(){
    console.log('Form submitted:', this.techIdeasForm.value);
  }
}
