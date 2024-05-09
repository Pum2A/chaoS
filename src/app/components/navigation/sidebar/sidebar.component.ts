import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <nav>
      @if (isOpen) {
      <div>
        <nav>
          <ul>
            @for (product of products; track product.id){
            <li class="product-name">
              <a (click)="toggleVisibility(product)">
                {{ product.name }}
              </a>
            </li>

            }
          </ul>
        </nav>
      </div>

      } @for (product of products; track product.id){ @if(product.visibility){
      <div class="series-list " @flyInOut>
        <a>{{ product.series[0] }}</a>
        <a>{{ product.series[1] }}</a>
        <a>{{ product.series[2] }}</a>
      </div>
      } }
    </nav>
  `,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  products: any[] = jsonData.products.map((product) => ({
    ...product,
    visibility: false,
  }));

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input() isOpen!: boolean;

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
}
