import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxrsComponent } from './cxrs.component';

describe('CxrsComponent', () => {
  let component: CxrsComponent;
  let fixture: ComponentFixture<CxrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
