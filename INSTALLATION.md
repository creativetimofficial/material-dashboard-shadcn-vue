# Material Dashboard Shadcn Vue by Creative Tim - Installation Guide

## Overview

This is a modern CRM (Customer Relationship Management) template built with Vue 3, Vite, and shadcn-vue components. It features a clean, minimalistic design perfect for developers to customize for their specific needs.

## Features

- **7 Complete Pages**:
  - Dashboard - Overview with key metrics and activity
  - Contacts - Contact management with search
  - Companies - Company directory and details
  - Deals/Pipeline - Kanban-style deal tracking
  - Tasks - Task management with status tracking
  - Reports - Analytics and performance metrics
  - Settings - User preferences and configuration

- **Modern Tech Stack**:
  - Vue 3 with Composition API
  - TypeScript for type safety
  - Vite for fast development
  - shadcn-vue components
  - Tailwind CSS for styling
  - Vue Router for navigation
  - Chart.js with vue-chartjs for interactive charts

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.19+ or 22.12+ (required for Vite)
- npm or yarn package manager

## Installation Steps

### 1. Clone or Download the Template

```bash
# If using git
git clone https://github.com/creativetimofficial/material-dashboard-shadcn-vue.git
cd vue-crm-template

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Vue 3 and Vue Router
- Vite build tool
- TypeScript
- Tailwind CSS and PostCSS
- shadcn-vue components (radix-vue, lucide-vue-next)
- Chart.js and vue-chartjs for data visualization
- Utility libraries (clsx, tailwind-merge)

### 3. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
vue-crm-template/
├── src/
│   ├── assets/          # CSS and static assets
│   │   └── index.css    # Tailwind CSS and global styles
│   ├── components/      # Reusable components
│   │   └── ui/          # shadcn-vue UI components
│   │       ├── Button.vue
│   │       ├── Card.vue
│   │       ├── CardHeader.vue
│   │       ├── CardTitle.vue
│   │       └── CardContent.vue
│   ├── layouts/         # Layout components
│   │   └── MainLayout.vue  # Main app layout with sidebar
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # Helper functions (cn for classnames)
│   ├── router/          # Vue Router configuration
│   │   └── index.ts     # Route definitions
│   ├── views/           # Page components
│   │   ├── Dashboard.vue
│   │   ├── Contacts.vue
│   │   ├── Companies.vue
│   │   ├── Deals.vue
│   │   ├── Tasks.vue
│   │   ├── Reports.vue
│   │   └── Settings.vue
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── vite-env.d.ts    # TypeScript declarations
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Customization Guide

### Adding New Pages

1. Create a new Vue component in `src/views/`:
```vue
<script setup lang="ts">
// Your component logic
</script>

<template>
  <div>Your page content</div>
</template>
```

2. Add the route in `src/router/index.ts`:
```typescript
{
  path: 'your-page',
  name: 'YourPage',
  component: () => import('@/views/YourPage.vue')
}
```

3. Add navigation item in `src/layouts/MainLayout.vue`:
```typescript
const navigation = [
  // ... existing items
  { name: 'Your Page', path: '/your-page', icon: YourIcon }
]
```

### Customizing Colors

The template uses Vue.js green as the primary color theme. Edit `src/assets/index.css` to change the color scheme:
```css
:root {
  --primary: 153 47% 49%;  /* Vue.js green (#42b883) */
  --ring: 153 47% 49%;     /* Focus ring color */
  /* ... other color variables */
}
```

### Adding New Components

Create components in `src/components/` and import them where needed:
```vue
<script setup lang="ts">
import YourComponent from '@/components/YourComponent.vue'
</script>
```

### Styling Guidelines

This template uses Tailwind CSS utility classes for styling:
- Use predefined color classes: `text-primary`, `bg-card`, etc.
- Use spacing utilities: `p-4`, `m-2`, `gap-4`
- Use responsive prefixes: `md:grid-cols-2`, `lg:grid-cols-4`

The `cn()` utility function (from `@/lib/utils.ts`) combines Tailwind classes:
```typescript
import { cn } from '@/lib/utils'

const className = cn('base-class', 'additional-class', props.class)
```

## Component Library

### UI Components

This template includes basic shadcn-vue components:

**Button**
```vue
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
```

**Card**
```vue
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Adding More shadcn-vue Components

To add more components from shadcn-vue:

1. Create the component file in `src/components/ui/`
2. Follow the shadcn-vue documentation for implementation
3. Import and use in your pages

## Configuration

### Vite Configuration

Edit `vite.config.ts` to customize:
- Server port (default: 5000)
- Build output directory
- Path aliases
- Plugins

### TypeScript Configuration

Edit `tsconfig.json` for TypeScript settings:
- Compiler options
- Path mappings
- Include/exclude patterns

## Development Tips

1. **Hot Module Replacement**: Vite provides instant HMR. Changes appear immediately.

2. **TypeScript**: The template uses TypeScript for type safety. Define types for your data:
```typescript
interface Contact {
  id: string
  name: string
  email: string
}
```

3. **Vue Composition API**: Use the `<script setup>` syntax for cleaner code:
```vue
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
```

4. **Responsive Design**: Test on different screen sizes using browser dev tools.

## Integrating with Backend

To connect this template to a backend API:

1. Install axios or fetch wrapper:
```bash
npm install axios
```

2. Create API service files in `src/api/`:
```typescript
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api.com'
})

export const getContacts = () => api.get('/contacts')
export const createContact = (data) => api.post('/contacts', data)
```

3. Use in components:
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getContacts } from '@/api/contacts'

const contacts = ref([])

onMounted(async () => {
  const response = await getContacts()
  contacts.value = response.data
})
</script>
```

## State Management

For larger applications, consider adding state management:

```bash
npm install pinia
```

Create stores in `src/stores/` and use throughout your app.

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

**Netlify / Vercel**
- Connect your git repository
- Build command: `npm run build`
- Publish directory: `dist`

**Static Hosting**
- Upload contents of `dist` folder to your server
- Ensure proper routing configuration for SPA

## Troubleshooting

**Port already in use**
- Change port in `vite.config.ts`
- Or kill the process using port 5000

**TypeScript errors**
- Run `npm run build` to see all errors
- Check `tsconfig.json` configuration

**Styling issues**
- Verify Tailwind CSS is properly configured
- Check PostCSS configuration
- Ensure `index.css` is imported in `main.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects.

## Support

For issues and questions:
- Check the documentation
- Review Vue 3 and Vite documentation
- Check shadcn-vue component documentation

## Next Steps

1. Customize the design to match your brand
2. Add authentication
3. Connect to your backend API
4. Add state management (Pinia)
5. Implement form validation
6. Add loading states and error handling
7. Set up testing (Vitest)
8. Configure CI/CD pipeline

Happy coding! 🚀
