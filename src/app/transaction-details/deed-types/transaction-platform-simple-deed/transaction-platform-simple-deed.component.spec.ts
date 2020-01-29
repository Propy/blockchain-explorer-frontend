import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPlatformSimpleDeedComponent } from './transaction-platform-simple-deed.component';

describe('TransactionPlatformDeedSimpleComponent', () => {
  let component: TransactionPlatformSimpleDeedComponent;
  let fixture: ComponentFixture<TransactionPlatformSimpleDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPlatformSimpleDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPlatformSimpleDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
