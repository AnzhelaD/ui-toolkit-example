import { TestBed } from '@angular/core/testing';
import { UIButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

describe('UIButtonComponent (Vitest + TestBed)', () => {
  let fixture: any;
  let component: UIButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UIButtonComponent);
    component = fixture.componentInstance;
  });

  it('should render with label', () => {
    component.label = 'Save';
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    expect(btn).toBeTruthy();
    expect(btn.nativeElement.textContent).toContain('Save');
  });

  it('should emit click event when enabled', () => {
    component.label = 'Click me';
    const emitSpy = vi.fn();
    component.buttonClick.subscribe(emitSpy);

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    btn.triggerEventHandler('click', new MouseEvent('click'));

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should NOT emit click when disabled', () => {
    component.label = 'Click me';
    component.disabled = true;
    const emitSpy = vi.fn();
    component.buttonClick.subscribe(emitSpy);

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    btn.triggerEventHandler('click', new MouseEvent('click'));

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should NOT emit click when loading', () => {
    component.label = 'Click me';
    component.loading = true;
    const emitSpy = vi.fn();
    component.buttonClick.subscribe(emitSpy);

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    btn.triggerEventHandler('click', new MouseEvent('click'));

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should emit on Enter key', () => {
    component.label = 'Test';
    const emitSpy = vi.fn();
    component.buttonClick.subscribe(emitSpy);

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    btn.triggerEventHandler('keydown', { key: 'Enter', preventDefault: () => {} });

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit on Enter when loading', () => {
    component.label = 'Test';
    component.loading = true;
    const emitSpy = vi.fn();
    component.buttonClick.subscribe(emitSpy);

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    btn.triggerEventHandler('keydown', { key: 'Enter', preventDefault: () => {} });

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should render as <a> when as="link"', () => {
    component.as = 'link';
    component.href = 'https://google.com';
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('a.ui-btn'));
    expect(link).toBeTruthy();
    expect(link.nativeElement.getAttribute('href')).toBe('https://google.com');
  });

  it('should disable <button> when disabled=true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button.ui-btn'));
    if (btn) {
      expect(btn.nativeElement.disabled).toBe(true);
    }
  });

  it('should show spinner when loading', () => {
    component.loading = true;
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('.spinner'));
    expect(spinner).toBeTruthy();
  });

  it('should render icon in correct position', () => {
    component.icon = 'fa-test';
    component.iconPosition = 'left';
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('.icon'));
    expect(icon).toBeTruthy();
  });

  it('should set data-theme correctly', () => {
    component.theme = 'dark';
    fixture.detectChanges();

    const host = fixture.debugElement.nativeElement;
    expect(host.getAttribute('data-theme')).toBe('dark');
  });

  it('should apply variant classes', () => {
    component.variant = 'secondary';
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    expect(btn.nativeElement.classList).toContain('secondary');
  });

  it('should apply size classes', () => {
    component.size = 'large';
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.ui-btn'));
    expect(btn.nativeElement.classList).toContain('lg');
  });
});
