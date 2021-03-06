import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassIconComponent } from './class-icon.component';

describe('ClassIconComponent', () => {
  let component: ClassIconComponent;
  let fixture: ComponentFixture<ClassIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
