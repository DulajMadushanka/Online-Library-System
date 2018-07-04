import { Component, OnInit } from '@angular/core';
import { Request } from '../../services/request';
import { RequestService } from '../../services/request.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-urequest',
  templateUrl: './urequest.component.html',
  styleUrls: ['./urequest.component.css']
})
export class UrequestComponent implements OnInit {

  constructor(private requestService:RequestService) { }
  alerts: any[] = [];

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
      
    })
  }
  

  ngOnInit() {
  }

  addRequestAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Book Request is added successfully! (added: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
