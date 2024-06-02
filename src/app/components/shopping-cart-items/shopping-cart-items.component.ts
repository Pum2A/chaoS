import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { Items } from '../../interfaces/items';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-items',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  template: `
    <div class="shopping-cart-container" *ngIf="isVisible">
      <div *ngIf="cartItems.length > 0; else emptyCart">
        <h2>Your Shopping Cart</h2>
        <ul>
          <li *ngFor="let item of cartItems; trackBy: trackById">
            <div class="name-container">
              <p>{{ item.name }}</p>
              <img [ngSrc]="item.product_url" width="100" height="100" />
            </div>
            <p>Category: {{ item.category }}</p>
            <p>Price: {{ item.price }} $</p>
            <p class="description">Description: {{ item.description }}</p>
            <p>Quantity: 
  <input type="number" [(ngModel)]="item.quantity" (change)="updateCartItemQuantity(item)" min="1" max="99" />
</p>

            <button (click)="removeFromCart(item)">Remove from cart</button>
          </li>
        </ul>
        <div>
          <p>Total price: {{ totalPrice }} $ </p>
        </div>
      </div>
      <ng-template #emptyCart>
        <p>Your shopping cart is empty.</p>
      </ng-template>
    </div>
  `,
  styleUrls: ['./shopping-cart-items.component.scss'],
})
export class ShoppingCartItemsComponent implements OnInit {
  cartItems: Items[] = [];
  isVisible = false;
  totalPrice = 0;
  @Input() cartItems$: Items[] = [];
  

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.cartVisible$.subscribe(visible => {
      this.isVisible = visible;
    });

    this.shoppingCartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items.map(item => ({
        ...item.product,
        quantity: item.quantity
      }));
      this.calculateTotalPrice();
    });

    
    
  }

  trackById(index: number, item: Items): string {
    return item._id;
  }

  removeFromCart(item: Items): void {
    this.shoppingCartService.removeFromCart(item).subscribe(() => {
      this.cartItems = this.cartItems.filter(cartItem => cartItem._id !== item._id);
      this.calculateTotalPrice();
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
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    this.totalPrice = Math.ceil(this.totalPrice * 100) / 100;
    
  }

  

}
