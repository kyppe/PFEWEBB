import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterClientsComponent } from './affecter-clients.component';

describe('AffecterClientsComponent', () => {
  let component: AffecterClientsComponent;
  let fixture: ComponentFixture<AffecterClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
