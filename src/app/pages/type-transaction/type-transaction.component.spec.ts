import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTransactionComponent } from './type-transaction.component';

describe('TypeTransactionComponent', () => {
  let component: TypeTransactionComponent;
  let fixture: ComponentFixture<TypeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
