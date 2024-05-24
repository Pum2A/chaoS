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
    <ul *ngIf="items.length > 0; else noData">
      <li *ngFor="let item of items">
        <div>{{ item.name }}</div>
        <div>{{ item.category }}</div>
        <div>{{ item.price }}</div>
        <div>{{ item.description }}</div>
      </li>
    </ul>
    <ng-template #noData>
      <p>No data available for the selected category.</p>
    </ng-template>
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
