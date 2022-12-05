import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInjectionDialogComponent } from './data-injection-dialog.component';

describe('DataInjectionDialogComponent', () => {
  let component: DataInjectionDialogComponent;
  let fixture: ComponentFixture<DataInjectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInjectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInjectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
