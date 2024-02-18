import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommercialComponent } from './edit-commercial.component';

describe('EditCommercialComponent', () => {
  let component: EditCommercialComponent;
  let fixture: ComponentFixture<EditCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
