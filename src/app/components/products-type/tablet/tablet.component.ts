import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from '../../category/category.component';

@Component({
  selector: 'app-tablet',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CategoryComponent],
  template: `<app-category></app-category>`,
  styleUrl: './tablet.component.scss',
})
export class TabletComponent {}
