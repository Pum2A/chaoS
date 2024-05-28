import { Component } from '@angular/core';
import {
  bootstrapReception4,
  bootstrapArrowUpRight,
  bootstrapMapFill,
  bootstrapCollectionFill,
  bootstrapQuestionCircleFill,
  bootstrapSignTurnLeftFill,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      bootstrapReception4,
      bootstrapArrowUpRight,
      bootstrapMapFill,
      bootstrapCollectionFill,
      bootstrapQuestionCircleFill,
      bootstrapSignTurnLeftFill,
    }),
  ],
  template: `
    <div class="wrapper">
      <div class="h5-container">
        <h5>Company experience</h5>
      </div>
      <section class="experience-section">
        <div class="left-block">
          <div class="block-container">
            <ng-icon
              name="bootstrapReception4"
              class="experience-icons"
            ></ng-icon>
            <p>Position: <span>1</span></p>
          </div>
          <div class="block-container">
            <ng-icon
              name="bootstrapArrowUpRight"
              class="experience-icons"
            ></ng-icon>
            <p>Years: <span>12</span></p>
          </div>
          <div class="block-container">
            <ng-icon name="bootstrapMapFill" class="experience-icons"></ng-icon>
            <p>Location: <span>Cracow</span></p>
          </div>
          <div class="block-container">
            <ng-icon
              name="bootstrapCollectionFill"
              class="experience-icons"
            ></ng-icon>
            <p>Responsibilities: <span>Electronics</span></p>
          </div>
        </div>
        <div class="right-block">
          <div class="blocks-wrapper">
            <div class="block">
              <ng-icon name="bootstrapSignTurnLeftFill"></ng-icon>
              <div class="block-name">
                <span>14 day return policy</span>
              </div>
              <p>
                We offer a 14-day return policy for all our products. If you are
                not satisfied with your purchase, you can return it within 14
                days of receiving it for a full refund. Please note that the
                item must be in its original condition and packaging. To
                initiate a return, please contact our customer support team.
              </p>
              <div class="btn-container">
                <!-- <button>Check</button> -->
              </div>
            </div>
            <div class="block">
              <ng-icon name="bootstrapQuestionCircleFill"></ng-icon>
              <div class="block-name">
                <span>100% Quality Guarantee</span>
              </div>
              <p>
                We are committed to providing products and services of the
                highest quality. Our team of experts ensures that every aspect
                of our offerings meets rigorous quality standards. We stand
                behind our products and guarantee your satisfaction.
              </p>
              <div class="btn-container">
                <!-- <button id="second-check-button">Check</button> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {}
