import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalVsInternationalComponent } from './national-vs-international.component';

describe('NationalVsInternationalComponent', () => {
  let component: NationalVsInternationalComponent;
  let fixture: ComponentFixture<NationalVsInternationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalVsInternationalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalVsInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
