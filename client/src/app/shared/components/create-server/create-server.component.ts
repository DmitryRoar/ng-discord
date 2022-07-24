import {Component, EventEmitter, OnInit, Output} from '@angular/core'

import {modalAnimations} from '../../animations/modal.animation'

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss'],
  animations: [modalAnimations]
})
export class CreateServerComponent implements OnInit {
  @Output() close = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit()
  }
}
