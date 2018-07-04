import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http:Http) { }

  getRequest(){
    return this.http.get('http://localhost:3000/requests').map(res=>res.json());
    
  }

  

  addRequest(newRequest){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/request',newRequest,{headers:headers}).map(res=>res.json());
  }
  deleteRequest(id){
    return this.http.delete('http://localhost:3000/request/'+id).map(res=>res.json());
  }
  updateRequest(newRequest){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/request/'+newRequest._id,newRequest,{headers:headers}).map(res=>res.json());
  }


}
