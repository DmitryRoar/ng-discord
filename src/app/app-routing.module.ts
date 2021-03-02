import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {ErrorPageComponent} from './error-page/error-page.component'
import {HomePageComponent} from './home-page/home-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomePageComponent}
    ]
  },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
