import {
  Component,
  EventEmitter,
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
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: ``,

  styleUrl: './data.component.scss',
})
export class DataComponent implements OnInit {
  @Input() category: string = '';
  @Input() items: Items[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  private dataService = inject(DataService);

  ngOnInit() {
    this.dataService.fetchData().subscribe((data: Items[]) => {
      this.items = data;
    });
  }
}
