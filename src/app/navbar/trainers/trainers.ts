import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.html',
  styleUrl: './trainers.css',
})
export class TrainersComponent {
 constructor(private router: Router) {}

  
  goToMainPage() {
    this.router.navigate(['/']); // ✅ Navigates to MainPageComponent
  }
}
