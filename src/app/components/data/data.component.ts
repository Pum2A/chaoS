import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        @if (items.length > 0) { @for (item of items; track item.id &&
        item.name) {
        <ul>
          <div class="image-container"></div>
          <li class="data-content">
            <div>Name: {{ item.name }}</div>
            <div>Category: {{ item.category }}</div>
            <div>Price: {{ item.price }} $</div>
            <div>About Product: {{ item.description }}</div>
          </li>
          <div class="btn-container">
            <button>Add to card</button>
          </div>
        </ul>
        } } @else {

        <ng-template #noData>
          <p>No data available for the selected category.</p>
        </ng-template>
        }
      </div>
    </div>
  `,

  styleUrl: './data.component.scss',
})
export class DataComponent {
  private http = inject(HttpClient);
  items: any[] = [];
  private categorySubject = new Subject<string>();

  @Input() category: string = '';

  constructor() {
    this.categorySubject.pipe(debounceTime(300)).subscribe((category) => {
      this.fetchData(category);
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
