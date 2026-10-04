import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { authGuard, adminGuard } from '@core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'rpm-rankings',
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'rpm-admin',
        exposedModule: './routes',
      }).then((m) => m.routes),
    canActivate: [adminGuard],
  },
  {
    path: 'team',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'rpm-teams',
        exposedModule: './routes',
      }).then((m) => m.routes),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'rpm-users',
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
