import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(
    private http:Http
  ) { }


  getItems(){
    return this.http.get('http://localhost:3000/products').map(res=>res.json());
    
  }

  getItemId(id){
    return this.http.get('http://localhost:3000/products/'+id).map(res=>res.json());
  }

  addItem(newItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/product',newItem,{headers:headers}).map(res=>res.json());
  }
  deleteItems(id){
    return this.http.delete('http://localhost:3000/product/'+id).map(res=>res.json());
  }
  updateItems(newItem){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/product/'+newItem._id,newItem,{headers:headers}).map(res=>res.json());
  }

  addCustomer(newCustomer){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/custom',newCustomer,{headers:headers}).map(res=>res.json());
    
  }

}
