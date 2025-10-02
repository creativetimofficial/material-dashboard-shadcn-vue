<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import { Users, Building2, TrendingUp, DollarSign } from 'lucide-vue-next'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const revenueData = computed<ChartData<'line'>>(() => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [185000, 198000, 192000, 225000, 210000, 234567],
      borderColor: 'rgb(66, 184, 131)',
      backgroundColor: 'rgba(66, 184, 131, 0.1)',
      tension: 0.4,
      fill: true
    }
  ]
}))

const revenueOptions = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.parsed.y
          return `Revenue: $${(value / 1000).toFixed(0)}k`
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `$${(Number(value) / 1000).toFixed(0)}k`
      }
    }
  }
}))
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-xl font-bold tracking-tight">Dashboard</h1>
      <p class="text-muted-foreground">Welcome to your new CRM dashboard</p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <CardTitle class="text-sm font-medium">Total Contacts</CardTitle>
          <Users class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">1,234</div>
          <p class="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <CardTitle class="text-sm font-medium">Companies</CardTitle>
          <Building2 class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">456</div>
          <p class="text-xs text-muted-foreground">+8% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <CardTitle class="text-sm font-medium">Active Deals</CardTitle>
          <TrendingUp class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">89</div>
          <p class="text-xs text-muted-foreground">+23% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between pb-2">
          <CardTitle class="text-sm font-medium">Revenue</CardTitle>
          <DollarSign class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$234,567</div>
          <p class="text-xs text-muted-foreground">+18% from last month</p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="h-[300px]">
          <Line :data="revenueData" :options="revenueOptions" />
        </div>
      </CardContent>
    </Card>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm font-medium">New contact added</p>
                <p class="text-xs text-muted-foreground">John Doe from Acme Corp</p>
                <p class="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm font-medium">Deal closed</p>
                <p class="text-xs text-muted-foreground">$45,000 deal with Tech Solutions</p>
                <p class="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div class="flex-1">
                <p class="text-sm font-medium">Task completed</p>
                <p class="text-xs text-muted-foreground">Follow-up call with Jane Smith</p>
                <p class="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <input type="checkbox" class="w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <p class="text-sm font-medium">Call with prospect</p>
                <p class="text-xs text-muted-foreground">Today at 2:00 PM</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <input type="checkbox" class="w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <p class="text-sm font-medium">Send proposal</p>
                <p class="text-xs text-muted-foreground">Tomorrow at 10:00 AM</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <input type="checkbox" class="w-4 h-4 rounded border-input" />
              <div class="flex-1">
                <p class="text-sm font-medium">Review contracts</p>
                <p class="text-xs text-muted-foreground">Friday at 3:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
