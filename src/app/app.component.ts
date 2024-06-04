import { Component, computed, inject, input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './components/products-type/computer/computer.component';
import { provideIcons } from '@ng-icons/core';
import { bootstrapCart3 } from '@ng-icons/bootstrap-icons';
import { ShoppingCartItemsComponent } from './components/shopping-cart-items/shopping-cart-items.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    WelcomeSectionComponent,
    OfferSectionComponent,
    MatIconModule,
    ExperienceSectionComponent,
    LocationSectionComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    ComputerComponent,
    ShoppingCartItemsComponent,
    MatSnackBarModule,
    LoadingIndicatorComponent,
    MatProgressSpinnerModule,
    
  ],
  viewProviders: [provideIcons({ bootstrapCart3  })],
  providers:[]

})
export class AppComponent {
  title = 'chaoS';
  isMenuOpen = false;
  selectedCategory: string = '';

  isLoading = true;
  constructor( ) {
    setTimeout(() => {
      this.isLoading = false;
    
    },  1000)
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  
}
