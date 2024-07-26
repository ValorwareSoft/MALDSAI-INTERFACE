import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSubDetailsComponent } from './service-sub-details.component';

describe('ServiceSubDetailsComponent', () => {
  let component: ServiceSubDetailsComponent;
  let fixture: ComponentFixture<ServiceSubDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceSubDetailsComponent]
    });
    fixture = TestBed.createComponent(ServiceSubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
