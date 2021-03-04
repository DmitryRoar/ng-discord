import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core'

import {ServerService} from '../../services/server.service'
import {RefDirective} from '../../directives/ref.directive'
import {CreateServerComponent} from '../create-server/create-server.component'

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @ViewChild(RefDirective) refDir: RefDirective

  servers: object[]
  openModal = false

  constructor(
    private resolver: ComponentFactoryResolver,
    private readonly serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.servers = this.serverService.getAll()
  }

  createServer() {
    this.openModal = true
    const modalFactory = this.resolver.resolveComponentFactory(CreateServerComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.close.subscribe(() => {
      this.openModal = false
      this.refDir.containerRef.clear()
    })
  }
}
