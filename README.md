# Movie Explorer SPA

**Description:**  
This is a test application for working with the **UI Toolkit** library. The project demonstrates the use of Angular with modern development tools and containerization via Docker.

---

## Key Features

---

## Local Setup and Run

```bash
  npm install
```

```bash
   # run application in development mode
   npm run dev

```

```bash
   # check code with ESLint
   npm run lint
```

```bash
   # auto-fix ESLint errors
   npm run lint:fix
```

```bash
   # format code using Prettier
   npm run format
```

---

## Build and Run with Docker

### Build Docker image

```bash
   docker build -t task-spa .
```

### Run container manually

```bash
   docker run -d -p 8080:80 task-spa
```

- The application will be available at: [http://localhost:8080](http://localhost:8080)

---

## Running with Docker Compose

```bash
  # Run in interactive mode (with logs)
docker compose up

```

```bash
  # Run in detached mode (background)
docker compose up -d
```

> Make sure the networks and dependencies in your `docker-compose.yml` are configured correctly.  
> If using an external network, create it beforehand:

```bash
   docker network create task-spa
```

---

## Main Libraries

The library contains the `<ui-button>` component, which can be imported directly from `'ui-toolkit'` in your Angular projects.  
The library is built and stored in `dist/ui-toolkit` and also contains its own README with detailed documentation.

---

## How to Import

After installing or linking the library, import the component (or module) like this:

```ts
// Standalone component import
import { UIButtonComponent } from 'ui-toolkit';

// Or module import
import { UIButtonModule } from 'ui-toolkit';
```

Then use it in your Angular template:

```html
<ui-button label="Primary" variant="primary" (buttonClick)="onButtonClick($event)"></ui-button>
```

---

## Inputs

| Property       | Type                          | Default   | Description                                           |
|----------------|-------------------------------|-----------|-------------------------------------------------------|
| `label`        | string                        | ''        | Text displayed on the button.                        |
| `variant`      | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | Visual style of the button.                          |
| `size`         | 'small' \| 'medium' \| 'large' | 'medium' | Size of the button.                                  |
| `disabled`     | boolean                       | false     | Disables the button.                                 |
| `loading`      | boolean                       | false     | Shows loading spinner.                                |
| `href`         | string                        | —         | Renders the button as a link.                        |
| `icon`         | string \| TemplateRef<any>    | —         | Icon displayed on the button.                        |
| `iconPosition` | 'left' \| 'right'             | 'left'    | Position of the icon relative to the label.         |
| `theme`        | 'light' \| 'dark'             | 'light'   | Button theme.                                        |

---

## Outputs

| Event          | Type                         | Description                                           |
|----------------|------------------------------|-------------------------------------------------------|
| `buttonClick`  | MouseEvent \| KeyboardEvent  | Emitted when the button is clicked or Enter/Space key is pressed. |

---

## Methods

| Method         | Parameters                        | Description                                           |
|----------------|----------------------------------|-------------------------------------------------------|
| `onClick`      | `event: MouseEvent \| KeyboardEvent` | Handles mouse click. Emits `buttonClick` if button is not disabled or loading. |
| `onKeyDown`    | `event: KeyboardEvent`            | Handles Enter/Space key press. Emits `buttonClick` if button is not disabled or loading. |
| `isTemplate`   | `value: unknown`                  | Checks if the given value is an Angular `TemplateRef`. |

---

## Light Theme Examples

```html
<ui-button label="Primary" variant="primary" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Secondary" variant="secondary" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Tertiary" variant="tertiary" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Save" variant="primary" icon="pi pi-check" iconPosition="left" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Next" variant="secondary" icon="pi pi-arrow-right" iconPosition="right" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Loading..." variant="primary" [loading]="true" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Disabled" variant="tertiary" [disabled]="true" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button as="link" label="Go to Google" href="https://google.com" icon="pi pi-external-link" iconPosition="right" (buttonClick)="onButtonClick($event)"></ui-button>
```

---

## Dark Theme Examples

```html
<ui-button label="Primary" variant="primary" theme="dark" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Secondary" variant="secondary" theme="dark" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Tertiary" variant="tertiary" theme="dark" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Save" variant="primary" theme="dark" icon="pi pi-check" iconPosition="left" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Next" variant="secondary" theme="dark" icon="pi pi-arrow-right" iconPosition="right" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Loading..." variant="primary" theme="dark" [loading]="true" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button label="Disabled" variant="tertiary" theme="dark" [disabled]="true" (buttonClick)="onButtonClick($event)"></ui-button>
<ui-button as="link" label="Go to Google" theme="dark" href="https://google.com" icon="pi pi-external-link" iconPosition="right" (buttonClick)="onButtonClick($event)"></ui-button>
```

---

**Note:**  
For more detailed documentation, refer to the README inside the library itself (`dist/ui-toolkit/README.md`), which contains additional info on usage, theming, and customization.

---

This README is prepared for a quick start, understanding the project structure, main libraries, Docker/Compose usage, and production compression support.
