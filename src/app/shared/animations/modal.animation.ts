import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations'

const timing = 240
const height = 200

export const modalAnimations: AnimationTriggerMetadata =
  trigger('modal', [
    transition(':enter', [
      style({
        height,
        transform: 'translate(-50%,-50%) scale(0)'
      }),
      animate(timing, style({
        height: '*',
        transform: '* scale(1)'
      }))
    ]),
    transition(':leave', [
      style({
        height: '*',
        transform: '* scale(1)'
      }),
      animate(timing, style({
        height,
        transform: '* scale(0)'
      }))
    ])
  ])
