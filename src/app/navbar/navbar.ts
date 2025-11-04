import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgForOf, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  menuItems = ['Home', 'Programs', 'Trainers', 'About', 'Contact'];

  getLink(item: string): string {
    return '/' + item.toLowerCase();
  }
}
