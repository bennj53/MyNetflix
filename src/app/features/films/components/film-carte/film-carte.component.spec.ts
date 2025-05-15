import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCarteComponent } from './film-carte.component';

describe('FilmCarteComponent', () => {
  let component: FilmCarteComponent;
  let fixture: ComponentFixture<FilmCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
