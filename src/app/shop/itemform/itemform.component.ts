import { Component } from '@angular/core';
import { Item } from '../shop.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopcrudService } from '../shopcrud.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-itemform',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})
export class ItemformComponent {
  // item= new Item();
  item: Item = new Item();
  // item.name=""
  id!:any


  constructor(private router:Router,
    private shopcrud:ShopcrudService,
    private _snackBar: MatSnackBar,
    private acroute:ActivatedRoute
  ){

    this.id = this.acroute.snapshot.paramMap.get("id")!           
                if(this.id){
                  this.shopcrud.itemById(this.id).subscribe(item=>{
                    if(item!=null){
                      this.item = item;
                    }                  
                  })
                }
    }
    
    

  // onsubmit(){
  //   // // alert("Hi");
  //   // console.log("---------------in submit form fumctionality");
  //   // console.log(this.item);
  //   this.shopcrud.itemSave(this.item).subscribe(item=>{
  //     if(item!=null){
  //       this._snackBar.open(`Item is Added Successfull and It Employee Id ${item.id}`,
  //       "Information Message",{duration:5000})
  //     }else{
  //       this._snackBar.open(`Item is Not Added `,
  //       "Information Message",{duration:5000})
  //     }
  //   })
  //   this.item= new Item(); 
  //   this.router.navigate(['/shop','list'])
  // }

  onsubmit(){
    console.log(this.item)
    console.log("--------------in submit function")
    console.log("--------------in submit function",this.item.id)
    if(this.item.id){
      console.log("--------------went to if , to udate")

      this.shopcrud.itemUpdate(this.item).subscribe(emp=>{
        if(emp!=null){
          this._snackBar.open(`Employee is Updated Successfull and It Employee Id ${emp.id}`,
          "Information Message",{duration:5000})
        }else{
          this._snackBar.open(`Employee is Not Updated `,
          "Information Message",{duration:5000})
        }
      })
    }else{
      console.log("--------------went to else")

      this.shopcrud.itemSave(this.item).subscribe(emp=>{
        if(emp!=null){
          this._snackBar.open(`Employee is Added Successfull and It Employee Id ${emp.id}`,
          "Information Message",{duration:5000})
        }else{
          this._snackBar.open(`Employee is Not Added `,
          "Information Message",{duration:5000})
        }
      })
    }
    
    this.item= new Item(); 
    // redirecting to item list page after form submit
    this.router.navigate(['/shop','list'])
  }
}
