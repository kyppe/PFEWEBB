import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageProductComponent } from './add-image-product.component';

describe('AddImageProductComponent', () => {
  let component: AddImageProductComponent;
  let fixture: ComponentFixture<AddImageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImageProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
