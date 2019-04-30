import { Component, Input} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

@Input() product: Product;
 constructor( private productService: ProductsService) {}

  onDelete() {
    this.productService.delete(this.product);
  }

  onEdit() {
    this.productService.edit(this.product);
  }

}