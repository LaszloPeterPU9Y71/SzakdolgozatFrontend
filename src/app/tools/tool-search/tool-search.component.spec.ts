import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSearchComponent } from './tool-search.component';

describe('ToolSearchComponent', () => {
  let component: ToolSearchComponent;
  let fixture: ComponentFixture<ToolSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolSearchComponent]
    });
    fixture = TestBed.createComponent(ToolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
