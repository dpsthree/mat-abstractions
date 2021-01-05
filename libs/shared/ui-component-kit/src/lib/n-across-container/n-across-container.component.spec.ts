import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAcrossContainerComponent } from './n-across-container.component';

describe('NAcrossContainerComponent', () => {
  let component: NAcrossContainerComponent;
  let fixture: ComponentFixture<NAcrossContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAcrossContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NAcrossContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
