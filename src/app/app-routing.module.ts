import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop/shop.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'admin', component:  AdminComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
