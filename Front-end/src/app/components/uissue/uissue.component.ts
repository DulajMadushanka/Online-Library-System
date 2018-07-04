import { Component, OnInit, TemplateRef } from '@angular/core';
import { Issue } from '../../services/issue';
import { IssueService } from '../../services/issue.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-uissue',
  templateUrl: './uissue.component.html',
  styleUrls: ['./uissue.component.css'],
  providers:[IssueService]
})
export class UissueComponent implements OnInit {

  constructor(public modalService: BsModalService,private issueService:IssueService) { }

  public modalRef: BsModalRef;

  IssueList:Issue[]=[];
  selectedIssue:Issue;
  toggleForm:boolean=false;

  
  

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getIssues(){
    this.issueService.getIssue().subscribe(issue=>{
      this.IssueList=issue;
      
    })
  }

  

 
 
  showEditForm(item){
    this.selectedIssue=item;
    
    
  }
  
   


  ngOnInit() {
    this.getIssues()
  }

}
