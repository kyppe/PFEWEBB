import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommercialComponent } from './ajout-commercial.component';

describe('AjoutCommercialComponent', () => {
  let component: AjoutCommercialComponent;
  let fixture: ComponentFixture<AjoutCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
