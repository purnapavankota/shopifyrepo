import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared.module';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemformComponent } from './itemform/itemform.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ShopcrudService } from './shopcrud.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ShopComponent,
    ItemlistComponent,
    ItemformComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    // SharedModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule
  ],
  providers:[
    ShopcrudService
  ]
})
export class ShopModule { }
