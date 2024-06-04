import { Component, inject, Output } from '@angular/core';
import { Items } from '../../../interfaces/items';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from '../../category/category.component';
@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CategoryComponent],
  template: `<app-category></app-category>`,
  styleUrl: './computer.component.scss',
})
export class ComputerComponent {}
