import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsesComponent } from './pulses.component';

describe('PulsesComponent', () => {
  let component: PulsesComponent;
  let fixture: ComponentFixture<PulsesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PulsesComponent]
    });
    fixture = TestBed.createComponent(PulsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
