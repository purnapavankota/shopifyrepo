import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './shop.model';
import { ActivatedRoute } from '@angular/router';
import { ShopcrudService } from './shopcrud.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  id!:any
  emp$!:Observable<Item>

  constructor(private acroute:ActivatedRoute,private shopcrud:ShopcrudService)
  {
    this.id = this.acroute.snapshot.paramMap.get("id")
    alert(this.id)
    if(this.id){
      this.emp$ = this.shopcrud.itemById(this.id);
    }
  
  }
}
