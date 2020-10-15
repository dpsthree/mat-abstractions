import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDragListComponent } from './card-drag-list.component';

describe('CardDragListComponent', () => {
  let component: CardDragListComponent;
  let fixture: ComponentFixture<CardDragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDragListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
