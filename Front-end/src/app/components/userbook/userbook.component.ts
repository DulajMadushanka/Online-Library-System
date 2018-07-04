import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/book';

@Component({
  selector: 'app-userbook',
  templateUrl: './userbook.component.html',
  styleUrls: ['./userbook.component.css'],
  providers:[BookService]
})
export class UserbookComponent implements OnInit {

  constructor(public modalService: BsModalService,private bookService:BookService) { }

  public modalRef: BsModalRef;

  AddbookList:Book[]=[];
  selectedAddbook:Book;
  toggleForm:boolean=false;

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  getbook(){
    this.bookService.getAdd().subscribe(add=>{
      this.AddbookList=add;
      
    })
  }

  
  showEditForm(item){
    this.selectedAddbook=item;  
  }
  ngOnInit() {
    this.getbook();
  }

}
