import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appStepperScroll]'
})
export class StepperScroll implements OnChanges {

  @Input() appStepperScroll: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appStepperScroll) {
      setTimeout(() => {
        const label = document.querySelector(`#cdk-step-label-0-${changes.appStepperScroll.currentValue}`);
        if (label) {
          label.scrollIntoView({block: 'start', inline: 'start', behavior: 'smooth'});
        }
      }, 150);
    }
  }
}
