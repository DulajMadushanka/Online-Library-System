import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MassageService {

  constructor(private http:Http) { }

  getMassages(){
    return this.http.get('http://localhost:3000/massages').map(res=>res.json());
    
  }

  

  addMassage(newMassage){
    console.log(newMassage);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/massage',newMassage,{headers:headers}).map(res=>res.json());
  }
  
  deleteMassage(id){
    return this.http.delete('http://localhost:3000/massage/'+id).map(res=>res.json());
  }
 

}
