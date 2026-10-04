import { Routes } from '@angular/router';
import { LiveTrackerComponent } from './live-tracker/live-tracker.component';

export const routes: Routes = [
  {
    path: ':id',
    component: LiveTrackerComponent,
  },
  {
    path: '',
    component: LiveTrackerComponent,
  }
];
