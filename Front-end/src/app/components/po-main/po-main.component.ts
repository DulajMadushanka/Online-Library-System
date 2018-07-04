import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-main',
  templateUrl: './po-main.component.html',
  styleUrls: ['./po-main.component.css']
})
export class PoMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCpo() {
    this.router.navigate(['cpo']);
  }

  goVpo() {
    this.router.navigate(['vpo']);
  }
}
