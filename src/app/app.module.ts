import { ProductListComponent } from './products/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ProductListComponent,FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
