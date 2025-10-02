<script setup lang="ts">
</script>

<template>
  <div class="max-w-4xl">
    <h1 class="text-xl font-bold mb-2">Documentation</h1>
    <p class="text-muted-foreground mb-8">Installation and setup guide</p>

    <div class="prose prose-slate max-w-none space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4">Overview</h2>
        <p class="text-muted-foreground">
          This is a modern CRM (Customer Relationship Management) template built with Vue 3, Vite, and shadcn-vue components. 
          It features a clean, minimalistic design perfect for developers to customize for their specific needs.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Features</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">7 Complete Pages</h3>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Dashboard - Overview with key metrics and activity</li>
              <li>Contacts - Contact management with search</li>
              <li>Companies - Company directory and details</li>
              <li>Deals/Pipeline - Kanban-style deal tracking</li>
              <li>Tasks - Task management with status tracking</li>
              <li>Reports - Analytics and performance metrics with Chart.js</li>
              <li>Settings - User preferences and configuration</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Modern Tech Stack</h3>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Vue 3 with Composition API</li>
              <li>TypeScript for type safety</li>
              <li>Vite for fast development</li>
              <li>shadcn-vue components</li>
              <li>Tailwind CSS for styling</li>
              <li>Vue Router for navigation</li>
              <li>Chart.js with vue-chartjs for interactive charts</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Prerequisites</h2>
        <p class="text-muted-foreground mb-2">Before you begin, ensure you have the following installed:</p>
        <ul class="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Node.js 20.19+ or 22.12+ (required for Vite)</li>
          <li>npm or yarn package manager</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Installation Steps</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">1. Clone or Download the Template</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm"># If using git
git clone &lt;your-repository-url&gt;
cd vue-crm-template

# Or download and extract the ZIP file</code></pre>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">2. Install Dependencies</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">npm install</code></pre>
            <p class="text-muted-foreground mt-2">This will install all required packages including Vue 3, Vite, TypeScript, Tailwind CSS, shadcn-vue components, Chart.js, and more.</p>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">3. Start Development Server</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">npm run dev</code></pre>
            <p class="text-muted-foreground mt-2">The application will start on <code class="bg-muted px-1 rounded">http://localhost:5000</code></p>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">4. Build for Production</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">npm run build</code></pre>
            <p class="text-muted-foreground mt-2">This creates an optimized production build in the <code class="bg-muted px-1 rounded">dist</code> folder.</p>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">5. Preview Production Build</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">npm run preview</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Project Structure</h2>
        <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">vue-crm-template/
├── src/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Reusable components
│   │   └── ui/          # shadcn-vue UI components
│   ├── layouts/         # Layout components
│   ├── lib/             # Utility functions
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Customization</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">Change Color Theme</h3>
            <p class="text-muted-foreground mb-2">The template uses Vue.js green as the primary color. Edit <code class="bg-muted px-1 rounded">src/assets/index.css</code> to change colors:</p>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">:root {
  --primary: 153 47% 49%;  /* Vue.js green */
  --ring: 153 47% 49%;     /* Focus ring */
}</code></pre>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">Add New Pages</h3>
            <ol class="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Create a new component in <code class="bg-muted px-1 rounded">src/views/</code></li>
              <li>Add the route in <code class="bg-muted px-1 rounded">src/router/index.ts</code></li>
              <li>Add navigation item in <code class="bg-muted px-1 rounded">src/layouts/MainLayout.vue</code></li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Component Library</h2>
        <p class="text-muted-foreground mb-2">This template includes shadcn-vue components:</p>
        <div class="space-y-2">
          <div>
            <h3 class="text-lg font-medium">Button</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">&lt;Button variant="default"&gt;Click me&lt;/Button&gt;
&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;</code></pre>
          </div>
          <div>
            <h3 class="text-lg font-medium mt-4">Card</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent&gt;
    Content goes here
  &lt;/CardContent&gt;
&lt;/Card&gt;</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Deployment</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">Build Command</h3>
            <pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="text-sm">npm run build</code></pre>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Deploy to Netlify / Vercel</h3>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Connect your git repository</li>
              <li>Build command: <code class="bg-muted px-1 rounded">npm run build</code></li>
              <li>Publish directory: <code class="bg-muted px-1 rounded">dist</code></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <div class="space-y-3">
          <div>
            <h3 class="text-lg font-medium">Port already in use</h3>
            <p class="text-muted-foreground">Change port in <code class="bg-muted px-1 rounded">vite.config.ts</code> or kill the process using port 5000</p>
          </div>
          <div>
            <h3 class="text-lg font-medium">TypeScript errors</h3>
            <p class="text-muted-foreground">Run <code class="bg-muted px-1 rounded">npm run build</code> to see all errors and check <code class="bg-muted px-1 rounded">tsconfig.json</code> configuration</p>
          </div>
          <div>
            <h3 class="text-lg font-medium">Styling issues</h3>
            <p class="text-muted-foreground">Verify Tailwind CSS is properly configured and ensure <code class="bg-muted px-1 rounded">index.css</code> is imported in <code class="bg-muted px-1 rounded">main.ts</code></p>
          </div>
        </div>
      </section>

      <section class="pb-8">
        <h2 class="text-2xl font-semibold mb-4">Support</h2>
        <p class="text-muted-foreground">
          For detailed documentation, check out:
        </p>
        <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-2">
          <li>Vue 3 documentation</li>
          <li>Vite documentation</li>
          <li>shadcn-vue component documentation</li>
        </ul>
      </section>
    </div>
  </div>
</template>
