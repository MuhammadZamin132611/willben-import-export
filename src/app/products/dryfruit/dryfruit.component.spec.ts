import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryfruitComponent } from './dryfruit.component';

describe('DryfruitComponent', () => {
  let component: DryfruitComponent;
  let fixture: ComponentFixture<DryfruitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryfruitComponent]
    });
    fixture = TestBed.createComponent(DryfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
