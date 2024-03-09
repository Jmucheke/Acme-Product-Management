import { ProductService } from './../product-list/services/product.service';
import { IProduct } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarComponent } from 'src/app/shared/star.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-product-detail',
  standalone: true,
  imports: [StarComponent, FormsModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: IProduct | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }

    this.pageTitle += `: ${id}`
  }

  getProduct(id:number):void{
    this.productService.getProduct(id).subscribe({
      next:product => this.product = product,
      error:err=> this.errorMessage = err
    });
  }

  // this.productService.get
  onBack(): void {
    this.router.navigate(['/products']);

  }

}

