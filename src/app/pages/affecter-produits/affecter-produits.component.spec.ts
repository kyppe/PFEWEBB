import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterProduitsComponent } from './affecter-produits.component';

describe('AffecterProduitsComponent', () => {
  let component: AffecterProduitsComponent;
  let fixture: ComponentFixture<AffecterProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
