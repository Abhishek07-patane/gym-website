import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-button',
  standalone: true,
  templateUrl: './join-button.html',
  styleUrls: ['./join-button.css']
})
export class JoinButtonComponent {
  constructor(private router: Router) { }

  goToJoinUs() {
    console.log("clicked");
    this.router.navigate(['/join-button/join-us']); // ✅ this line here
  }
}
