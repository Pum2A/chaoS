import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <section class="welcome-section">
        <div class="welcome-content">
          <p>Nice to see you!</p>
          <h1>
            Welcome to
            <span> chaoS </span>
          </h1>
          <h3>Your professional electronic team.</h3>

          <div class="buttons-container">
            <button>Learn more</button>
            <button id="products-button">Buy products</button>
          </div>
        </div>
        <div class="welcome-content-second">
          <img
            src="../../../assets/images/main-page-image.webp"
            alt="Main Page Image"
          />
        </div>
      </section>
    </div>
  `,

  styleUrl: './welcome-section.component.scss',
})
export class WelcomeSectionComponent {}
