import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadtrackerComponent } from './leadtracker.component';

describe('LeadtrackerComponent', () => {
  let component: LeadtrackerComponent;
  let fixture: ComponentFixture<LeadtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadtrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
