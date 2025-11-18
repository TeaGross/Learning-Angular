import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormDataService } from '../../app/services/FormData.service';
import { fornamnValidator } from '../../app/validators/fornamn.validator';
import { forbiddenZipcodeStartValidator } from '../../app/validators/zero.validator';
import { ejEndastMellanslagValidator } from '../../app/validators/ejEndastMellanslag.validator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form implements OnInit{
  registerForm: FormGroup;
  isSubmitted = false;
  fredagsmys = [{ namn: 'Godis'}, { namn: 'Popcorn'}]
  formData: any;

  constructor (private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {
    this.formData = this.formDataService.get();
    
    this.registerForm = this.fb.group({
      fornamn: [this.formData?.fornamn ?? "", [Validators.required, fornamnValidator()]],
      efternamn: [this.formData?.efternamn ?? "", [Validators.required, ejEndastMellanslagValidator()]],
      email: [this.formData?.email ?? "", [Validators.required, Validators.email]],
      fredagsmys: [this.formData?.fredagsmys ?? ""],
      nummer: [this.formData?.nummer ?? "", [Validators.required, forbiddenZipcodeStartValidator()]]
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
