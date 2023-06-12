import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCondidatComponent } from './register-condidat.component';

describe('RegisterCondidatComponent', () => {
  let component: RegisterCondidatComponent;
  let fixture: ComponentFixture<RegisterCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCondidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
