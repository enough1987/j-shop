import { Component } from '@angular/core';
import { Observable } from 'rxjs';


import { Products } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Observable<Products> = this.productService.products;

  constructor(private productService: ProductsService) {
  }

}
