import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningCuctomerComponent } from './returning-cuctomer.component';

describe('ReturningCuctomerComponent', () => {
  let component: ReturningCuctomerComponent;
  let fixture: ComponentFixture<ReturningCuctomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturningCuctomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturningCuctomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
