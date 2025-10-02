<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { Plus, DollarSign } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tight">Deals Pipeline</h1>
        <p class="text-muted-foreground">Track your sales opportunities</p>
      </div>
      <Button size="sm">
        <Plus class="mr-2 h-4 w-4" />
        Add Deal
      </Button>
    </div>

    <div class="grid gap-4 md:grid-cols-4">
      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">QUALIFIED</div>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">Enterprise Solution</h3>
            <p class="text-sm text-muted-foreground mb-3">Acme Corporation</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$45,000</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">Cloud Migration</h3>
            <p class="text-sm text-muted-foreground mb-3">Tech Solutions</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$32,000</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">PROPOSAL</div>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">CRM Implementation</h3>
            <p class="text-sm text-muted-foreground mb-3">InnovateCo</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$28,500</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">NEGOTIATION</div>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">Data Analytics Platform</h3>
            <p class="text-sm text-muted-foreground mb-3">DataCorp</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$67,000</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">Mobile App Development</h3>
            <p class="text-sm text-muted-foreground mb-3">StartupXYZ</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$52,000</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">CLOSED WON</div>
        <Card>
          <CardContent class="pt-3">
            <h3 class="font-semibold mb-2">Website Redesign</h3>
            <p class="text-sm text-muted-foreground mb-3">DesignHub</p>
            <div class="flex items-center gap-2 text-sm">
              <DollarSign class="h-3 w-3" />
              <span class="font-semibold">$18,000</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
