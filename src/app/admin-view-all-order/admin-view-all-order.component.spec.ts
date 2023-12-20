import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllOrderComponent } from './admin-view-all-order.component';

describe('AdminViewAllOrderComponent', () => {
  let component: AdminViewAllOrderComponent;
  let fixture: ComponentFixture<AdminViewAllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewAllOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
