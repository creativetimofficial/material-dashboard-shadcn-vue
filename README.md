# Material Dashboard Shadcn Vue by Creative Tim

## Overview
A modern, minimalistic CRM template built with Vue 3, Vite, TypeScript, and shadcn-vue components. This template is designed for developers to quickly start building CRM applications with a clean, professional interface.

## Project Information
- **Created**: October 1, 2025
- **Tech Stack**: Vue 3, Vite, TypeScript, shadcn-vue, Tailwind CSS
- **Purpose**: Developer-ready CRM template with 7 complete pages

## Pages
1. **Dashboard** - Overview with key metrics and recent activity
2. **Contacts** - Contact management with search functionality
3. **Companies** - Company directory with details
4. **Deals/Pipeline** - Kanban-style deal tracking
5. **Tasks** - Task management with status tracking
6. **Reports** - Analytics and performance metrics
7. **Settings** - User preferences and configuration

## Architecture
- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn-vue design system
- **Routing**: Vue Router with lazy-loaded routes
- **Type Safety**: TypeScript throughout
- **Charts**: Chart.js with vue-chartjs for interactive data visualization

## Project Structure
```
src/
├── assets/          # Global styles and Tailwind CSS
├── components/      # Reusable UI components (shadcn-vue)
├── layouts/         # Layout components (MainLayout with sidebar)
├── lib/             # Utility functions
├── router/          # Vue Router configuration
├── views/           # Page components (7 pages)
├── App.vue          # Root component
└── main.ts          # Application entry point
```

## Key Features
- Responsive sidebar navigation with icons
- Clean, minimalistic design with consistent spacing
- Card-based layouts for content organization
- Tailwind CSS utility classes for styling
- TypeScript for type safety
- Fast HMR (Hot Module Replacement) with Vite

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Customization
The template is designed to be easily customizable:
- Modify color scheme in `src/assets/index.css`
- Add new pages in `src/views/` and update router
- Create custom components in `src/components/`
- Extend with state management (Pinia) if needed

## Documentation
Complete installation and customization guide available in `INSTALLATION.md`

## Current State
✅ All 7 pages implemented and functional
✅ Sidebar navigation working
✅ Minimalistic design with shadcn-vue components
✅ Responsive layout
✅ TypeScript configuration
✅ Vite development server configured
✅ Installation documentation complete
