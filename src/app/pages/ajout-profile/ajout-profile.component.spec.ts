import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProfileComponent } from './ajout-profile.component';

describe('AjoutProfileComponent', () => {
  let component: AjoutProfileComponent;
  let fixture: ComponentFixture<AjoutProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
