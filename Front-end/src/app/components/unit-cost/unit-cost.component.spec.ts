import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCostComponent } from './unit-cost.component';

describe('UnitCostComponent', () => {
  let component: UnitCostComponent;
  let fixture: ComponentFixture<UnitCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
