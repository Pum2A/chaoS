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
      <h5>Company experience</h5>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, quidem! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit, quidem!
              </p>
              <div class="a-cont">
                <a>Check more</a>
              </div>
            </div>
            <div class="block">
              <ng-icon name="bootstrapQuestionCircleFill"></ng-icon>
              <div class="block-name">
                <span>100% Quality Guarantee</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, quidem! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit, quidem!
              </p>
              <div class="a-cont">
                <a>Check more</a>
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
