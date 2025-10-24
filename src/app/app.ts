import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from "../components/form/form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learning-angular');
}
