import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMessageComponent } from './generic-message.component';

describe('GenericMessageComponent', () => {
  let component: GenericMessageComponent;
  let fixture: ComponentFixture<GenericMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericMessageComponent]
    });
    fixture = TestBed.createComponent(GenericMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
