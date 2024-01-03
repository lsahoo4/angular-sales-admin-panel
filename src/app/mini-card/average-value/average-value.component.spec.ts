import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageValueComponent } from './average-value.component';

describe('AverageValueComponent', () => {
  let component: AverageValueComponent;
  let fixture: ComponentFixture<AverageValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AverageValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
