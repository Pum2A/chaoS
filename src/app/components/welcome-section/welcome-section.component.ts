import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="wrapper">
      <section class="welcome-section">
        <div class="welcome-content">
          <p class="welcome-text">Nice to see you!</p>
          <h1>
            Welcome to
            <span> chaoS </span>
          </h1>
          <h3 class="under-main-text">Your professional electronic team.</h3>

          <div class="buttons-container">
            <button>Learn more</button>
            <button id="products-button">Buy products</button>
          </div>
        </div>
        <div class="welcome-content-second">
          <img
            [ngSrc]="mainImageUrl"
            alt="Main Page Image"
            height="400"
            width="800"
          />
        </div>
      </section>
    </div>
  `,

  styleUrl: './welcome-section.component.scss',
})
export class WelcomeSectionComponent {
  mainImageUrl = 'assets/images/main-page-image2.webp';
}
