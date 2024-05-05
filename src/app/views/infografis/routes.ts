import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./infografis.component').then(m => m.InfografisComponent),
    data: {
      title: $localize`Infografis`
    }
  }
];

