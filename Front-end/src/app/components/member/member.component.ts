import { Component, OnInit, TemplateRef, ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
import { Member } from '../../services/member';
import { MemberService } from '../../services/member.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers:[MemberService]
})
export class MemberComponent implements OnInit {

  constructor(public modalService: BsModalService,private memberService:MemberService) { }

  public modalRef: BsModalRef;
  @ViewChild('content') content:ElementRef;

  MemberList:Member[]=[];
  selectedMember:Member;
  toggleForm:boolean=false;
  alerts: any[] = [];

  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' }); // {3}
  }

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getMember(){
   
    this.memberService.getMembers().subscribe(member=>{
      this.MemberList=member;
      
     
      
    })
  }

  addMember(form){
    let newMember:Member={
      name:form.value.name,
      email:form.value.email,
      id_no:form.value.id_no,
      mobile_no:form.value.mobile_no,
      address:form.value.address,
      birthday:form.value.birthday,
      status:form.value.status
    }
    console.log(newMember);
   
    this.memberService.addMembers(newMember).subscribe(items=>{
      this.getMember();
      this.modalRef.hide();
    })
  }

  deleteMember(id){
    this.memberService.deleteMembers(id).subscribe(data=>{
      console.log(data);
      if(data.n==1){
        for(var i = 1;i<this.MemberList.length;i++){
          if(id==this.MemberList[i]._id){
            this.MemberList.splice(i,1);

          }
        }
      }
      this.getMember();
    })
    
  }
  showEditForm(member){
    this.selectedMember=member;
    console.log(member);
    
    
  }
  
  updateMember(form){
   
    let newMember:Member={
      _id:this.selectedMember._id,
      name:form.value.name,
      email:form.value.email,
      id_no:form.value.id_no,
      mobile_no:form.value.mobile_no,
      address:form.value.address,
      birthday:form.value.birthday,
      status:form.value.status
     
    }
    console.log(newMember);
    
    this.memberService.updateMembers(newMember).subscribe(result=>{
      console.log("Member is Updated"+result);
      this.getMember();
      this.modalRef.hide();
    })
    
  }
  ngOnInit() {
    this.getMember();
  }

  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width':190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('test.pdf');
  }

  deleteMemberAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Member is deleted successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  addMemberAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Member is added successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  updateMemberAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Member is updated successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


  

}
