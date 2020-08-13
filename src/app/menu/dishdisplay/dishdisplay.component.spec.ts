import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishdisplayComponent } from './dishdisplay.component';

describe('DishdisplayComponent', () => {
  let component: DishdisplayComponent;
  let fixture: ComponentFixture<DishdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
