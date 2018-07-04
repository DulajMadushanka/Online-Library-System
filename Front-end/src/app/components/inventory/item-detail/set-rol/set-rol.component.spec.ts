import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRolComponent } from './set-rol.component';

describe('SetRolComponent', () => {
  let component: SetRolComponent;
  let fixture: ComponentFixture<SetRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
