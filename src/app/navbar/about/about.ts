import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class Aboutomponent {
  constructor(private router: Router) { }
  goToMainPage() {
    this.router.navigate(['/']);
  }
}
