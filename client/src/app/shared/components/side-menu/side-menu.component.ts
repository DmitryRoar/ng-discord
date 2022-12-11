import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core'

import {ServerService} from '../../../server/shared/services/server.service'
import {RefDirective} from '../../directives/ref.directive'
import {CreateServerComponent} from '../create-server/create-server.component'

import {IServer} from '../../../server/shared/interfaces/server.interface'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @ViewChild(RefDirective) refDir: RefDirective

  servers: IServer[]
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
    const modalFactory = this.resolver.resolveComponentFactory(
      CreateServerComponent
    )
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)
    component.instance.close.subscribe(() => {
      this.openModal = false
      this.refDir.containerRef.clear()
    })
  }
}
