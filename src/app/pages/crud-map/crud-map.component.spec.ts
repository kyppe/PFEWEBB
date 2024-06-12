import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMapComponent } from './crud-map.component';

describe('CrudMapComponent', () => {
  let component: CrudMapComponent;
  let fixture: ComponentFixture<CrudMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
