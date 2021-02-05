import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveReportsComponent } from './live-reports.component';

describe('LiveReportsComponent', () => {
  let component: LiveReportsComponent;
  let fixture: ComponentFixture<LiveReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
