import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPlatformDeedSimpleComponent } from './transaction-platform-deed-simple.component';

describe('TransactionPlatformDeedSimpleComponent', () => {
  let component: TransactionPlatformDeedSimpleComponent;
  let fixture: ComponentFixture<TransactionPlatformDeedSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPlatformDeedSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPlatformDeedSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
