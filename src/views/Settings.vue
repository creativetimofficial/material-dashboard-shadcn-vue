<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-xl font-bold tracking-tight">Settings</h1>
      <p class="text-muted-foreground">Manage your application preferences</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            class="w-full p-2 border border-input rounded-md bg-background"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            class="w-full p-2 border border-input rounded-md bg-background"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Job Title</label>
          <input 
            type="text" 
            placeholder="Sales Manager" 
            class="w-full p-2 border border-input rounded-md bg-background"
          />
        </div>
        <Button size="sm">Save Changes</Button>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Email Notifications</div>
            <div class="text-sm text-muted-foreground">Receive email updates for important events</div>
          </div>
          <input type="checkbox" checked class="w-4 h-4 rounded border-input" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Deal Updates</div>
            <div class="text-sm text-muted-foreground">Get notified when deals change status</div>
          </div>
          <input type="checkbox" checked class="w-4 h-4 rounded border-input" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Task Reminders</div>
            <div class="text-sm text-muted-foreground">Receive reminders for upcoming tasks</div>
          </div>
          <input type="checkbox" class="w-4 h-4 rounded border-input" />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Display Settings</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Theme</label>
          <select class="w-full px-3 py-2 border border-input rounded-md bg-background">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Language</label>
          <select class="w-full px-3 py-2 border border-input rounded-md bg-background">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <Button size="sm">Save Changes</Button>
      </CardContent>
    </Card>
  </div>
</template>
