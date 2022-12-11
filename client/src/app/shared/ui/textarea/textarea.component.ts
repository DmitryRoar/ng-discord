import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'rg-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() placeholder = ''

  @ViewChild('textarea') textarea: ElementRef<HTMLTextAreaElement>
  @ViewChild('tooltips') tooltips: ElementRef<any>

  constructor(
    private r: Renderer2,
    private changeDetection: ChangeDetectorRef
  ) {}

  @HostListener('input') autoResize() {
    this.r.setStyle(this.textarea.nativeElement, 'height', 'auto')
    this.r.setStyle(
      this.textarea.nativeElement,
      'height',
      `${this.textarea.nativeElement.scrollHeight}px`
    )
  }
}
