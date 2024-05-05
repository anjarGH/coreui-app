import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kontak.component').then(m => m.KontakComponent),
    data: {
      title: $localize`Kontak`
    }
  }
];

