import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTransactionComponent } from './map-transaction.component';

describe('MapTransactionComponent', () => {
  let component: MapTransactionComponent;
  let fixture: ComponentFixture<MapTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
