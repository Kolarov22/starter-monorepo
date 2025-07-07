import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import type { Team } from '../../types';

@Component({
  selector: 'app-team-block',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './team-block.component.html',
  styleUrl: './team-block.component.css',
})
export class TeamBlockComponent {
  team = input<Team>();
}
