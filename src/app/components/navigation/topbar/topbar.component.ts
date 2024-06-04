import { Component, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { Items } from '../../../interfaces/items';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  template: `
    <div class="top">
      <div class="logo" routerLink="">chaoS</div>
      <nav>
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li (click)="navigateToCategory('laptop')"><a>Laptops</a></li>
          <li (click)="navigateToCategory('computer')"><a>Computers</a></li>
          <li (click)="navigateToCategory('phone')"><a>Phones</a></li>
          <li (click)="navigateToCategory('tablet')"><a>Tablets</a></li>
          <li><a routerLink="/support">Support</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <div class="shop-container">
            <ng-icon
              (click)="onCartButtonClick()"
              class="shopping-cart"
              name="bootstrapCart3"
            ></ng-icon>
            <span class="cart-item-count" (click)="onCartButtonClick()">{{
              getCartItemsLength()
            }}</span>
          </div>
        </ul>
      </nav>
    </div>
  `,
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
  ) {}
  navigateToCategory(category: string) {
    this.router.navigate(['/category'], { queryParams: { category } });
  }

  onCartButtonClick() {
    this.shoppingCartService.toggleCartVisibility();
  }

  getCartItemsLength() {
    return this.shoppingCartService.itemsLength();
  }
}
