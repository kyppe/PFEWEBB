import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeComponent } from './detail-commande.component';

describe('DetailCommandeComponent', () => {
  let component: DetailCommandeComponent;
  let fixture: ComponentFixture<DetailCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
