import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCardsComponent } from './material-cards.component';

describe('MaterialCardsComponent', () => {
  let component: MaterialCardsComponent;
  let fixture: ComponentFixture<MaterialCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
