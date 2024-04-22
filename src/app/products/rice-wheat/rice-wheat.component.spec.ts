import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceWheatComponent } from './rice-wheat.component';

describe('RiceWheatComponent', () => {
  let component: RiceWheatComponent;
  let fixture: ComponentFixture<RiceWheatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceWheatComponent]
    });
    fixture = TestBed.createComponent(RiceWheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
