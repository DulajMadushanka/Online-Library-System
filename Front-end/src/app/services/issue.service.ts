import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {

  constructor(private http:Http) { }

  getIssue(){
    return this.http.get('http://localhost:3000/issues').map(res=>res.json());
    
  }

  

  addIssue(newIssue){
    console.log(newIssue);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/issue',newIssue,{headers:headers}).map(res=>res.json());
  }
  deleteIssue(id){
    return this.http.delete('http://localhost:3000/issue/'+id).map(res=>res.json());
  }
  updateIssue(newIssue){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/issue/'+newIssue._id,newIssue,{headers:headers}).map(res=>res.json());
  }

  

}
