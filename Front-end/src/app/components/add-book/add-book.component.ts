import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/book';
import { AddBookPipe } from '../../pipes/add-book.pipe';

import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers:[BookService]
})
export class AddBookComponent implements OnInit {

  constructor(public modalService: BsModalService,private bookService:BookService) { }
  searchText = '';
  public modalRef: BsModalRef;

  AddbookList:Book[]=[];
  selectedAddbook:Book;
  toggleForm:boolean=false;
  alerts: any[] = [];

  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' }); // {3}
  }

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getbook(){
    this.bookService.getAdd().subscribe(add=>{
      this.AddbookList=add;
      
      
    })
  }

  addbook(form){
    let newAddbook:Book={
      isbn_no:form.value.isbn_no,
      book_name:form.value.book_name,
      title:form.value.title,
      subtitle:form.value.subtitle,
      author:form.value.author,
      edition:form.value.edition,
      year_of_edition:form.value.year_of_edition,
      total_books:form.value.total_books,
      price:form.value.price
     
    }
    console.log(newAddbook);
   
    this.bookService.addAdd(newAddbook).subscribe(items=>{
      this.getbook();
      this.modalRef.hide();
    })
  }
  

 
 

  deletebook(id){
    this.bookService.deleteAdd(id).subscribe(data=>{
      console.log(data);
      if(data.n==1){
        for(var i = 1;i<this.AddbookList.length;i++){
          if(id==this.AddbookList[i]._id){
            this.AddbookList.splice(i,1);

          }
        }
      }
      this.getbook();
    })
    
  }
  showEditForm(item){
    this.selectedAddbook=item;
    
    
  }
  
  updatebook(form){
   
    let newAddbook:Book={
      _id:this.selectedAddbook._id,
      isbn_no:form.value.isbn_no,
      book_name:form.value.book_name,
      title:form.value.title,
      subtitle:form.value.subtitle,
      author:form.value.author,
      edition:form.value.edition,
      year_of_edition:form.value.year_of_edition,
      total_books:form.value.total_books,
      price:form.value.price
     
    }
    
    this.bookService.updateAdd(newAddbook).subscribe(result=>{
      console.log("Book is Updated"+result);
      this.getbook();
      this.modalRef.hide();
    })
    
  }
  ngOnInit() {
    this.getbook();
  }

  addBookAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book is added successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  deleteBookAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book is deleted successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  updateBookAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book is updated successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


}
