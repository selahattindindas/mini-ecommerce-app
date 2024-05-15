import { Routes } from "@angular/router";
import { ProductComponent } from "./product.component";

export const routes: Routes = [

  {
    path: 'products',
    component:ProductComponent,
    children: [
      { 
        path: '/:id',
      loadComponent: () => import('../product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      }
    ],
},

];