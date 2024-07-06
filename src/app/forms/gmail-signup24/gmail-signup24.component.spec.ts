import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailSignup24Component } from './gmail-signup24.component';

describe('GmailSignup24Component', () => {
  let component: GmailSignup24Component;
  let fixture: ComponentFixture<GmailSignup24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmailSignup24Component]
    });
    fixture = TestBed.createComponent(GmailSignup24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
