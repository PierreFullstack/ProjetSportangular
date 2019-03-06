import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheParticipationEventComponent } from './affiche-participation-event.component';

describe('AfficheParticipationEventComponent', () => {
  let component: AfficheParticipationEventComponent;
  let fixture: ComponentFixture<AfficheParticipationEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheParticipationEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheParticipationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
