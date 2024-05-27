import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Items } from '../../interfaces/items';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        @for (item of items; track item.id && item.name){ @if (items.length > 0)
        {
        <ul>
          <div class="image-container">
            <img [ngSrc]="item.product_url" width="400" height="400" />
          </div>
          <li class="data-content">
            <div>Name: {{ item.name }}</div>
            <div>Category: {{ item.category }}</div>
            <div>Price: {{ item.price }} $</div>
            <div>About Product: {{ item.description }}</div>
            {{ item.product_url }}
          </li>
          <div class="btn-container">
            <button>Add to card</button>
          </div>
        </ul>
        } }
      </div>
    </div>
  `,

  styleUrl: './data.component.scss',
})
export class DataComponent implements OnInit {
  private http = inject(HttpClient);
  items: Items[] = [];
  private categorySubject = new Subject<string>();
  private route = inject(ActivatedRoute);
  @Input() category: string = '';
  @Input() product_url: string = '';

  constructor() {
    this.categorySubject.pipe(debounceTime(300)).subscribe((category) => {
      this.fetchData(category);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.fetchData(this.category);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && this.category) {
      this.onCategorySelected(this.category);
    }
  }

  fetchData(category: string) {
    this.http
      .get<any[]>(`http://localhost:3000/products?category=${category}`)
      .subscribe((data: any) => {
        this.items = data;
      });
  }

  onCategorySelected(category: string) {
    this.categorySubject.next(category);
  }
}
