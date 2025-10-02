<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-card border-t py-6 px-4 md:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-1 text-sm text-muted-foreground">
        <span>© 2025, made with</span>
        <Heart :size="16" class="text-red-500 fill-red-500" />
        <span>by</span>
        <a 
          href="https://www.creative-tim.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-primary hover:underline"
        >
          Creative Tim
        </a>
        <span>for a better web.</span>
      </div>

      <div class="flex items-center gap-6 text-sm">
        <a 
          href="https://www.creative-tim.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          Creative Tim
        </a>
        <a 
          href="https://www.creative-tim.com/about-us" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          About Us
        </a>
        <a 
          href="https://www.creative-tim.com/blog" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          Blog
        </a>
        <a 
          href="https://www.creative-tim.com/license" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          License
        </a>
      </div>
    </div>
  </footer>
</template>
