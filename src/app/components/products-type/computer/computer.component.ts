import { Component, inject, Output } from '@angular/core';
import { DataComponent } from '../../data/data.component';
import { Items } from '../../../interfaces/items';
import { DataService } from '../../../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [HttpClientModule, RouterLink, DataComponent],
  template: ` <app-data></app-data> `,
  styleUrl: './computer.component.scss',
})
export class ComputerComponent {}
