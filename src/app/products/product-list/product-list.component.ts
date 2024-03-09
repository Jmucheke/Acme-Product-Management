import { FormsModule } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/interface';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConvertToSpacesPipe, RouterModule, StarComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = '';
  sub!: Subscription;


  private _listFilter: string = ''

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In Setter:", value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[]=[]


  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  performFilter(filterBy:string): IProduct[]{
    filterBy=filterBy.toLocaleLowerCase()
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  }

  // onOutletLoaded(component){
  //   component.rating = this.product.product
  // }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next:products =>{
        this.products = products
        this.filteredProducts = this.products
      },
      error:err=> this.errorMessage=err
    });

  }

  onRatingClicked(message:string): void{
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
