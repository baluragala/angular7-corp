import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReactiveComponent } from './new-reactive.component';

describe('NewReactiveComponent', () => {
  let component: NewReactiveComponent;
  let fixture: ComponentFixture<NewReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
