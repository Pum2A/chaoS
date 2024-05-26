import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import jsonData from '../../../../assets/products/test.json';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MaterialIcon } from 'material-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="top">
      <div class="logo">chaoS</div>
      <nav>
        <ul>
          @for (product of products; track product.id){
          <li
            (click)="
              navigateToCategory('{{product.category}}');
              selectCategory('{{product.category}}')
            "
          >
            <a (click)="toggleVisibility(product)" #greeting>
              {{ product.name }}
            </a>
          </li>

          }
        </ul>

        <i id="menu" class="fa-solid fa-bars" (click)="toggleMenu()"></i>
      </nav>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(125),
      ]),
      transition('* => void', [
        animate(0, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],

  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  products: any[] = jsonData.products.map((product) => ({
    ...product,
    visibility: false,
  }));

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  @Output() menuToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  toggleMenu() {
    this.menuToggle.emit();
  }

  toggleVisibility(selectedProduct: { visibility: boolean }) {
    // if product is visible then toggle his visibility
    if (selectedProduct.visibility) {
      selectedProduct.visibility = false;
      this.close.emit(selectedProduct.visibility);
      console.log('click zły');
    } else {
      // all products visibility is false
      this.products.forEach((product) => {
        product.visibility = false;
      });

      // changing his visibility to true
      selectedProduct.visibility = true;
      this.open.emit(selectedProduct.visibility);
      console.log('click');
    }
  }

  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/products', category]);
  }
}
