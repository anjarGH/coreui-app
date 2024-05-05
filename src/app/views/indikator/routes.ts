import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./indikator.component').then(m => m.IndikatorComponent),
    data: {
      title: $localize`Macro`
    }
  }
];

