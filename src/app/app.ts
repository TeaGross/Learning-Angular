import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from "../components/form/form";
import { Todos } from "../components/todos/todos";

import { DigiArbetsformedlingenAngularModule } from '@designsystem-se/af-angular';
import { ProgressIndicatorVariation, LayoutBlockVariation, InfoCardHeadingLevel} from '@designsystem-se/af'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DigiArbetsformedlingenAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learning-angular');
}
