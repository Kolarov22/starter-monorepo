import { TeamService } from './../services/team.service';
import { Component, input, inject } from '@angular/core';

@Component({
  selector: 'app-vote-team',
  standalone: true,
  imports: [],
  templateUrl: './vote-team.component.html',
  styleUrl: './vote-team.component.css',
})
export class VoteTeamComponent {
  team = input<string>();
  TeamService = inject(TeamService);

  voteForTeam() {
    if (this.team() !== undefined) {
      this.TeamService.voteForTeam(this.team() as string).subscribe();
    }
  }
}
