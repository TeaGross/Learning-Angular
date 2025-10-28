import { Component } from '@angular/core';
import { FormDataService } from '../../app/services/FormData.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-granska',
  standalone: true,
  imports: [NgIf],
  templateUrl: './granska.html',
  styleUrl: './granska.scss',
})
export class Granska {
  formData: any;
  constructor(private formDataService: FormDataService, private router: Router) {
    this.formData = this.formDataService.get();
  }

  onSubmit() {
    console.log("Form data:", this.formData);
}

  goBack() {
    this.router.navigate(['/']);
  }
}
