import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemformComponent } from './itemform/itemform.component';

const routes: Routes = [
  
  { path: 'list', component: ItemlistComponent },
  { path: 'form', component: ItemformComponent },
  { path: 'edit/:id', component: ItemformComponent },
  { path: 'detail/:id', component: ShopComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
