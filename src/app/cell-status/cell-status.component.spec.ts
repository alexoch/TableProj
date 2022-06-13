import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStatusComponent } from './cell-status.component';
import {MissingDataPipe} from "../missing-data.pipe";

describe('CellStatusComponent', () => {
  let component: CellStatusComponent;
  let fixture: ComponentFixture<CellStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellStatusComponent,MissingDataPipe, ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(CellStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
