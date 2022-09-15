import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLauchUpComingComponent } from './single-lauch-up-coming.component';

describe('SingleLauchUpComingComponent', () => {
  let component: SingleLauchUpComingComponent;
  let fixture: ComponentFixture<SingleLauchUpComingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLauchUpComingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLauchUpComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
