import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapProductComponent } from './map-product.component';

describe('MapProductComponent', () => {
  let component: MapProductComponent;
  let fixture: ComponentFixture<MapProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
