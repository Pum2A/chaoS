import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Input, OnInit, Output } from '@angular/core';
import { Items } from '../interfaces/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  @Output() category: string = '';
  @Input() items: Items[] = [];

  private http = inject(HttpClient);
  fetchData(): Observable<Items[]> {
    return this.http.get<Items[]>('http://localhost:3000/products');
  }
}
