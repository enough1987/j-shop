import { Component, OnInit } from '@angular/core';
import { Products } from './models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
public productState: Observable<Products>;

constructor(private store: Store<AppState>) {}

ngOnInit() {
  this.productState = this.store.select('ProductPage');
}


}
