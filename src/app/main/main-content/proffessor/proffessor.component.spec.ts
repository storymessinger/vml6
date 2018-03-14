import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffessorComponent } from './proffessor.component';

describe('ProffessorComponent', () => {
  let component: ProffessorComponent;
  let fixture: ComponentFixture<ProffessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
