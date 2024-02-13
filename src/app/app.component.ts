import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dental-project';
}
