import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryDocumentComponent } from './registry-document.component';

describe('RegistryDocumentComponent', () => {
  let component: RegistryDocumentComponent;
  let fixture: ComponentFixture<RegistryDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
