import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproComponent } from './repro.component';

describe('ReproComponent', () => {
  let component: ReproComponent;
  let fixture: ComponentFixture<ReproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
