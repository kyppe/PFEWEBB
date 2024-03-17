import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchProfileCategorieComponent } from './add-match-profile-categorie.component';

describe('AddMatchProfileCategorieComponent', () => {
  let component: AddMatchProfileCategorieComponent;
  let fixture: ComponentFixture<AddMatchProfileCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatchProfileCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMatchProfileCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
