import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersByLevelComponent } from './players-by-level.component';

describe('PlayersByLevelComponent', () => {
  let component: PlayersByLevelComponent;
  let fixture: ComponentFixture<PlayersByLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersByLevelComponent]
    });
    fixture = TestBed.createComponent(PlayersByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
