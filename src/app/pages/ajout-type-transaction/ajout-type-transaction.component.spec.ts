import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypeTransactionComponent } from './ajout-type-transaction.component';

describe('AjoutTypeTransactionComponent', () => {
  let component: AjoutTypeTransactionComponent;
  let fixture: ComponentFixture<AjoutTypeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTypeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTypeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
