import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFramerComponent } from './app-framer.component';

describe('AppFramerComponent', () => {
  let component: AppFramerComponent;
  let fixture: ComponentFixture<AppFramerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFramerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFramerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
