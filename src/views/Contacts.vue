<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { Search, Plus, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tight">Contacts</h1>
        <p class="text-muted-foreground">Manage your contact relationships</p>
      </div>
      <Button size="sm">
        <Plus class="mr-2 h-4 w-4" />
        Add Contact
      </Button>
    </div>

    <Card>
      <CardHeader>
        <div class="flex items-center gap-2">
          <Search class="h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search contacts..." 
            class="flex-1 bg-transparent border-none outline-none"
          />
        </div>
      </CardHeader>
    </Card>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="text-primary font-semibold">JD</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold">John Doe</h3>
              <p class="text-sm text-muted-foreground">CEO at Acme Corp</p>
              <div class="mt-3 space-y-2">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail class="h-3 w-3" />
                  <span>john@acme.com</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone class="h-3 w-3" />
                  <span>+1 234 567 8900</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="text-primary font-semibold">JS</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold">Jane Smith</h3>
              <p class="text-sm text-muted-foreground">CTO at Tech Solutions</p>
              <div class="mt-3 space-y-2">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail class="h-3 w-3" />
                  <span>jane@techsol.com</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone class="h-3 w-3" />
                  <span>+1 234 567 8901</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="text-primary font-semibold">MB</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold">Mike Brown</h3>
              <p class="text-sm text-muted-foreground">Sales Director at InnovateCo</p>
              <div class="mt-3 space-y-2">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail class="h-3 w-3" />
                  <span>mike@innovate.com</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone class="h-3 w-3" />
                  <span>+1 234 567 8902</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
