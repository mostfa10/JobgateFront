import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureentrepriseComponent } from './candidatureentreprise.component';

describe('CandidatureentrepriseComponent', () => {
  let component: CandidatureentrepriseComponent;
  let fixture: ComponentFixture<CandidatureentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
