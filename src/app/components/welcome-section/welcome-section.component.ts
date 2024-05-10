import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [],
  template: `
    <div class="wrapper">
      <section class="welcome-section">
        <div class="welcome-content">
          <h1>
            Welcome to
            <span> chaoS </span>
          </h1>
          <h3>Your professional electronic team.</h3>
          <p class="welcome-content-text">
            <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              quia perferendis nihil ducimus delectus incidunt corrupti distinctio
              quae quaerat odit dignissimos eius quisquam sapiente doloremque,
              labore ipsum qui. Earum quisquam amet tempore labore incidunt ullam
              dolor, nemo deserunt aliquid iusto exercitationem pariatur fugit,
              mollitia blanditiis suscipit explicabo commodi ipsam illo? -->
          </p>
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
    <!-- <div class="welcome-content-button-container">
      <h4>Our professional products</h4>
      <button>Check</button>
    </div> -->
  `,

  styleUrl: './welcome-section.component.scss',
})
export class WelcomeSectionComponent {}
