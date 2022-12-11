import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {ImagesModule} from './images/images.module'
import {TextareaModule} from './textarea/textarea.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, ImagesModule, TextareaModule],
  exports: [TextareaModule, ImagesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
