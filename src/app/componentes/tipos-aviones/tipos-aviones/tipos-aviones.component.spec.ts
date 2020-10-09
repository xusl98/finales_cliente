import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAvionesComponent } from './tipos-aviones.component';

describe('TiposAvionesComponent', () => {
  let component: TiposAvionesComponent;
  let fixture: ComponentFixture<TiposAvionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAvionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
