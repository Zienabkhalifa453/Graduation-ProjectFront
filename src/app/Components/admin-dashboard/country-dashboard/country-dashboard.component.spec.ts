import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDashboardComponent } from './country-dashboard.component';

describe('CountryDashboardComponent', () => {
  let component: CountryDashboardComponent;
  let fixture: ComponentFixture<CountryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
