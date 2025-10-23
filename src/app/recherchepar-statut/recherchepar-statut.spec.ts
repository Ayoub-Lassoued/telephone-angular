import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparStatut } from './recherchepar-statut';

describe('RechercheparStatut', () => {
  let component: RechercheparStatut;
  let fixture: ComponentFixture<RechercheparStatut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheparStatut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheparStatut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
