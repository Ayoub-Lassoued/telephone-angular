import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telephone } from './telephone';

describe('Telephone', () => {
  let component: Telephone;
  let fixture: ComponentFixture<Telephone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telephone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telephone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
