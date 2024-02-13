import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes : Routes =[
  {
    path: '',
    loadComponent: () =>
      import('./app/products/product-list/product-list.component').then((c) => c.ProductListComponent)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
