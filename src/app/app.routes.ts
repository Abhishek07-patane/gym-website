import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page';
import { JoinUsComponent } from './join-button/join-us/join-us';
import { HomeComponent } from './navbar/home/home';
import { ProgramsCompomnent } from './navbar/programs/programs';
import { TrainersComponent } from './navbar/trainers/trainers';
import { ContactComponent } from './navbar/contact/contact';
import { Aboutomponent } from './navbar/about/about';

export const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'join-button/join-us', component: JoinUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'programs', component: ProgramsCompomnent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'about', component: Aboutomponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback route
];
