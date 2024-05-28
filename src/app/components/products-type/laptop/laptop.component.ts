import { Component } from '@angular/core';
import { CategoryComponent } from '../../category/category.component';

@Component({
  selector: 'app-laptop',
  standalone: true,
  imports: [CategoryComponent],
  template: `<app-category></app-category>`,
  styleUrl: './laptop.component.scss',
})
export class LaptopComponent {}
