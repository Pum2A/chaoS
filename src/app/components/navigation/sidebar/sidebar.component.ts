import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <nav>
      @if (isOpen) {

      <p>Testowa wiaodmosc</p>
      }
    </nav>
  `,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isOpen!: boolean;
}
