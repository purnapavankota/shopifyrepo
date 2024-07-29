import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './shop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopcrudService {

  apiURL = "http://localhost:3000/items"
  constructor(
    private http:HttpClient
  ) {
    console.log("----------------entered service  ")
   }

  // savng the item
  itemSave(item:Item):Observable<Item>{
    console.log("---------------hello")
    return this.http.post<Item>(this.apiURL,item);
  }

  // retrieving item list for dislay
  itemList():Observable<Item[]>{
      return this.http.get<Item[]>(this.apiURL)
    }

  itemById(id:any):Observable<Item>{
    console.log("hi in service")
    console.log(id)

    return this.http.get<Item>(this.apiURL+"/"+id)
  }
  itemDelete(id:any):Observable<Item>{
    return this.http.delete<Item>(this.apiURL+"/"+id)
  }

  itemUpdate(item:Item):Observable<Item>{
    return this.http.put<Item>(this.apiURL+"/"+item.id,item)
  }
}
