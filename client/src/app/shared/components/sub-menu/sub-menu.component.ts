import {Component, OnInit} from '@angular/core'

import {DirectService} from '../../services/direct.service'

import {IDirect} from '../../interfaces/direct.interface'
import {IMode} from '../../interfaces/mode.interface'
import {ModeService} from '../../services/mode.service'

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  directs: IDirect[]
  modes: IMode[]

  constructor(
    private readonly directService: DirectService,
    private readonly modeService: ModeService
  ) {}

  ngOnInit(): void {
    this.directs = this.directService.getAll()
    this.modes = this.modeService.getAll()
  }
}
