import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAvionesDetailComponent } from './tipos-aviones-detail.component';

describe('TiposAvionesDetailComponent', () => {
  let component: TiposAvionesDetailComponent;
  let fixture: ComponentFixture<TiposAvionesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAvionesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAvionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
