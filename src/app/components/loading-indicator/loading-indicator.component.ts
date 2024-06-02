import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingService } from '../../services/loading/loading.service';
import { Router } from 'express';
import { Observable, tap } from 'rxjs';
import { RouteConfigLoadEnd, RouteConfigLoadStart } from '@angular/router';

@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [MatProgressSpinnerModule, AsyncPipe, NgIf, NgTemplateOutlet],
  template: `
  
  <div class="spinnercontent" *ngIf="loadingService.loading$ | async">
    <div class="spinnerclass">
      
      <mat-progress-spinner color="accent
      "  value="50" mode="indeterminate"></mat-progress-spinner>
    </div>
  </div>
  `,
  styleUrl: './loading-indicator.component.scss'
})
export class LoadingIndicatorComponent   {

 isLoaded = false;
  constructor(public loadingService: LoadingService){}
}
