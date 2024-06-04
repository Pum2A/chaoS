import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { LaptopComponent } from './components/products-type/laptop/laptop.component';
import { ComputerComponent } from './components/products-type/computer/computer.component';
import { TabletComponent } from './components/products-type/tablet/tablet.component';
import { PhoneComponent } from './components/products-type/phone/phone.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products/:id/details', component: ProductDetailsComponent },
  { path: '**', redirectTo: 'home' },
];
