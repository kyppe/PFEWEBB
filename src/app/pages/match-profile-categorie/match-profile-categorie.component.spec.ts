import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchProfileCategorieComponent } from './match-profile-categorie.component';

describe('MatchProfileCategorieComponent', () => {
  let component: MatchProfileCategorieComponent;
  let fixture: ComponentFixture<MatchProfileCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchProfileCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchProfileCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
