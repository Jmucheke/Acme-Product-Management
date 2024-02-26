import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./app/products/product-detail/product-detail.guard";

const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./app/products/product-list/product-list.component').then((c) => c.ProductListComponent),
    children: [
      // {
      //   path: '',
      //   loadComponent: () =>
      //     import('./app/shared/star.component').then((c) => c.StarComponent)
      // }
    ]
  },
  {
    path: '',
    loadComponent: () =>
      import('./app/home/welcome.component').then((c) => c.WelcomeComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./app/products/product-detail/product-detail.component').then((c) => c.ProductDetailComponent),
    canActivate: [ProductDetailGuard]
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./app/home/welcome.component').then((c) => c.WelcomeComponent)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
