import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrepourentrepriseComponent } from './offrepourentreprise.component';

describe('OffrepourentrepriseComponent', () => {
  let component: OffrepourentrepriseComponent;
  let fixture: ComponentFixture<OffrepourentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrepourentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffrepourentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
