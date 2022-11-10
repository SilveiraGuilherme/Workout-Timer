import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @Input() exercises: Exercise[] = [];

  exercise: Exercise = {
    name: '',
    duration: 30,
    repetitions: 3,
    preparation: 15,
    rest: 30,
  };

  add() {
    this.exercises.push(this.exercise);
    this.exercise = { ...this.exercise, name: '' };
  }

  delete(i: number) {
    this.exercises.splice(i, 1);
  }
}
