import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotfoundDetailsComponent } from './error-notfound-details.component';

describe('ErrorNotfoundDetailsComponent', () => {
  let component: ErrorNotfoundDetailsComponent;
  let fixture: ComponentFixture<ErrorNotfoundDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNotfoundDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotfoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
