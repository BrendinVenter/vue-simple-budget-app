<template>
  <div class="flex flex-col items-center mx-auto">
    <h1>Transactions</h1>
    <div class="shadow-md rounded-lg">
      <div
        v-for="(transaction, index) in getTransactions"
        :key="transaction.description"
        class="transaction px-4"
      >
        <div class="flex">
          <div class="w-10 capitalize">
            <template v-if="transaction.type === 'credit'">
              <plus-sign></plus-sign>
            </template>
            <template v-else>
              <minus-sign></minus-sign>
            </template>
          </div>
          <div class="capitalize">
            {{ transaction.description.substring(0, 20) }}
          </div>
        </div>
        <div class="flex">
          <div class="mr-5">{{ formatMoney(transaction.amount) }}</div>
          <div>
            <button @click.prevent="deleteTransaction(index)">
              <delete-sign></delete-sign>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Get Transactions Data Array from Store.
import { mapGetters } from 'vuex'
import money from '~/mixins/money.js'

export default {
  mixins: [money],
  data() {
    return {
      isDebit: false,
    }
  },

  computed: {
    ...mapGetters({ getTransactions: 'getTransactions' }),
  },

  methods: {
    deleteTransaction(index) {
      // Show Modal On Click
      this.$store.dispatch('showModal').then(() => {
        this.$store.dispatch('deleteTransaction', index)
      })
    },
  },
}
</script>

<style>
.transaction {
  @apply flex;
  @apply justify-between;
  width: 20em;
  @apply pb-2;
  border-bottom: 1px solid;
  @apply border-gray-200;
  @apply mb-2;
}
</style>
