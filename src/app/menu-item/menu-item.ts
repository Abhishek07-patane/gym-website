import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.css']
})
export class MenuItemComponent {
  @Input() label: string = '';
}
