import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewModalPage } from './preview-modal.page';

describe('PreviewModalPage', () => {
  let component: PreviewModalPage;
  let fixture: ComponentFixture<PreviewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
