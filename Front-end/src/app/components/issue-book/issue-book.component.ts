import { Component, OnInit, TemplateRef } from '@angular/core';
import { Issue } from '../../services/issue';
import { IssueService } from '../../services/issue.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';


@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css'],
  providers:[IssueService]
})
export class IssueBookComponent implements OnInit {

  constructor(public modalService: BsModalService,private issueService:IssueService) { }
  public modalRef: BsModalRef;

  IssueList:Issue[]=[];
  selectedIssue:Issue;
  toggleForm:boolean=false;
  alerts: any[] = [];

  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' }); // {3}
  }

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getIssues(){
    this.issueService.getIssue().subscribe(issue=>{
      this.IssueList=issue;
      
    })
  }

  addIssue(form){
   
    
    
    
    let newIssue:Issue={
     
      s_name:form.value.s_name,
      email:form.value.email,
      book_name:form.value.book_name,
      isbn:form.value.isbn,
      b_date:form.value.b_date,
      r_date:form.value.r_date,
      note:form.value.note,
      fine:form.value.fine
    }
    console.log(newIssue);
   
    this.issueService.addIssue(newIssue).subscribe(items=>{
      this.getIssues();
      this.modalRef.hide();
    })
   
    
     
    
    
    
    
  
  }
  

 
 

  deleteIssue(id){
    this.issueService.deleteIssue(id).subscribe(data=>{
      console.log(data);
      if(data.n==1){
        for(var i = 1;i<this.IssueList.length;i++){
          if(id==this.IssueList[i]._id){
            this.IssueList.splice(i,1);

          }
        }
      }
      this.getIssues();
    })
    
  }
  showEditForm(item){
    this.selectedIssue=item;
    
    
  }
  
  updateIssue(form){
   
    let newIssue:Issue={
      _id:this.selectedIssue._id,
      s_name:form.value.s_name,
      email:form.value.email,
      book_name:form.value.book_name,
      isbn:form.value.isbn,
      b_date:form.value.b_date,
      r_date:form.value.r_date,
      note:form.value.note,
      fine:form.value.fine
     
    }
    
    this.issueService.updateIssue(newIssue).subscribe(result=>{
      console.log("Book Issue is Updated"+result);
      this.getIssues();
      this.modalRef.hide();
    })
    
  }


  ngOnInit() {
   this.getIssues();
  }
  addIssueAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Issue is added successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  deleteIssuetAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Issue is deleted successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  updateIssueAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Issue is updated successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
