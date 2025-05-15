import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmBarDeRechercheComponent } from './film-bar-de-recherche.component';

describe('FilmBarDeRechercheComponent', () => {
  let component: FilmBarDeRechercheComponent;
  let fixture: ComponentFixture<FilmBarDeRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmBarDeRechercheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmBarDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
