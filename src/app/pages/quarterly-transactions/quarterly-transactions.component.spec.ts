import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyTransactionsComponent } from './quarterly-transactions.component';

describe('QuarterlyTransactionsComponent', () => {
  let component: QuarterlyTransactionsComponent;
  let fixture: ComponentFixture<QuarterlyTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyTransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuarterlyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
