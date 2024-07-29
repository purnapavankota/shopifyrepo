import { Component } from '@angular/core';
import { ShopcrudService } from '../shopcrud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../shop.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  // styleUrl: './itemlist.component.css'
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {

  // displayedColumns:string[] = ['id']
  displayedColumns:string[] = ['itemname',"description","price","quantity","action"]

  itemlist$!:Observable<Item[]>
  constructor(private shopcrud:ShopcrudService,private _snackBar: MatSnackBar,)
    {
      this.itemlist$ = this.shopcrud.itemList();
    }

    onDelete(id:number){
      this.shopcrud.itemDelete(id).subscribe(item=>{
        if(item){
          this._snackBar.open(`Employee is Deleted Successfull`,
          "Information Message",{duration:5000})
          this.itemlist$ = this.shopcrud.itemList();
        }
      })
    }
}
