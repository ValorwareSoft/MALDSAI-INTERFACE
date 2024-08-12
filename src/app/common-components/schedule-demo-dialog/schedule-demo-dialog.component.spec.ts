import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDemoDialogComponent } from './schedule-demo-dialog.component';

describe('ScheduleDemoDialogComponent', () => {
  let component: ScheduleDemoDialogComponent;
  let fixture: ComponentFixture<ScheduleDemoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScheduleDemoDialogComponent]
    });
    fixture = TestBed.createComponent(ScheduleDemoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
