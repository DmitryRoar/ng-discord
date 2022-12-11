import {ChangeDetectionStrategy, Component, Input} from '@angular/core'

import {AvatarSizeEnum} from './avatar-size.enum'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src: string
  @Input() size: 'xs' | 'xss' | 's' | 'm'

  getSize() {
    if (this.size) {
      return AvatarSizeEnum[this.size]
    } else {
      return AvatarSizeEnum.s
    }
  }
}
