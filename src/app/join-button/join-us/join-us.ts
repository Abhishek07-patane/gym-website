import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar";

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, NavbarComponent],
  templateUrl: './join-us.html',
  styleUrls: ['./join-us.css'],
})
export class JoinUsComponent {
  name = '';
  email = '';
  phone = '';
  plan = '';
  successMessage = '';

  submitForm() {
    if (this.name && this.email && this.phone && this.plan) {
      this.successMessage = `🎉 Welcome ${this.name}! You’ve successfully joined our ${this.plan} plan.`;
      this.name = '';
      this.email = '';
      this.phone = '';
      this.plan = '';
    } else {
      this.successMessage = '⚠️ Please fill in all fields before submitting.';
    }
  }
}
