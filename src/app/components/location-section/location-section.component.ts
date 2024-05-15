import { Component } from '@angular/core';

@Component({
  selector: 'app-location-section',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <div class="h5-container">
        <h5>Location</h5>
      </div>
      <div class="block-container">
        <div class="block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2561.7025609628245!2d19.87642607713535!3d50.05440297151928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDAzJzE1LjkiTiAxOcKwNTInNDQuNCJF!5e0!3m2!1spl!2spl!4v1715803613711!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  `,
  styleUrl: './location-section.component.scss',
})
export class LocationSectionComponent {}
