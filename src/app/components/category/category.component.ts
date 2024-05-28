import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Items } from '../../interfaces/items';
import { NgOptimizedImage } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        <div *ngFor="let item of filteredItems">
          <ul>
            <div class="image-container">
              <img [ngSrc]="item.product_url" width="400" height="400" />
            </div>
            <li class="data-content">
              <div>{{ item.name }}</div>
              <div>Category: {{ item.category }}</div>
              <div class="item-price">Price: {{ item.price }} $</div>
              <div>About Product: {{ item.description }}</div>
            </li>
            <div class="btn-container">
              <button>Add to cart</button>
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
  private category: string = '';
  private queryParamSubscription!: Subscription;
  private dataSubscription!: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      this.category = params['category'] || '';
      console.log('Category from query params:', this.category);
      this.filterItems();
    });

    this.dataSubscription = this.dataService
      .fetchData()
      .subscribe((data: Items[]) => {
        this.items = data;
        console.log('Data fetched from DataService:', this.items);
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
    console.log('Filtering items with category:', this.category);
    if (this.category) {
      this.filteredItems = this.items.filter(
        (item) => item.category.toLowerCase() === this.category.toLowerCase()
      );
    } else {
      this.filteredItems = this.items;
    }
    console.log('Filtered items:', this.filteredItems);
  }
}
