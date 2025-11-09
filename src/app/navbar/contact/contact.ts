import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  constructor(private router: Router){}

   goToMainPage(){
    this.router.navigate(['/']);
   }
}
