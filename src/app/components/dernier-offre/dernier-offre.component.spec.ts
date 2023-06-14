import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierOffreComponent } from './dernier-offre.component';

describe('DernierOffreComponent', () => {
  let component: DernierOffreComponent;
  let fixture: ComponentFixture<DernierOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernierOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DernierOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
