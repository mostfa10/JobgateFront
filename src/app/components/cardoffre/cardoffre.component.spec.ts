import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoffreComponent } from './cardoffre.component';

describe('CardoffreComponent', () => {
  let component: CardoffreComponent;
  let fixture: ComponentFixture<CardoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
