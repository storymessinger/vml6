import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEquipComponent } from './about-equip.component';

describe('AboutEquipComponent', () => {
  let component: AboutEquipComponent;
  let fixture: ComponentFixture<AboutEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
