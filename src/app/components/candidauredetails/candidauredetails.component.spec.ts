import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidauredetailsComponent } from './candidauredetails.component';

describe('CandidauredetailsComponent', () => {
  let component: CandidauredetailsComponent;
  let fixture: ComponentFixture<CandidauredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidauredetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidauredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
