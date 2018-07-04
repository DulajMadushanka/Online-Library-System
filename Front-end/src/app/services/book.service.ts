import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {

  constructor(private http:Http) { }

  getAdd(){
    return this.http.get('http://localhost:3000/books').map(res=>res.json());  
  }
  addAdd(newAdd){
    console.log(newAdd);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/book',newAdd,{headers:headers}).map(res=>res.json());
  }
  deleteAdd(id){
    return this.http.delete('http://localhost:3000/book/'+id).map(res=>res.json());
  }
  updateAdd(newAdd){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/book/'+newAdd._id,newAdd,{headers:headers}).map(res=>res.json());
  }


}
