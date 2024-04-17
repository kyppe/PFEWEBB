import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClientComponent } from './map-client.component';

describe('MapClientComponent', () => {
  let component: MapClientComponent;
  let fixture: ComponentFixture<MapClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
