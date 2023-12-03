import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tech-ideas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tech-ideas.component.html',
  styleUrl: './tech-ideas.component.scss'
})
export class TechIdeasComponent {
  techIdeasForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
