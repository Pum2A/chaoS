import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Items } from '../../interfaces/items';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AddToCartDto } from '../../dtos/add-to-card.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
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

  constructor(private snackBar: MatSnackBar) {
    this.loadCartItems();
  }

  addToCart(addToCartDto: AddToCartDto): Observable<Items> {
    return this.http.post<Items>(this.addToCartUrl, addToCartDto).pipe(
      tap(() => {
        this.loadCartItems();
        this.showSnackBar('Product has been successfully added to the cart');
      })
    );
  }

  removeFromCart(item: Items): Observable<Items> {
    const url = `${this.removeFromCartUrl}/${item._id}`;
    return this.http.delete<Items>(url).pipe(
      tap(() => {
        this.loadCartItems();
        this.ShowDeleteSnackBar(
          'Product has been successfully removed from the cart'
        );
      })
    );
  }

  private loadCartItems() {
    this.http.get<Items[]>(this.api).subscribe((items) => {
      this.cartItemsSubject.next(items);
    });
  }

  getCartItems(): Observable<Items[]> {
    return this.cartItems$;
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }

  toggleCartVisibility() {
    this.cartVisibleSource.next(!this.cartVisibleSource.value);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  private ShowDeleteSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
