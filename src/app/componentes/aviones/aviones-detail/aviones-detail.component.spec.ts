import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionesDetailComponent } from './aviones-detail.component';

describe('AvionesDetailComponent', () => {
  let component: AvionesDetailComponent;
  let fixture: ComponentFixture<AvionesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvionesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
