import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data/data.service';
import { Items } from '../../interfaces/items';
import { NgOptimizedImage } from '@angular/common';
import { delay, of, Subscription, switchMap } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { AddToCartDto } from '../../dtos/add-to-card.dto';
import { LoadingService } from '../../services/loading/loading.service';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatProgressSpinnerModule],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        <div class="content-box" *ngFor="let item of filteredItems">
          <ul>
            <div class="image-container">
              <img (click)="fetchItemDetails(item)" [ngSrc]="item.product_url" width="400" height="400" />
            </div>
            <li class="data-content">
              <p class="item-name">{{ item.name }}</p>
              <p class="items">Category: {{ item.category }}</p>
              <p class="items">Price: {{ item.price }} $</p>
              <p class="items">About Product: {{ item.description }}</p>
              
            </li>
            <div class="btn-container">
              <button *ngIf="!item.loading" (click)="addToCart(item)">
                Add to cart
              </button>
              <mat-spinner
                *ngIf="item.loading"
                color=""
                strokeWidth="4
      "
                diameter="50"
              ></mat-spinner>
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
  @Input() filteredData: Items[] = [];
  private category: string = '';
  private queryParamSubscription!: Subscription;
  private dataSubscription!: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private loadingService: LoadingService,
    private router: Router

  ) {}

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      this.category = params['category'] || '';
      this.loadItems();
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

  private loadItems() {
    this.loadingService.loadingOn();
    this.dataSubscription = this.dataService.fetchData().subscribe(
      (data: Items[]) => {
        this.items = data;
        this.filterItems();
        this.loadingService.loadingOff();
      },
      (error) => {
        this.loadingService.loadingOff();
        console.error('Error fetching data:', error);
      }
    );
  }

  addToCart(item: Items) {
    item.loading = true;
    const addToCartDto: AddToCartDto = { productId: item._id, quantity: 1 };

    // Sztuczne opóźnienie 2 sekundy
    of(null)
      .pipe(
        delay(1000), // 2 sekundy opóźnienia
        switchMap(() => this.shoppingCartService.addToCart(addToCartDto))
      )
      .subscribe(
        (addedProduct: any) => {
          this.addedProduct = addedProduct;
          item.loading = false;
        },
        (error) => {
          console.error('Error adding product to cart:', error);
          item.loading = false;
        }
      );
  }
  fetchItemDetails(item: Items): void {
    this.router.navigate([`/products/${item._id}/details`]);


  }
}
