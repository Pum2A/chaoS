import { Component, Output } from '@angular/core';
import { Items } from '../../interfaces/items';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatProgressSpinnerModule],
  template: `
    <div class="wrapper">
      <mat-spinner
        *ngIf="loading"
        color=""
        strokeWidth="4
      "
        diameter="50"
      ></mat-spinner>
      <div *ngIf="!loading" class="product-container">
        <div class="image-data" *ngIf="product">
          <img
            *ngIf="product.product_url"
            [src]="product.product_url"
            width="400"
            height="400"
          />
        </div>
        <div class="right">
          <div class="content-text-data" *ngIf="product">
            <p>Product: {{ product.name }}</p>
            <p>Category: {{ product.category }}</p>
            <p>Product price: {{ product.price }} $</p>
            <p>About product: {{ product.description }}</p>
            <p>Product weight: {{ product.weight }} kg</p>
            <p>Product disk size: {{ product.disk_size }} GB</p>
            <p>Release date: {{ product.release_date }}</p>
          </div>
          <div class="btn-container">
            <button (click)="goBack()">Return</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product: Items | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.fetchItemDetails(id);
      }
    });
  }

  fetchItemDetails(id: string): void {
    this.loadingService.loadingOn();
    this.dataService.showDetails(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loadingService.loadingOff();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching item details:', error);
        this.loading = false;
      },
    });
  }
  goBack(): void {
    if (this.product?.category) {
      this.router.navigate(['/category'], {
        queryParams: { category: this.product.category },
      });
    } else {
      console.error('Product category is undefined');
    }
  }
}
