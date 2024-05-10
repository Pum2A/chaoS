import { Component } from '@angular/core';
import {
  bootstrapHeadphones,
  bootstrapHouseDoorFill,
  bootstrapLaptopFill,
  bootstrapPhoneFill,
  bootstrapTerminalFill,
  bootstrapEmojiSunglassesFill,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-offer-section',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      heroUsers,
      bootstrapLaptopFill,
      bootstrapPhoneFill,
      bootstrapHeadphones,
      bootstrapTerminalFill,
      bootstrapHouseDoorFill,
      bootstrapEmojiSunglassesFill,
    }),
  ],
  template: `
    <div class="wrapper">
      <p class="electronic-offer-text">Our products</p>
      <div class="blocks-wrapper">
        <div class="block">
          <ng-icon name="bootstrapLaptopFill"></ng-icon>
          <h5>Laptops</h5>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
        <div class="block">
          <ng-icon name="bootstrapPhoneFill"></ng-icon>
          <h5>Phones</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
        <div class="block">
          <ng-icon name="bootstrapHeadphones"></ng-icon>
          <h5>Headphones</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
        <div class="block">
          <ng-icon name="bootstrapTerminalFill"></ng-icon>
          <h5>Computers</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
        <div class="block">
          <ng-icon name="bootstrapHouseDoorFill"></ng-icon>
          <h5>House</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
        <div class="block">
          <ng-icon name="bootstrapEmojiSunglassesFill"></ng-icon>
          <h5>Accesories</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quidem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, quidem!
          </p>
          <div class="a-cont">
            <a>Check more</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './offer-section.component.scss',
})
export class OfferSectionComponent {}
