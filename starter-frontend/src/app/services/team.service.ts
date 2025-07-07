import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Team } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private endpoint = 'http://localhost:3000/teams';
  http = inject(HttpClient);

  constructor() {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.endpoint);
  }

  getTeamByName(name: string): Observable<Team> {
    return this.http.get<Team>(`${this.endpoint}/${name}`);
  }

  voteForTeam(name: string) {
    return this.http.post(`${this.endpoint}/${name}/vote`, {});
  }
}
