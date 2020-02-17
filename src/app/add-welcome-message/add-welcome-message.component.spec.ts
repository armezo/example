import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWelcomeMessageComponent } from './add-welcome-message.component';

describe('AddWelcomeMessageComponent', () => {
  let component: AddWelcomeMessageComponent;
  let fixture: ComponentFixture<AddWelcomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWelcomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
