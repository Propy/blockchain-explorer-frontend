import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPlatformDeedComponent } from './transaction-platform-deed.component';

describe('TransactionPlatformDeedComponent', () => {
  let component: TransactionPlatformDeedComponent;
  let fixture: ComponentFixture<TransactionPlatformDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionPlatformDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPlatformDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
