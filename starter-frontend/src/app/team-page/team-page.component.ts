import { Component, inject, OnInit, signal } from '@angular/core';
import type { Team } from '../../types';
import { NgOptimizedImage } from '@angular/common';
import { VoteTeamComponent } from '../vote-team/vote-team.component';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [NgOptimizedImage, VoteTeamComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css',
})
export class TeamPageComponent implements OnInit {
  team = signal<Team | undefined>(undefined);
  teamService = inject(TeamService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const teamName = this.route.snapshot.paramMap.get('name') ?? '';

    this.teamService.getTeamByName(teamName).subscribe((team: Team) => {
      this.team.set(team);
    });
  }
}
