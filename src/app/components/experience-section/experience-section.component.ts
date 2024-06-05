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
        <div class="grid-container">
          <div class="content-box" id="first-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  name="bootstrapReception4"
                  class="experience-icons"
                ></ng-icon>
                <p class="info-about">Position: <span>1</span></p>
              </li>
              <p class="data-content-description">
                As the leading provider in the electronics market, we are proud
                to be ranked as the number one choice for consumers seeking the
                latest in technology. Our commitment to quality and customer
                satisfaction has earned us this prestigious position, making us
                the go-to destination for all your electronic needs.
              </p>
              <div class="btn-container">
                <button id="first-box">Check</button>
              </div>
            </ul>
          </div>
          <div class="content-box" id="second-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  name="bootstrapArrowUpRight"
                  class="experience-icons"
                ></ng-icon>
                <p class="info-about">12+ <span>years</span></p>
              </li>
            </ul>
            <p class="data-content-description">
              With over 12 years of experience in the electronics industry, our
              store has built a reputation for reliability and excellence.
              Throughout the years, we have continuously evolved and adapted to
              the fast-paced changes in technology, ensuring that our customers
              receive the best products and services available.
            </p>
            <div class="btn-container">
              <button id="second-box">Check</button>
            </div>
          </div>
          <div class="content-box" id="third-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  name="bootstrapMapFill"
                  class="experience-icons"
                ></ng-icon>
                <p class="info-about"><span>Cracow</span></p>
              </li>
            </ul>
            <p class="data-content-description">
              Based in the historic city of Cracow, our store is strategically
              located to serve not only the local community but also customers
              from across the region. Our central location allows us to
              efficiently manage orders and provide swift delivery services,
              ensuring that you get your electronics quickly and conveniently.
            </p>
            <div class="btn-container">
              <button id="third-box">Check</button>
            </div>
          </div>

          <div class="content-box" id="four-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  name="bootstrapCollectionFill"
                  class="experience-icons"
                ></ng-icon>
                <p class="info-about"><span>Electronics</span></p>
              </li>
            </ul>
            <p class="data-content-description">
              Specializing in a wide range of electronic products, we offer
              everything from smartphones and computers to tablets and
              accessories. Our extensive selection is curated to meet the
              diverse needs of our customers, whether you're looking for the
              latest gadgets or reliable devices for everyday use. Trust us to
              provide the technology that powers your life.
            </p>
            <div class="btn-container">
              <button id="four-box">Check</button>
            </div>
          </div>
          <div class="content-box" id="five-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  class="experience-icons"
                  name="bootstrapSignTurnLeftFill"
                ></ng-icon>
                <p class="info-about">
                  <span>14 day return policy</span>
                </p>
                <p class="data-content-description">
                  We offer a 14-day return policy for all our products. If you
                  are not satisfied with your purchase, you can return it within
                  14 days of receiving it for a full refund. Please note that
                  the item must be in its original condition and packaging. To
                  initiate a return, please contact our customer support team.
                </p>
                <div class="btn-container">
                  <button id="five-box">Check</button>
                </div>
              </li>
            </ul>
          </div>
          <div class="content-box" id="six-box">
            <ul>
              <li class="data-content">
                <ng-icon
                  class="experience-icons"
                  name="bootstrapSignTurnLeftFill"
                ></ng-icon>
                <p class="info-about">
                  <span>100% Quality Guarantee</span>
                </p>

                <p class="data-content-description">
                  We are committed to providing products and services of the
                  highest quality. Our team of experts ensures that every aspect
                  of our offerings meets rigorous quality standards. We stand
                  behind our products and guarantee your satisfaction.
                </p>
                <div class="btn-container">
                  <button id="six-box">Check</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {}
