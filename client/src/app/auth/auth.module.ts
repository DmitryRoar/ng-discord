import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component'

import {SigninPageComponent} from './signin-page/signin-page.component'

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'sign-in', component: SigninPageComponent},
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
    ],
  },
]

@NgModule({
  declarations: [AuthLayoutComponent, SigninPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AuthLayoutComponent],
})
export class AuthModule {}
