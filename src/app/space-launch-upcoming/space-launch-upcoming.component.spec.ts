import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchUpcomingComponent } from './space-launch-upcoming.component';

describe('SpaceLaunchUpcomingComponent', () => {
  let component: SpaceLaunchUpcomingComponent;
  let fixture: ComponentFixture<SpaceLaunchUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceLaunchUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLaunchUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
