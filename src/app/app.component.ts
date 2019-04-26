import { Component} from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { Products } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Observable<Products>;

  constructor( private productService: ProductsService) {
    this.products = this.productService.products;
  }



}
