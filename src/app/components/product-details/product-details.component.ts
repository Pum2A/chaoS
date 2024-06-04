import { Component, Output } from '@angular/core';
import { Items } from '../../interfaces/items';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template:`
<div *ngIf="product">
  <p>{{ product.name }}</p>
  <p>{{ product.category }}</p>
  <p>{{ product.price }}</p>
  <p>{{ product.description }}</p>
  <img *ngIf="product.product_url" [src]="product.product_url" width="400" height="400" />
</div>
<button (click)="goBack()">Return</button>



  `,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: Items | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fetchItemDetails(id);
      }
    });
  }

  fetchItemDetails(id: string): void {
    this.dataService.showDetails(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        console.error('Error fetching item details:', error);
      }
    });
  }
  goBack(): void {
    if (this.product?.category) {
      this.router.navigate(['/category'], { queryParams: { category: this.product.category } });
    } else {
      console.error('Product category is undefined');
    }
  }
 
}
