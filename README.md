# Brandora Landing Page

A responsive landing page for Brandora, a full-service creative and digital marketing agency based in Saudi Arabia. The site presents Brandora's services, story, vision, values, process, impact metrics, and contact details in both English and Arabic.

## Features

- Bilingual English and Arabic content with RTL layout support.
- Responsive layout for desktop, tablet, and mobile screens.
- Service sections for digital marketing, on-ground marketing, content creation, brand identity, AI solutions, and brand strategy.
- Brand story, vision, mission, values, showcase, process, and impact sections.
- Contact call-to-action with phone and social media links.
- Local brand assets plus external Unsplash imagery and Flaticon service icons.

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui-style component primitives

## Project Structure

```text
src/
  app/
    App.tsx                 Main landing page UI and content
    components/             Reusable UI components
  imports/                  Brand images, icons, GIFs, and profile assets
  styles/                   Global styles, Tailwind entry, theme, and fonts
guidelines/                 Project design guidelines
ATTRIBUTIONS.md             Third-party asset attributions
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

The production output is generated in the `dist/` directory.

## Notes

- The language preference is saved in `localStorage` under `brandora_lang`.
- Third-party image and icon credits are listed in `ATTRIBUTIONS.md`.
