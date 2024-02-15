import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/products/product-list/product-list.component').then((c) => c.ProductListComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./app/shared/star.component').then((c) => c.StarComponent)
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
