import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { Items } from '../../interfaces/items';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../services/loading/loading.service';
import { delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-items',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="bg-blur" *ngIf="isVisible">
      <div class="shopping-cart-container">
        <div *ngIf="cartItems.length > 0; else emptyCart">
          <div class="title-container">
            <h2>Your Shopping Cart</h2>
            <span (click)="visibleOff()" (click)="overflowShow()">X</span>
          </div>
          <ul>
            <li *ngFor="let item of cartItems; trackBy: trackById">
              <div class="name-container">
                <p>{{ item.name }} x{{ item.quantity }}</p>
                <img [ngSrc]="item.product_url" width="100" height="100" />
              </div>
              <p>Category: {{ item.category }}</p>
              <p>Price: {{ item.price }} $</p>
              <p class="description">Description: {{ item.description }}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  [(ngModel)]="item.quantity"
                  (change)="updateCartItemQuantity(item)"
                  min="1"
                  max="99"
                />
              </p>

              <button *ngIf="!item.loading" (click)="removeFromCart(item)">
                Remove from cart
              </button>
              <mat-spinner
                *ngIf="item.loading"
                color=""
                strokeWidth="4"
                diameter="50"
              ></mat-spinner>
            </li>
          </ul>
          <div>
            <p>Total price: {{ totalPrice }} $</p>
          </div>
        </div>
        <ng-template #emptyCart>
          <p>Your shopping cart is empty.</p>
        </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./shopping-cart-items.component.scss'],
})
export class ShoppingCartItemsComponent implements OnInit {
  cartItems: Items[] = [];
  isVisible = false;
  totalPrice = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private loadingService: LoadingService,
    @Inject(DOCUMENT) private document: Document,
    protected renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.cartVisible$.subscribe((visible) => {
      this.isVisible = visible;
      if (visible) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      } else {
        this.renderer.setStyle(this.document.body, 'overflow', 'inherit');
      }
    });

    this.shoppingCartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items.map((item) => ({
        ...item.product,
        quantity: item.quantity,
      }));
      this.calculateTotalPrice();
    });
  }

  overflowShow(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'inherit');
  }

  visibleOff(): void {
    this.shoppingCartService.toggleCartVisibility();
  }

  trackById(index: number, item: Items): string {
    return item._id;
  }

  removeFromCart(item: Items): void {
    item.loading = true;

    of(null)
      .pipe(
        delay(1000),
        switchMap(() => this.shoppingCartService.removeFromCart(item)),
      )
      .subscribe(() => {
        this.cartItems = this.cartItems.filter(
          (cartItem) => cartItem._id !== item._id,
        );
        this.calculateTotalPrice();
        item.loading = false;
      });
  }

  updateCartItem(item: Items): void {
    this.shoppingCartService.updateCartItem(item).subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  updateCartItemQuantity(item: Items) {
    this.shoppingCartService.updateCartItem(item).subscribe();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    this.totalPrice = Math.ceil(this.totalPrice * 100) / 100;
  }
}
