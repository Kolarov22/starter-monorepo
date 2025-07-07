import { Component, inject, signal, OnInit } from '@angular/core';
import { TeamBlockComponent } from '../team-block/team-block.component';
import { TeamService } from '../services/team.service';
import type { Team } from '../../types';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [TeamBlockComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
})
export class TeamListComponent implements OnInit {
  teams = signal<Team[]>([]);
  teamService = inject(TeamService);

  ngOnInit() {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.teams.set(teams);
    });
  }
}
