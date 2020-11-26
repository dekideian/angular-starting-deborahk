import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage = '';
  imageWidth = 50;
  imageMargin = 2;
  imageVisibility = false;
  // tslint:disable-next-line: variable-name
  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  constructor(private productService: ProductService) {
    this.filteredProducts = this.products;
    console.log('Smg from the service '+productService.title);
   }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  toggleImage() {
    this.imageVisibility = !this.imageVisibility;
  }
  onNotify(someEvent: string) {
    console.log('we clicked ', someEvent);
  } 
}
