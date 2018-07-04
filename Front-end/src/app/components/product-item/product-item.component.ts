import { Component, OnInit } from '@angular/core';
import {Item} from "./product";
import {DataService} from "../../services/data.service";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers:[DataService],
})
export class ProductItemComponent implements OnInit {
  productItemList:Item[]=[];
  productitem:Item[]=[];
  itemname:String;
  itemitem:Item;
  itemCode:String;
  quantity:number;
  description:String;
  selectedItem:Item;
  _id:number;
  toggleForm:boolean=false;
  



  constructor(private dataservice:DataService) { }
  getItems(){
    this.dataservice.getProductItems()
      .subscribe(items=>{
        this.productItemList=items;
        //console.log('data from dataservice:'+this.productItemList[0].itemname);
      })

  }
  deleteproduct(id) {

    this.dataservice.deleteproduct(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < this.productItemList.length; i++) {
            if (id==this.productItemList[i]._id) {
              this.productitem.splice(i, 1);
              this.getItems();

            }
          }
        }
      })
  }

 setCode(){
   this.itemCode = this.itemname.substring(0,2) + this.count;
   
 }
 count =0;
 addItem(){
   this.setCode();
   this.count = this.count +1;
   const newItem = {
     itemname: this.itemname,
     quantity: this.quantity,
     description:this.description,
     itemCode:this.itemCode,     
   }
   this.dataservice.addProductItem(newItem)
     .subscribe(item => {
       this.productitem.push(item);
       this.dataservice.getProductItems()
         .subscribe(productitem =>
           this.productitem = productitem);
       this.getItems()
     });
 }
showEditFrm(item){
   this.selectedItem = item;
   this.toggleForm=!this.toggleForm;
 }
editproduct(){ 
  
   let newItem = { //newItem:Item={}
     _id:this.selectedItem._id,
     itemCode:this.selectedItem.itemCode,
     itemname:this.selectedItem.itemname,
     quantity:this.selectedItem.quantity,
     description:this.selectedItem.description,
    };   
   
  this.dataservice.updateproduct(newItem)
     .subscribe(result=>{
       console.log('original Item to be updated:'+result);
       this.getItems();
     });
   this.toggleForm=!this.toggleForm;
  

 }





  ngOnInit() {
   this.getItems();

  }

}
