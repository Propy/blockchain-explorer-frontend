import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRegistryHashComponent } from './document-registry-hash.component';

describe('DocumentRegistryHashComponent', () => {
  let component: DocumentRegistryHashComponent;
  let fixture: ComponentFixture<DocumentRegistryHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRegistryHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRegistryHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
