import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { getDataService } from '../../services/getdata.service';
import { ImportantTextDirective } from '../../directives/important-text.directive';
import { prohibited } from '../../form-custom-validations';

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
      name: ['', [Validators.required, Validators.minLength(2), prohibited(/tourist/)]],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      idea: ['', [Validators.required, Validators.minLength(100), prohibited(/nothing/)]]
    });
  }

  submitForm(){
    if(!this.techIdeasForm.valid){
      console.log("THE FORM DID NOT PASS ALL THE VALIDATIONS!");
    }else{
      console.log('FORM DATA:', this.techIdeasForm.value);
      this.techIdeasForm.reset();
    }
  }

  get nameFormControl(){
    return this.techIdeasForm.get('name')!;
  }
  get emailFormControl(){
    return this.techIdeasForm.get('email')!;
  }
  get cityFormControl(){
    return this.techIdeasForm.get('city')!;
  }
  get ideaFormControl(){
    return this.techIdeasForm.get('idea')!;
  }
}
