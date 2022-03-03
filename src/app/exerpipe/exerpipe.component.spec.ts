import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerpipeComponent } from './exerpipe.component';

describe('ExerpipeComponent', () => {
  let component: ExerpipeComponent;
  let fixture: ComponentFixture<ExerpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
