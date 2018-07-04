import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmassageComponent } from './umassage.component';

describe('UmassageComponent', () => {
  let component: UmassageComponent;
  let fixture: ComponentFixture<UmassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
