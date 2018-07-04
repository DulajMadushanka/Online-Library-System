import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MemberService {

  constructor( private http:Http) { }

  getMembers(){
    return this.http.get('http://localhost:3000/members').map(res=>res.json());
    
  }

  

  addMembers(newMember){
    console.log(newMember);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/member',newMember,{headers:headers}).map(res=>res.json());
  }
  deleteMembers(id){
    return this.http.delete('http://localhost:3000/member/'+id).map(res=>res.json());
  }
  updateMembers(newMember){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/member/'+newMember._id,newMember,{headers:headers}).map(res=>res.json());
  }

}
