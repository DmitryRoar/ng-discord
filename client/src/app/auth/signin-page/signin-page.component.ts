import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form)
  }
}
