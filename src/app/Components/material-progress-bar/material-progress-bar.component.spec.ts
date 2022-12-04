import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProgressBarComponent } from './material-progress-bar.component';

describe('MaterialProgressBarComponent', () => {
  let component: MaterialProgressBarComponent;
  let fixture: ComponentFixture<MaterialProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
