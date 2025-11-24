import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoCardBorderPosition, InfoCardHeadingLevel, InfoCardType, InfoCardVariation, LayoutBlockVariation, ProgressIndicatorVariation, ProgressListHeadingLevel, ProgressListType, ProgressListVariation } from '@designsystem-se/af';
import { DigiExpandableAccordion, DigiProgressIndicator, DigiInfoCard, DigiTypography, DigiProgressList, DigiProgressListItem, DigiButton, DigiNavigationBreadcrumbs } from '@designsystem-se/af-angular';

@Component({
  selector: 'app-digi-info',
  imports: [DigiExpandableAccordion, RouterLink, DigiTypography, DigiProgressList, DigiProgressListItem, DigiButton, DigiNavigationBreadcrumbs],
  templateUrl: './digi-info.html',
  styleUrl: './digi-info.scss',
})
export class DigiInfo {
  readonly ProgressIndicatorVariation = ProgressIndicatorVariation;
  readonly LayoutBlockVariation = LayoutBlockVariation;
  readonly InfoCardHeadingLevel = InfoCardHeadingLevel;
  readonly InfoCardType = InfoCardType;
  readonly InfoCardVariation = InfoCardVariation;
  readonly InfoCardBorderPosition = InfoCardBorderPosition;
  readonly ProgressListVariation = ProgressListVariation;
  readonly ProgressListHeadingLevel = ProgressListHeadingLevel;
  readonly ProgressListType = ProgressListType;
  
}
