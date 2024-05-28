import { Component } from '@angular/core';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';
import { OfferSectionComponent } from '../offer-section/offer-section.component';
import { LocationSectionComponent } from '../location-section/location-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-welcome-section></app-welcome-section>
    <app-experience-section></app-experience-section>
    <app-offer-section></app-offer-section>
    <app-location-section></app-location-section>
  `,

  styleUrl: './home.component.scss',
  imports: [
    WelcomeSectionComponent,
    OfferSectionComponent,
    LocationSectionComponent,
    ExperienceSectionComponent,
  ],
})
export class HomeComponent {}
