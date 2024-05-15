import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'products',
                loadChildren: () => import('./ui/pages/product/routes').then((m) => m.routes)
            },
        ]
      }
];
