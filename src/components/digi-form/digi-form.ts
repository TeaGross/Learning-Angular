import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DigiNavigationBreadcrumbs, DigiFormInput, DigiButton } from '@designsystem-se/af-angular';
import { DigiFormDataAService } from '../../app/services/DigiFormData.service';
import { Router, RouterLink } from '@angular/router';
import { DigiArbetsformedlingenAngularModule, DigiFormErrorList } from '@designsystem-se/af-angular';


@Component({
  selector: 'app-digi-form',
  imports: [ReactiveFormsModule, DigiNavigationBreadcrumbs, RouterLink, DigiFormInput, DigiButton, DigiFormInput, DigiArbetsformedlingenAngularModule, NgIf],
  templateUrl: './digi-form.html',
  styleUrl: './digi-form.scss',
})
export class DigiForm {
  digiForm!: FormGroup;
  isSubmitted = false;
  formData: any;

  constructor(private fb: FormBuilder, private DigiFormDataAService: DigiFormDataAService, private router: Router ) {
  }

  ngOnInit() {
    this.formData = this.DigiFormDataAService.get();
  
    this.digiForm = this.fb.group({
        firstname: new UntypedFormControl (this.formData?.firstname ?? "", [Validators.required]),
        lastname: new UntypedFormControl (this.formData?.lastname ?? ""),
      })
  }

  OnSubmit () {

    this.isSubmitted = true;

     if(this.digiForm.invalid) {
      return
    }

    this.DigiFormDataAService.set(this.digiForm.value)
    console.log(this.digiForm.value);
    this.router.navigate(['/digi-form-start']);
  }
}
