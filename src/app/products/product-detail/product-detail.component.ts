import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  product : IProduct;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { 

  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log('our id is ' + productId);
  }

  goBack() {
    this.router.navigate(['/products']);
  }

}
