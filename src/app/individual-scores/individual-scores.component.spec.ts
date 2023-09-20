import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualScoresComponent } from './individual-scores.component';

describe('IndividualScoresComponent', () => {
  let component: IndividualScoresComponent;
  let fixture: ComponentFixture<IndividualScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualScoresComponent]
    });
    fixture = TestBed.createComponent(IndividualScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
