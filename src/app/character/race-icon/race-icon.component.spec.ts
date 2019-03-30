import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceIconComponent } from './race-icon.component';

describe('RaceIconComponent', () => {
  let component: RaceIconComponent;
  let fixture: ComponentFixture<RaceIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
