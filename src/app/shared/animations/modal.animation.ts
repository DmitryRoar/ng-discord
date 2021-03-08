import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations'

const timing = 205
const height = 100

export const modalAnimations: AnimationTriggerMetadata =
  trigger('modal', [
    transition(':enter', [
      style({
        height,
        transform: 'translate(-50%,-50%) scale(.2)'
      }),
      animate(timing, style({
        transform: '* scale(1)',
        height: '*'
      }))
    ]),
    transition(':leave', [
      style({
        transform: '* scale(1)',
        height: '*'
      }),
      animate(timing, style({
        height,
        transform: '* scale(0)'
      }))
    ])
  ])
