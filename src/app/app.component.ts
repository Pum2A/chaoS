import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';

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
  ],
})
export class AppComponent {
  title = 'chaoS';

  isMenuOpen = false;
}
