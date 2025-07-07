import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTeamComponent } from './vote-team.component';

describe('VoteTeamComponent', () => {
  let component: VoteTeamComponent;
  let fixture: ComponentFixture<VoteTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
