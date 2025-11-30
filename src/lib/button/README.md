# UI Toolkit - Button Component

A reusable, accessible, and fully customizable Angular button component designed for engineers without a UI/UX background.

---

## Overview

`UIButtonComponent` provides a consistent and flexible button solution:

- Supports multiple visual variants (`primary`, `secondary`, `tertiary`)
- Supports multiple sizes (`small`, `medium`, `large`)
- Handles all interaction states (`default`, `disabled`, `loading`)
- Can be used as a `<button>` or a `<a>` link
- Fully accessible with keyboard navigation and ARIA roles
- Supports icons on the left or right, via CSS class or Angular Template/component

---

## API

### Inputs

| Input          | Type                                     | Default     | Description                              |
| -------------- | ---------------------------------------- | ----------- | ---------------------------------------- |
| `label`        | `string`                                 | —           | Button text                              |
| `variant`      | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style                             |
| `size`         | `'small' \| 'medium' \| 'large'`         | `'medium'`  | Button size                              |
| `disabled`     | `boolean`                                | `false`     | Disable the button                       |
| `loading`      | `boolean`                                | `false`     | Show a loading spinner                   |
| `href`         | `string`                                 | —           | Use the button as a link                 |
| `icon`         | `string \| TemplateRef<any>`             | —           | Icon class or Angular template/component |
| `iconPosition` | `'left' \| 'right'`                      | `'left'`    | Position of the icon                     |
| `theme`        | `'light' \| 'dark'`                      | `'light'`   | Button theme                             |

### Outputs

| Output        | Type                          | Description                             |
| ------------- | ----------------------------- | --------------------------------------- |
| `buttonClick` | `MouseEvent \| KeyboardEvent` | Emits on click or Enter/Space key press |

---

## Usage Examples

### Basic usage

```html
<ui-button label="Save"></ui-button>
```
