import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDemosComponent } from './layout-demos.component';

describe('LayoutDemosComponent', () => {
  let component: LayoutDemosComponent;
  let fixture: ComponentFixture<LayoutDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
