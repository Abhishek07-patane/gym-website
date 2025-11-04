import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page';
import { JoinUsComponent } from './join-button/join-us/join-us';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'join-button/join-us', component: JoinUsComponent },
  { path: '**', redirectTo: '' } // fallback
];
