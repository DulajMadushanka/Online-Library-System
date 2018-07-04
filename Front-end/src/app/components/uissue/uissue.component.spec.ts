import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UissueComponent } from './uissue.component';

describe('UissueComponent', () => {
  let component: UissueComponent;
  let fixture: ComponentFixture<UissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
