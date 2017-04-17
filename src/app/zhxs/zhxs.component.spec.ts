import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhxsComponent } from './zhxs.component';

describe('ZhxsComponent', () => {
  let component: ZhxsComponent;
  let fixture: ComponentFixture<ZhxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
