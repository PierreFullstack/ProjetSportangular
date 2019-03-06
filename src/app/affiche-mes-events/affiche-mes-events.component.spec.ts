import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMesEventsComponent } from './affiche-mes-events.component';

describe('AfficheMesEventsComponent', () => {
  let component: AfficheMesEventsComponent;
  let fixture: ComponentFixture<AfficheMesEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheMesEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheMesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
