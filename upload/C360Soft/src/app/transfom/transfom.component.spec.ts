import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfomComponent } from './transfom.component';

describe('TransfomComponent', () => {
  let component: TransfomComponent;
  let fixture: ComponentFixture<TransfomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
