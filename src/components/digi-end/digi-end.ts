import { Component } from '@angular/core';
import { DigiFormDataAService } from '../../app/services/DigiFormData.service';
import { Router, RouterLink } from '@angular/router';
import { DigiArbetsformedlingenAngularModule } from "@designsystem-se/af-angular";
import { FormReceiptType, FormReceiptVariation } from '@designsystem-se/af';

@Component({
  selector: 'app-digi-granska',
  imports: [DigiArbetsformedlingenAngularModule],
  templateUrl: './digi-end.html',
  styleUrl: './digi-end.scss'

})
export class DigiEnd {
  formData: any;
  constructor(private DigiformDataService: DigiFormDataAService, private router: Router) {
    this.formData = this.DigiformDataService.get();
  }

  // Todo: se till att digi-end inte kan visas om formuläret är tomt
}
