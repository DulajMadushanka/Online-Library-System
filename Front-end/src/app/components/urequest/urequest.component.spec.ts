import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrequestComponent } from './urequest.component';

describe('UrequestComponent', () => {
  let component: UrequestComponent;
  let fixture: ComponentFixture<UrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
