import { Component, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { Items } from '../../interfaces/items';

@Component({
  selector: 'app-shopping-cart-items',
  standalone: true,
  imports: [CommonModule],
  template:`
 <div *ngIf="cartItems.length > 0; else emptyCart">
      <h2>Your Shopping Cart</h2>
      <ul>
        <li *ngFor="let item of cartItems">
          <p>Name: {{ item.name }}</p>
          <p>Category: {{ item.category }}</p>
          <p>Price: {{ item.price }} $</p>
          <p>Description: {{ item.description }}</p>
          <img [src]="item.product_url" width="100" height="100" />
        </li>
      </ul>
    </div>
    <ng-template #emptyCart>
      <p>Your shopping cart is empty.</p>
    </ng-template>
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
      console.log('Cart items:', this.cartItems);
    },
    (error) => {
      console.error('Error loading cart items:', error);
    }
  );
}


}
