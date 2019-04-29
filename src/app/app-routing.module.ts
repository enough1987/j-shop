import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-products' },
  { path: 'app-products', component: ProductsComponent },
  { path: 'app-admin', component: AdminComponent},
  { path: '**', component: ProductsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
