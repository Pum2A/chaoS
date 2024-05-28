import { Component } from '@angular/core';
import { DataComponent } from '../../data/data.component';

@Component({
  selector: 'app-laptop',
  standalone: true,
  imports: [DataComponent],
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.scss',
})
export class LaptopComponent {}
