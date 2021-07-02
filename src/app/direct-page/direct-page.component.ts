import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-direct-page',
  templateUrl: './direct-page.component.html',
  styleUrls: ['./direct-page.component.scss']
})
export class DirectPageComponent implements OnInit {
  id: string

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
    })
  }

}
