import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageListComponent } from './mortgage-list.component';

describe('MortgageListComponent', () => {
  let component: MortgageListComponent;
  let fixture: ComponentFixture<MortgageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MortgageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
