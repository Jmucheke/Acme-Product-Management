import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/interface';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';

@Component({
  selector: 'pm-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConvertToSpacesPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  imageWidth = 50;
  imageMargin = 2;


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


  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
  ];

  performFilter(filterBy:string): IProduct[]{
    filterBy=filterBy.toLocaleLowerCase()
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  }

  constructor() { }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void { 
    this._listFilter = "cart"
  }
}
