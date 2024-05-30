import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Items } from '../../interfaces/items';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="wrapper">
      <div class="grid-container">
        <!-- @for (item of items; track item.id && item.name){ @if (items.length > 0)
        { -->
        <div *ngFor="let item of items">
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
              <button>Add to card</button>
            </div>
          </ul>
        </div>
        <!-- } } -->
      </div>
    </div>
  `,

  styleUrl: './data.component.scss',
})
export class DataComponent implements OnInit {
  @Input() category: string = '';
  @Input() items: Items[] = [];
  private dataService = inject(DataService);

  ngOnInit() {
    this.dataService.fetchData().subscribe((data: Items[]) => {
      this.items = data;
    });
  }
}
