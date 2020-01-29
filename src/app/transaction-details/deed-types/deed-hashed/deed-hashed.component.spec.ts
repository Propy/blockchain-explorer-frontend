import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedHashedComponent } from './deed-hashed.component';

describe('DeedHashedComponent', () => {
  let component: DeedHashedComponent;
  let fixture: ComponentFixture<DeedHashedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedHashedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedHashedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
