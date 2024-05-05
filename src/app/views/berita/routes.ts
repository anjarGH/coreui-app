import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./berita.component').then(m => m.BeritaComponent),
    data: {
      title: $localize`Berita`
    }
  }
];

