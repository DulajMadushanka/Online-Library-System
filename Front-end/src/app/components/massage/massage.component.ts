import { Component, OnInit, TemplateRef } from '@angular/core';
import { Massage } from '../../services/massage';
import { MassageService } from '../../services/massage.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css'],
  providers:[MassageService]
})
export class MassageComponent implements OnInit {

  constructor(public modalService: BsModalService,private massageService:MassageService) { }

  public modalRef: BsModalRef;
  MassageList:Massage[]=[];
  selectedMassage:Massage;
  alerts: any[] = [];

  

  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md' }); // {3}
  }

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getMassage(){
    this.massageService.getMassages().subscribe(massage=>{
      this.MassageList=massage;
      
    })
  }

  addMassage(form){
    let newMassage:Massage={
      student_name:form.value.student_name,
      email:form.value.email,
      note:form.value.note
    }
    console.log(newMassage);
   
    this.massageService.addMassage(newMassage).subscribe(items=>{
      this.getMassage();
      this.modalRef.hide();
    })
  }

  deleteMassage(id){
    this.massageService.deleteMassage(id).subscribe(data=>{
      console.log(data);
      if(data.n==1){
        for(var i = 1;i<this.MassageList.length;i++){
          if(id==this.MassageList[i]._id){
            this.MassageList.splice(i,1);

          }
        }
      }
      this.getMassage();
    })
    
  }

  showEditForm(massage){
    this.selectedMassage=massage;
    
    
  }

  ngOnInit() {
    this.getMassage();
  }

  addMassageAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Masage is send successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  deleteMassageAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Massage is deleted successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

 
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
