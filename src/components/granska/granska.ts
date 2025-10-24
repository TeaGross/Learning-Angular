import { Component } from '@angular/core';
import { FormDataService } from '../../app/services/FormDataService';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-granska',
  standalone: true,
  imports: [NgIf],
  templateUrl: './granska.html',
  styleUrl: './granska.scss',
})
export class Granska {
  formData: any;
  constructor(private formDataService: FormDataService) {
    this.formData = this.formDataService.get();
  }

  onSubmit() {
    console.log("Form data:", this.formData);
}
}
