import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipieService {

  constructor(private http: Http) { }

  getRecipies() {
    return this.http.get('http://localhost:3000/recipie/').map(res => res.json());
  }
  getItem(recipieCode) {
    return this.http.get('http://localhost:3000/recipie/'+recipieCode).map(res => res.json());
  }
  addProductItem(newItem) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/recipie/', newItem, {headers: headers}).map(res => res.json());
  }

  deleteproduct(id) {
    return this.http.delete('http://localhost:3000/recipie/' + id)
      .map(res => res.json());
  }
  updateproduct(newRecipie) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/recipie/' + newRecipie._id, newRecipie, {headers: headers}).map(res => res.json());



  }

}
