import {Component, OnInit} from '@angular/core'

import {DirectService} from '../shared/services/direct.service'

import {IGetAll} from '../shared/interfaces/direct.interface'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  directs: IGetAll[]

  constructor(
    private readonly directService: DirectService
  ) {
  }

  ngOnInit(): void {
    this.directs = this.directService.getAll()
  }
}
