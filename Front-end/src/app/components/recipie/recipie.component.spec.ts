import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieComponent } from './recipie.component';

describe('RecipieComponent', () => {
  let component: RecipieComponent;
  let fixture: ComponentFixture<RecipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
