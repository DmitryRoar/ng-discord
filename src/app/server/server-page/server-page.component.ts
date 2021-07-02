import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.scss']
})
export class ServerPageComponent implements OnInit {
  name: string

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params.name
    })
  }

}
