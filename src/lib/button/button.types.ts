import type { TemplateRef } from '@angular/core';

export type UIButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type UIButtonSize = 'small' | 'medium' | 'large';
export type UIButtonElement = 'button' | 'link';
export type UIButtonIconPosition = 'left' | 'right';
export type UIButtonTheme = 'light' | 'dark';
export type UIIcon = string | TemplateRef<unknown>;
