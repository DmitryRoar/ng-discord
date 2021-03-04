import {Component, OnInit} from '@angular/core'

import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-public-server-page',
  templateUrl: './public-server-page.component.html',
  styleUrls: ['./public-server-page.component.scss']
})
export class PublicServerPageComponent implements OnInit {
  form: FormGroup

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      server: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.form.value.server)
  }
}
