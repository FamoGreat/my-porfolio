import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, FooterComponent],
  template: `
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
}
