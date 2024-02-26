import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Details'

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      const id =Number(this.route.snapshot.paramMap.get('id'));
      this.pageTitle += `: ${id}`
  }

}
