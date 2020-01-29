import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedRegistrationDeedComponent } from './deed-registration-deed.component';

describe('DeedRegistrationDeedComponent', () => {
  let component: DeedRegistrationDeedComponent;
  let fixture: ComponentFixture<DeedRegistrationDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeedRegistrationDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeedRegistrationDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
