import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledDialogComponent } from './styled-dialog.component';

describe('StyledDialogComponent', () => {
  let component: StyledDialogComponent;
  let fixture: ComponentFixture<StyledDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
