import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatureComponent } from './condidature.component';

describe('CondidatureComponent', () => {
  let component: CondidatureComponent;
  let fixture: ComponentFixture<CondidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
