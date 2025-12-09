import { Component, Pipe } from '@angular/core';
import { DigiFormDataAService } from '../../app/services/DigiFormData.service';
import { Router, RouterLink } from '@angular/router';
import { DigiArbetsformedlingenAngularModule } from "@designsystem-se/af-angular";
import { formatDate } from '../../app/pipes/formatDate.pipe';

@Component({
  selector: 'app-digi-granska',
  imports: [DigiArbetsformedlingenAngularModule, RouterLink, formatDate],
  templateUrl: './digi-granska.html',
  styleUrl: './digi-granska.scss',
})
export class DigiGranska {
  formData: any;
  constructor(private DigiformDataService: DigiFormDataAService, private router: Router) {
    this.formData = this.DigiformDataService.get();
  }
}
