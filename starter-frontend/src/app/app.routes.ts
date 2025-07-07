import { Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamPageComponent } from './team-page/team-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:name', component: TeamPageComponent },
];
