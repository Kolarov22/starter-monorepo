import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formation-picker.component.html',
  styleUrl: './formation-picker.component.css',
})
export class FormationPickerComponent {
  currentFormation = signal('4-4-2');
  formations = signal(['4-4-2', '4-3-3', '4-2-4']);
}
