<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { Download, TrendingUp, TrendingDown } from 'lucide-vue-next'
import { Line, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
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
  ArcElement,
  Filler
)

const revenueData = computed<ChartData<'line'>>(() => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Revenue',
      data: [185000, 198000, 192000, 225000, 210000, 245000, 235000, 260000, 280000, 295000],
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
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        callback: (value) => '$' + (Number(value) / 1000).toFixed(0) + 'k'
      }
    }
  }
}))

const dealStageData = computed<ChartData<'doughnut'>>(() => ({
  labels: ['Qualified', 'Proposal', 'Negotiation', 'Closed Won'],
  datasets: [
    {
      data: [35, 25, 22, 18],
      backgroundColor: [
        'rgba(66, 184, 131, 0.9)',
        'rgba(66, 184, 131, 0.7)',
        'rgba(66, 184, 131, 0.5)',
        'rgba(66, 184, 131, 0.3)'
      ],
      borderColor: [
        'rgb(66, 184, 131)',
        'rgb(66, 184, 131)',
        'rgb(66, 184, 131)',
        'rgb(66, 184, 131)'
      ],
      borderWidth: 1
    }
  ]
}))

const dealStageOptions = computed<ChartOptions<'doughnut'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}))
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tight">Reports & Analytics</h1>
        <p class="text-muted-foreground">View your performance metrics</p>
      </div>
      <Button variant="outline" size="sm">
        <Download class="mr-2 h-4 w-4" />
        Export Report
      </Button>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle class="text-base">Sales Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-3xl font-bold mb-2">$234,567</div>
          <div class="flex items-center gap-2 text-sm">
            <TrendingUp class="h-4 w-4 text-green-500" />
            <span class="text-green-500">+18% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-base">Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-3xl font-bold mb-2">28.5%</div>
          <div class="flex items-center gap-2 text-sm">
            <TrendingUp class="h-4 w-4 text-green-500" />
            <span class="text-green-500">+3.2% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-base">Average Deal Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-3xl font-bold mb-2">$42,300</div>
          <div class="flex items-center gap-2 text-sm">
            <TrendingDown class="h-4 w-4 text-red-500" />
            <span class="text-red-500">-2.1% from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Revenue by Month</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="h-80">
          <Line :data="revenueData" :options="revenueOptions" />
        </div>
      </CardContent>
    </Card>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Enterprise Solution</span>
              <span class="text-sm text-muted-foreground">$125,000</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Cloud Migration</span>
              <span class="text-sm text-muted-foreground">$89,500</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Data Analytics Platform</span>
              <span class="text-sm text-muted-foreground">$67,000</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">CRM Implementation</span>
              <span class="text-sm text-muted-foreground">$45,000</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deal Stage Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-80 flex items-center justify-center">
            <Doughnut :data="dealStageData" :options="dealStageOptions" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
