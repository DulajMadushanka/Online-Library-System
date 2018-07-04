import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermassageComponent } from './usermassage.component';

describe('UsermassageComponent', () => {
  let component: UsermassageComponent;
  let fixture: ComponentFixture<UsermassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
