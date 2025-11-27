import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DigiNavigationBreadcrumbs, DigiFormInput, DigiButton } from '@designsystem-se/af-angular';
import { DigiFormDataAService } from '../../app/services/DigiFormData.service';
import { Router, RouterLink } from '@angular/router';
import { DigiArbetsformedlingenAngularModule, DigiFormErrorList } from '@designsystem-se/af-angular';
import { fornamnValidator } from '../../app/validators/fornamn.validator';


@Component({
  selector: 'app-digi-form',
  imports: [ReactiveFormsModule, RouterLink, DigiArbetsformedlingenAngularModule, NgIf],
  templateUrl: './digi-form.html',
  styleUrl: './digi-form.scss',
})
export class DigiForm {
  digiForm!: FormGroup;
  isSubmitted = false;
  formData: any;
  coffeestatus = [{ namn: 'Full tank'}, { namn: 'Lagom nivå'},{ namn: 'Kris och panik'},{ namn: 'Behöver espresso intravenöst'},{ namn: '"Prata inte med mig"-läge'}]
  chooseCarefully = [{ namn: 'Merge-konflikt från helvetet'}, { namn: 'Långsamt bygge (5min per ändring)'},{ namn: 'Koda med autocompletion som alltid föreslår fel saker'}]
  
  constructor(private fb: FormBuilder, private DigiFormDataAService: DigiFormDataAService, private router: Router ) {
  }

  ngOnInit() {
    this.formData = this.DigiFormDataAService.get();
  
    this.digiForm = this.fb.group({
        firstname: new UntypedFormControl (this.formData?.firstname ?? "", [Validators.required, fornamnValidator()]),
        lastname: new UntypedFormControl (this.formData?.lastname ?? "", [Validators.required, fornamnValidator()]),
        coffeestatus: new UntypedFormControl (this.formData?.coffeestatus ?? "", [Validators.required]),
        date: new UntypedFormControl (this.formData?.date ?? "", [Validators.required]),
        chooseCarefully: new UntypedFormControl (this.formData?.chooseCarefully ?? "", [Validators.required]),
      })
  }

  OnSubmit () {

    this.isSubmitted = true;

     if(this.digiForm.invalid) {
      return
    }

    this.DigiFormDataAService.set(this.digiForm.value)
    console.log(this.digiForm.value);
    this.router.navigate(['/digi-form-granska']);
  }
}
