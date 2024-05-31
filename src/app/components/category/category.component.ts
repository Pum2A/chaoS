import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data/data.service';
import { Items } from '../../interfaces/items';
import { NgOptimizedImage } from '@angular/common';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { AddToCartDto } from '../../dtos/add-to-card.dto';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        <div class="content-box" *ngFor="let item of filteredItems">
          <ul>
            <div class="image-container">
              <img [ngSrc]="item.product_url" width="400" height="400" />
            </div>
            <li class="data-content">
              <p class="item-name">{{ item.name }}</p>
              <p class="items">Category: {{ item.category }}</p>
              <p class="items">Price: {{ item.price }} $</p>
              <p class="items">About Product: {{ item.description }}</p>
              <p>{{item._id}}</p>
            </li>
            <div class="btn-container">
            <button (click)="addToCart(item)">Add to cart</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
   
  `,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  items: Items[] = [];
  filteredItems: Items[] = [];
  addedProduct: any = null;
  products: Items[] = [];
  @Input() _id: string = '';

  private category: string = '';
  private queryParamSubscription!: Subscription;
  private dataSubscription!: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      this.category = params['category'] || '';
      this.filterItems();
    });

    this.dataSubscription = this.dataService
      .fetchData()
      .subscribe((data: Items[]) => {
        this.items = data;
        this.filterItems();
      });
  }

  ngOnDestroy() {
    if (this.queryParamSubscription) {
      this.queryParamSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  private filterItems() {
    if (this.category) {
      this.filteredItems = this.items.filter(
        (item) => item.category.toLowerCase() === this.category.toLowerCase()
      );
    } else {
      this.filteredItems = this.items;
    }
  }
  

  addToCart(item: Items) {
    const addToCartDto: AddToCartDto = { productId: item._id, quantity: 1 }; // assuming quantity is 1 for simplicity
    this.shoppingCartService.addToCart(addToCartDto).subscribe(
      (addedProduct: any) => {
        this.addedProduct = addedProduct;
      },
      (error) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }
 
}
