import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoComponent } from './view-po.component';

describe('ViewPoComponent', () => {
  let component: ViewPoComponent;
  let fixture: ComponentFixture<ViewPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
