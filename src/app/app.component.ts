import {Component, ElementRef, ViewChild} from '@angular/core';
import {SADHANA} from './models/sadhana.1.db';
import {TaskSequence} from './models/task.sequence.model';
import {MatStepper} from '@angular/material/stepper';

const FREQUENCY = 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepper') private stepper: MatStepper;
  @ViewChild('tempoElement', {static: false}) private tempoElementRef: ElementRef;
  sadhana = SADHANA;
  sequenceIndex = 0;
  tempo;
  countDownTimer;
  countDownNumber = 180;
  countDownLimit = 180;

  private static formatTimePart(value: number): string {
    return (value >= 10 ? '' : '0') + value;
  }

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
    return Math.round((stepIndex + 1) / this.sequence.tasks.length * 100);
  }

  toggleTempo() {
    if (this.tempo) {
      clearInterval(this.tempo);
      this.tempo = null;
    } else {
      this.tempo = setInterval(() => {
        this.beep();
      }, FREQUENCY);
    }
  }

  toggleCountDown(limit = 180) {
    this.countDownLimit = limit;
    this.countDownNumber = this.countDownLimit;
    if (this.countDownTimer) {
      clearInterval(this.countDownTimer);
      this.countDownTimer = null;
    } else {
      this.countDownTimer = setInterval(() => {
        this.countDownNumber--;
        if (!this.countDownNumber) {
          this.toggleCountDown();
          this.beep();
        }
      }, FREQUENCY);
    }
  }

  getFormattedCountDown(limit: number): string {
    const clock = this.countDownTimer ? this.countDownNumber : limit;
    const mins = Math.floor(clock / 60);
    const secs = clock % 60;
    return AppComponent.formatTimePart(mins) + ':' + AppComponent.formatTimePart(secs);
  }

  private beep() {
    (this.tempoElementRef.nativeElement as HTMLAudioElement).play();
  }
}
