import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormDataService } from '../../app/services/FormDataService';
import { fornamnValidator } from '../../app/validators/fornamn.validator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form implements OnInit{
  registerForm: FormGroup;
  isSubmitted = false;
  fredagsmys = [{ namn: 'Godis'}, { namn: 'Popcorn'}]
  

  constructor (private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {
    this.registerForm = this.fb.group({
      fornamn: ["", [Validators.required, fornamnValidator()]],
      efternamn: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      fredagsmys: [""],
    })
  }

  ngOnInit(): void {
    this.registerForm.get('fredagsmys')?.valueChanges.subscribe(fredagsmys => {
      console.log("Du har valt", fredagsmys);
    })
  }

  onSubmit() {
    console.log("submitted form", this.registerForm.value, "Invalid:", this.registerForm.invalid);

    this.isSubmitted = true;
    if(this.registerForm.invalid) {
      return
    }

    this.formDataService.set(this.registerForm.value);
    this.router.navigate(['/granska']);
  }
}
