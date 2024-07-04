import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSimpleFormComponent } from './js-simple-form.component';

describe('JsSimpleFormComponent', () => {
  let component: JsSimpleFormComponent;
  let fixture: ComponentFixture<JsSimpleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsSimpleFormComponent]
    });
    fixture = TestBed.createComponent(JsSimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
