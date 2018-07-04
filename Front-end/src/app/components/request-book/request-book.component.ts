import { Component, OnInit, TemplateRef } from '@angular/core';
import { Request } from '../../services/request';
import { RequestService } from '../../services/request.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(public modalService: BsModalService,private requestService:RequestService) { }

  public modalRef: BsModalRef;

  RequestList:Request[]=[];
  selectedRequest:Request;
  toggleForm:boolean=false;
  alerts: any[] = [];

  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' }); // {3}
  }

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getRequest(){
    this.requestService.getRequest().subscribe(request=>{
      this.RequestList=request;
      
    })
  }

  addRequest(form){
    let newRequest:Request={
      s_name:form.value.s_name,
      email:form.value.email,
      book_title:form.value.book_title,
      author:form.value.author,
      edition:form.value.edition,
      note:form.value.note
    }
   // console.log(newIssue);
   
    this.requestService.addRequest(newRequest).subscribe(items=>{
      this.getRequest();
    })
  }
  

 
 

  deleteRequest(id){
    this.requestService.deleteRequest(id).subscribe(data=>{
      console.log(data);
      if(data.n==1){
        for(var i = 1;i<this.RequestList.length;i++){
          if(id==this.RequestList[i]._id){
            this.RequestList.splice(i,1);

          }
        }
      }
      this.getRequest();
    })
    
  }
  showEditForm(item){
    this.selectedRequest=item;
    
    
  }
  
  updateRequest(form){
   
    let newRequest:Request={
      _id:this.selectedRequest._id,
      s_name:form.value.s_name,
      email:form.value.email,
      book_title:form.value.book_title,
      author:form.value.author,
      edition:form.value.edition,
      note:form.value.note
     
    }
    
    this.requestService.updateRequest(newRequest).subscribe(result=>{
      console.log("Book Request is Updated"+result);
      this.getRequest();
      this.modalRef.hide();
    })
    
  }

  ngOnInit() {
    this.getRequest();
  }

  addRequestAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Request is added successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  deleteRequestAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Request is deleted successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  updateRequestAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Request is updated successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
