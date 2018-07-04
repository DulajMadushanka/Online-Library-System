import { Component, OnInit, TemplateRef } from '@angular/core';
import { Massage } from '../../services/massage';
import { MassageService } from '../../services/massage.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-umassage',
  templateUrl: './umassage.component.html',
  styleUrls: ['./umassage.component.css'],
  providers:[MassageService]
})

export class UmassageComponent implements OnInit {

  constructor(public modalService: BsModalService,private massageService:MassageService) { }

  public modalRef: BsModalRef;
  MassageList:Massage[]=[];
  selectedMassage:Massage;

  

 

  public openEditModal(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, {class: 'modal-md' }); // {3}
  }

  
  getMassage(){
    this.massageService.getMassages().subscribe(massage=>{
      this.MassageList=massage;
      
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

}
