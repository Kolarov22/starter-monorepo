import { Component, inject, OnInit, signal } from '@angular/core';
import type { Team } from '../../types';
import { NgOptimizedImage } from '@angular/common';
import { VoteTeamComponent } from '../vote-team/vote-team.component';
import { FormationPickerComponent } from '../formation-picker/formation-picker.component';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    VoteTeamComponent,
    FormationPickerComponent,
    FormsModule,
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css',
})
export class TeamPageComponent implements OnInit {
  team = signal<Team | undefined>(undefined);
  teamService = inject(TeamService);
  route = inject(ActivatedRoute);
  currentFormation = signal('4-4-2');
  formations = signal(['4-4-2', '4-3-3', '4-2-4']);

  getMidfielders() {
    switch (this.currentFormation()) {
      case '4-4-2':
        return this.team()?.players?.slice(5, 9);
      case '4-3-3':
        return this.team()?.players?.slice(5, 8);
      case '4-2-4':
        return this.team()?.players?.slice(5, 7);
      default:
        return [];
    }
  }

  getForwards() {
    switch (this.currentFormation()) {
      case '4-4-2':
        return this.team()?.players?.slice(9);
      case '4-3-3':
        return this.team()?.players?.slice(8);
      case '4-2-4':
        return this.team()?.players?.slice(7);
      default:
        return [];
    }
  }

  logFormationChange(event: Event): void {
    console.log('Event:', (event.target as HTMLInputElement).value);
  }

  ngOnInit(): void {
    const teamName = this.route.snapshot.paramMap.get('name') ?? '';

    this.teamService.getTeamByName(teamName).subscribe((team: Team) => {
      this.team.set(team);
    });
  }
}
