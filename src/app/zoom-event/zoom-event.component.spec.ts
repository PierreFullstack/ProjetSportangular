import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomEventComponent } from './zoom-event.component';

describe('ZoomEventComponent', () => {
  let component: ZoomEventComponent;
  let fixture: ComponentFixture<ZoomEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
