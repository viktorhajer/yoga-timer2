import { Component, ViewChild } from '@angular/core';
import { SADHANA } from './models/sadhana.1.db';
import { TaskSequence } from './models/task.sequence.model';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepper') private stepper: MatStepper;
  sadhana = SADHANA;
  sequenceIndex = 0;

  get sequence(): TaskSequence {
    return this.sadhana.sequences[this.sequenceIndex];
  }

  nextSequence() {
    if ((this.sequenceIndex + 1) !== this.sadhana.sequences.length) {
      this.sequenceIndex++;
      this.stepper.selectedIndex = 0;
    }
  }

  previousSequence() {
    if (this.sequenceIndex !== 0) {
      this.sequenceIndex--;
      this.stepper.selectedIndex = 0;
    }
  }

  getProgress(stepIndex = 0): number {
    return  Math.round((stepIndex + 1) / this.sequence.tasks.length * 100); 
  }
}
