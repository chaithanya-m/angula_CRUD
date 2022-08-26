import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StricComponent } from './stric.component';

describe('StricComponent', () => {
  let component: StricComponent;
  let fixture: ComponentFixture<StricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
