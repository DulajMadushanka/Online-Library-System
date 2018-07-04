import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ItemDetailService } from '../../../../services/itemDetailService/item-detail.service';
import { Item } from '../../../../models/item-detail.model';

@Component({
  selector: 'app-set-rol',
  templateUrl: './set-rol.component.html',
  styleUrls: ['./set-rol.component.css']
})
export class SetRolComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(public itemDetailService: ItemDetailService, public modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModal(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2, {class: 'modal-md' }); // {3}
  }
  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  onSubmit(form: NgForm) {

  }

  setROL() {

  }

  onEdit1(item: Item) {
    this.itemDetailService.selectedItem = item;
  }

}
