import { ProductService } from './../product-list/services/product.service';
import { IProduct } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService:ProductService) { }

  onBack():void{
    this.router.navigate(['/products']);

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`


    // this.productService.get
  }

}
