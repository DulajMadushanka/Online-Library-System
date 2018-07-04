import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(
    private http:Http
  ) { }
  

  getCustomer(){
    return this.http.get('http://localhost:3000/customs').map(res=>res.json());
  }
  deleteCustomer(id){
    return this.http.delete('http://localhost:3000/custom/'+id).map(res=>res.json());
  }
  updateCustomer(newCustomer){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/custom/'+newCustomer._id,newCustomer,{headers:headers}).map(res=>res.json());
  }

}
