import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByCategoryComponent } from './customers-by-category.component';

describe('CustomersByCategoryComponent', () => {
  let component: CustomersByCategoryComponent;
  let fixture: ComponentFixture<CustomersByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
