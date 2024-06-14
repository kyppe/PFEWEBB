import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeTransactionComponent } from './edit-type-transaction.component';

describe('EditTypeTransactionComponent', () => {
  let component: EditTypeTransactionComponent;
  let fixture: ComponentFixture<EditTypeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
