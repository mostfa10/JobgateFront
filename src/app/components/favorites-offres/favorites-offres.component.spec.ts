import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesOffresComponent } from './favorites-offres.component';

describe('FavoritesOffresComponent', () => {
  let component: FavoritesOffresComponent;
  let fixture: ComponentFixture<FavoritesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
