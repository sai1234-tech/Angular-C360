import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerowComponent } from './servicerow.component';

describe('ServicerowComponent', () => {
  let component: ServicerowComponent;
  let fixture: ComponentFixture<ServicerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
