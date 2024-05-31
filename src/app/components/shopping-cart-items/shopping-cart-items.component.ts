import { Component, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Items } from '../../interfaces/items';

@Component({
  selector: 'app-shopping-cart-items',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template:`
  <div class="shopping-cart-container">

    <div *ngIf="cartItems.length > 0; else emptyCart">
      <h2>Your Shopping Cart</h2>
      <ul>
        @for (item of cartItems; track item._id) {
          
          <li>
            <div class="name-container">

              <p>{{ item.name }}</p>
              <img [ngSrc]="item.product_url" width="100" height="100" />
            </div>
            <p>Category: {{ item.category }}</p>
            <p>Price: {{ item.price }} $</p>
            <p class="description" >Description: {{ item.description }}</p>
            <p>Quantity: {{item.quantity}}</p>
            <button>Remove from card</button>
          </li>
        }
      </ul>
    </div>
    <ng-template #emptyCart>
      <p>Your shopping cart is empty.</p>
    </ng-template>
  </div>
  `,
  
  styleUrl: './shopping-cart-items.component.scss',
  
})
export class ShoppingCartItemsComponent   {
  cartItems: Items[] = [];
constructor(private shoppingCartService: ShoppingCartService) { }

ngOnInit(): void {
  this.shoppingCartService.getCartItems().subscribe(
    (items: any[]) => {
      this.cartItems = items.map(item => ({
        ...item.product,
        quantity: item.quantity
      }));
    }
  );
}


}
