import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Items } from '../../interfaces/items';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddToCartDto } from '../../dtos/add-to-card.dto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private http = inject(HttpClient);
  private cartItemsSubject = new BehaviorSubject<Items[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  
  private cartVisibleSource = new BehaviorSubject<boolean>(false);
  cartVisible$ = this.cartVisibleSource.asObservable();

  api = 'http://localhost:3000/cart';
  addToCartUrl = `${this.api}/add`;
  removeFromCartUrl = `${this.api}/remove`;

  addToCart(addToCartDto: AddToCartDto): Observable<Items> {
    return this.http.post<Items>(this.addToCartUrl, addToCartDto);
  }
  
  removeFromCart(item: Items): Observable<Items> {
    const url = `${this.removeFromCartUrl}/${item._id}`;
    return this.http.delete<Items>(url);
  }

  getCartItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.api);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
  
  toggleCartVisibility() {
    this.cartVisibleSource.next(!this.cartVisibleSource.value);
  }
}
