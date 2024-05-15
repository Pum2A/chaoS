import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <div class="footer-container">
        <div class="footer-block">
          <h5>Company</h5>
          <a>ChaoS</a>
          <a>Cracow</a>
          <a>Poland</a>
          <a>Electronics</a>
        </div>
        <div class="footer-block">
          <h5>Links</h5>
          <a>Home</a>
          <a>Offer</a>
          <a>Experience</a>
          <a>Location</a>
        </div>
        <div class="footer-block">
          <h5>Contact</h5>
          <a>Mail</a>
          <a>Phone</a>
          <a>Letter</a>
          <a>Test</a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
