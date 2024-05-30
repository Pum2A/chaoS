import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { Items } from '../../../interfaces/items';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, NgIconComponent],
  template: `
    <div class="top">
      <div class="logo" routerLink="">chaoS</div>
      <nav>
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li (click)="navigateToCategory('laptop')"><a>Laptops</a></li>
          <li (click)="navigateToCategory('computer')"><a>Computers</a></li>
          <li (click)="navigateToCategory('phone')"><a>Phones</a></li>
          <li (click)="navigateToCategory('tablet')"><a>Tablets</a></li>
          <li><a routerLink="/support">Support</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <ng-icon class="shopping-cart" name="bootstrapCart3"> </ng-icon>
        </ul>
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
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() items: Items[] = [];
  @Input() category: string = '';
  @Output() menuToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  toggleMenu() {
    this.menuToggle.emit();
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/category'], { queryParams: { category } });
  }
}
