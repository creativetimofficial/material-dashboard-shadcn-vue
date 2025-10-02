<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { Search, Plus, Building2, Users, DollarSign } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tight">Companies</h1>
        <p class="text-muted-foreground">Manage your company relationships</p>
      </div>
      <Button size="sm">
        <Plus class="mr-2 h-4 w-4" />
        Add Company
      </Button>
    </div>

    <Card>
      <CardHeader>
        <div class="flex items-center gap-2">
          <Search class="h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search companies..." 
            class="flex-1 bg-transparent border-none outline-none"
          />
        </div>
      </CardHeader>
    </Card>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 class="h-6 w-6 text-primary" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Acme Corporation</h3>
              <p class="text-sm text-muted-foreground">Technology</p>
              <div class="mt-4 space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <Users class="h-3 w-3" />
                    Contacts
                  </span>
                  <span class="font-medium">12</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <DollarSign class="h-3 w-3" />
                    Revenue
                  </span>
                  <span class="font-medium">$125,000</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 class="h-6 w-6 text-primary" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Tech Solutions Inc</h3>
              <p class="text-sm text-muted-foreground">Software Development</p>
              <div class="mt-4 space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <Users class="h-3 w-3" />
                    Contacts
                  </span>
                  <span class="font-medium">8</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <DollarSign class="h-3 w-3" />
                    Revenue
                  </span>
                  <span class="font-medium">$89,500</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="pt-3">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 class="h-6 w-6 text-primary" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-lg">InnovateCo</h3>
              <p class="text-sm text-muted-foreground">Consulting</p>
              <div class="mt-4 space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <Users class="h-3 w-3" />
                    Contacts
                  </span>
                  <span class="font-medium">15</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-muted-foreground flex items-center gap-1">
                    <DollarSign class="h-3 w-3" />
                    Revenue
                  </span>
                  <span class="font-medium">$210,000</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
