import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAdressComponent } from './map-adress.component';

describe('MapAdressComponent', () => {
  let component: MapAdressComponent;
  let fixture: ComponentFixture<MapAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
