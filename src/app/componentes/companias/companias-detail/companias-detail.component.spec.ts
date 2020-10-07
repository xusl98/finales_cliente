import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasDetailComponent } from './companias-detail.component';

describe('CompaniasDetailComponent', () => {
  let component: CompaniasDetailComponent;
  let fixture: ComponentFixture<CompaniasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
