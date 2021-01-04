import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDemosComponent } from './card-demos.component';

describe('CardDemosComponent', () => {
  let component: CardDemosComponent;
  let fixture: ComponentFixture<CardDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
