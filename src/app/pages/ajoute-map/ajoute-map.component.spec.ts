import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteMapComponent } from './ajoute-map.component';

describe('AjouteMapComponent', () => {
  let component: AjouteMapComponent;
  let fixture: ComponentFixture<AjouteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
