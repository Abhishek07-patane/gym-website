import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class ProgramsCompomnent {
  constructor(private router: Router) {}

  
  goToMainPage() {
    this.router.navigate(['/']); // ✅ Navigates to MainPageComponent
  }
}
