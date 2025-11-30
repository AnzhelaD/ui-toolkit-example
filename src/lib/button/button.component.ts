import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
  TemplateRef,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import type {
  UIButtonElement,
  UIButtonIconPosition,
  UIButtonSize,
  UIButtonTheme,
  UIButtonVariant,
  UIIcon,
} from './button.types';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, NgIf],
})
export class UIButtonComponent {
  @Input() as: UIButtonElement = 'button';

  get isButton(): boolean {
    return this.as === 'button';
  }

  @Input() label: string = '';
  @Input() variant: UIButtonVariant = 'primary';
  @Input() size: UIButtonSize = 'medium';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() href?: string;
  @Input() icon?: UIIcon;
  @Input() iconPosition: UIButtonIconPosition = 'left';
  @Input() theme: UIButtonTheme = 'light';
  @HostBinding('attr.data-theme') get hostTheme() {
    return this.theme;
  }
  @Output() buttonClick = new EventEmitter<MouseEvent | KeyboardEvent>();

  onClick(event: MouseEvent | KeyboardEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    this.buttonClick.emit(event);
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.buttonClick.emit(event);
    }
  }

  isTemplate(value: unknown): value is TemplateRef<unknown> {
    return value instanceof TemplateRef;
  }
}
