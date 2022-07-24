import {ChangeDetectionStrategy, Component, Input} from '@angular/core'

import {IconSizeEnum} from './icon-size.enum'
import {IconNameType} from './icon-name.type'

@Component({
  selector: 'svg-icon',
  template: `
    <svg [attr.height]="getSize" [attr.width]="getSize" style="display: inline-block">
      <use attr.xlink:href="{{path}}/sprite.svg#{{icon}}"></use>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input() icon: IconNameType
  @Input() size: 'xxs' | 'xs' | 's' | 'm' | 'xl'

  path = '/assets/icon'

  constructor() {
  }

  get getSize() {
    if (this.size) {
      return IconSizeEnum[this.size]
    } else {
      return IconSizeEnum.s
    }
  }
}
