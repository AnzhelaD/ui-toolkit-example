import { Component } from '@angular/core';
import { UIButtonComponent } from 'ui-toolkit';

@Component({
  selector: 'app-root',
  imports: [UIButtonComponent, UIButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  onButtonClick(event: Event) {
    console.log('Button clicked:', event);
  }
}
