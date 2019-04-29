import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddProduct } from '../store/products.action';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initForm();
  }

 initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),

    });


  }



  onAdd() {
    this.store.dispatch(new AddProduct(this.form.value));
  }




}
