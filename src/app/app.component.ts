import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    WelcomeSectionComponent,
    OfferSectionComponent,
    MatIconModule,
    ExperienceSectionComponent,
    LocationSectionComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'chaoS';

  isMenuOpen = false;
}
