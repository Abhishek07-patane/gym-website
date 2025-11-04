import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { JoinButtonComponent } from '../join-button/join-button';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavbarComponent, JoinButtonComponent ,],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css']
})
export class MainPageComponent {}
