import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations'

const timing = 300

export const modalAnimations: AnimationTriggerMetadata =
  trigger('modal', [
    transition(':enter', [
      style({opacity: 0}),
      animate(timing, style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate(timing, style({opacity: 0}))
    ])
  ])
