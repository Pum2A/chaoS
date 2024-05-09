import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [],
  template: `
    <div class="bg">
      <section class="welcome-section">
        <div class="welcome-content">
          <h1>Welcome to chaoS</h1>
          <h3>Your electronic experts.</h3>
          <p class="welcome-content-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            quia perferendis nihil ducimus delectus incidunt corrupti distinctio
            quae quaerat odit dignissimos eius quisquam sapiente doloremque,
            labore ipsum qui. Earum quisquam amet tempore labore incidunt ullam
            dolor, nemo deserunt aliquid iusto exercitationem pariatur fugit,
            mollitia blanditiis suscipit explicabo commodi ipsam illo?
          </p>
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
