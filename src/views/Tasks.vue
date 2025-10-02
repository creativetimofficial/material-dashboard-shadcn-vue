<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { Plus, Calendar, User } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tight">Tasks</h1>
        <p class="text-muted-foreground">Manage your todo list and assignments</p>
      </div>
      <Button size="sm">
        <Plus class="mr-2 h-4 w-4" />
        Add Task
      </Button>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">TO DO</div>
        <Card>
          <CardContent class="pt-3">
            <div class="flex items-start gap-3 mb-3">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <h3 class="font-semibold mb-2">Call with prospect</h3>
                <p class="text-sm text-muted-foreground mb-3">Discuss project requirements and timeline</p>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar class="h-3 w-3" />
                    <span>Today at 2:00 PM</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <User class="h-3 w-3" />
                    <span>Assigned to you</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-3">
            <div class="flex items-start gap-3 mb-3">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <h3 class="font-semibold mb-2">Prepare presentation</h3>
                <p class="text-sm text-muted-foreground mb-3">Create slides for client meeting</p>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar class="h-3 w-3" />
                    <span>Tomorrow at 10:00 AM</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <User class="h-3 w-3" />
                    <span>Assigned to you</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">IN PROGRESS</div>
        <Card>
          <CardContent class="pt-3">
            <div class="flex items-start gap-3 mb-3">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <h3 class="font-semibold mb-2">Draft proposal</h3>
                <p class="text-sm text-muted-foreground mb-3">Write detailed proposal for Enterprise Solution</p>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar class="h-3 w-3" />
                    <span>Due in 2 days</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <User class="h-3 w-3" />
                    <span>Assigned to you</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-4">
        <div class="font-semibold text-sm text-muted-foreground">COMPLETED</div>
        <Card>
          <CardContent class="pt-3">
            <div class="flex items-start gap-3 mb-3">
              <input type="checkbox" checked class="mt-1 w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <h3 class="font-semibold mb-2 line-through text-muted-foreground">Follow-up email</h3>
                <p class="text-sm text-muted-foreground mb-3">Send follow-up to Jane Smith</p>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar class="h-3 w-3" />
                    <span>Completed yesterday</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-3">
            <div class="flex items-start gap-3 mb-3">
              <input type="checkbox" checked class="mt-1 w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <h3 class="font-semibold mb-2 line-through text-muted-foreground">Update CRM records</h3>
                <p class="text-sm text-muted-foreground mb-3">Add new contacts from conference</p>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar class="h-3 w-3" />
                    <span>Completed 2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
