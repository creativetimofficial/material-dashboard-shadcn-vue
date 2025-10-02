<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { CreditCard, Download, Calendar } from 'lucide-vue-next'

const currentPlan = ref({
  name: 'Professional',
  price: 49,
  billingCycle: 'monthly',
  nextBillingDate: '2025-11-02'
})

const invoices = ref([
  { id: 'INV-001', date: '2025-10-02', amount: 49, status: 'Paid' },
  { id: 'INV-002', date: '2025-09-02', amount: 49, status: 'Paid' },
  { id: 'INV-003', date: '2025-08-02', amount: 49, status: 'Paid' },
  { id: 'INV-004', date: '2025-07-02', amount: 49, status: 'Paid' }
])

const paymentMethod = ref({
  type: 'Visa',
  last4: '4242',
  expiry: '12/25'
})

const downloadInvoice = (invoiceId: string) => {
  console.log('Downloading invoice:', invoiceId)
}

const updatePaymentMethod = () => {
  console.log('Update payment method')
}

const changePlan = () => {
  console.log('Change plan')
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Billing</h1>
      <p class="text-muted-foreground">Manage your subscription and billing information</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div>
              <p class="text-2xl font-bold">{{ currentPlan.name }}</p>
              <p class="text-muted-foreground">
                ${{ currentPlan.price }}/{{ currentPlan.billingCycle }}
              </p>
            </div>

            <div class="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar :size="16" />
              <span>Next billing date: {{ currentPlan.nextBillingDate }}</span>
            </div>

            <Button @click="changePlan" variant="outline" size="sm" class="w-full">
              Change Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-8 bg-accent rounded flex items-center justify-center">
                <CreditCard :size="20" />
              </div>
              <div>
                <p class="font-medium">{{ paymentMethod.type }} •••• {{ paymentMethod.last4 }}</p>
                <p class="text-sm text-muted-foreground">Expires {{ paymentMethod.expiry }}</p>
              </div>
            </div>

            <Button @click="updatePaymentMethod" variant="outline" size="sm" class="w-full">
              Update Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card class="mt-6">
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-2">
          <div class="hidden md:grid grid-cols-4 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b">
            <div>Invoice</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Status</div>
          </div>

          <div
            v-for="invoice in invoices"
            :key="invoice.id"
            class="flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 px-4 py-3 hover:bg-accent rounded-md"
          >
            <div class="flex justify-between md:block">
              <span class="text-sm md:hidden font-medium text-muted-foreground">Invoice</span>
              <span class="font-medium">{{ invoice.id }}</span>
            </div>
            <div class="flex justify-between md:block">
              <span class="text-sm md:hidden font-medium text-muted-foreground">Date</span>
              <span>{{ invoice.date }}</span>
            </div>
            <div class="flex justify-between md:block">
              <span class="text-sm md:hidden font-medium text-muted-foreground">Amount</span>
              <span>${{ invoice.amount }}</span>
            </div>
            <div class="flex justify-between md:block items-center">
              <span class="text-sm md:hidden font-medium text-muted-foreground">Status</span>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {{ invoice.status }}
                </span>
                <button
                  @click="downloadInvoice(invoice.id)"
                  class="p-1 hover:bg-background rounded"
                  title="Download invoice"
                >
                  <Download :size="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
