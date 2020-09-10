<template>
  <div class="flex flex-col items-center mx-auto">
    <h1>Add Transaction</h1>
    <div
      class="flex flex-col items-center shadow-md rounded-lg"
      @keyup.enter="addTransaction"
    >
      <!-- Transaction Type Selector -->
      <div class="toggle-switch">
        <!--Debit Selector-->
        <input
          id="debit"
          v-model="form.type"
          type="radio"
          name="transaction_type"
          checked
          value="debit"
        />
        <label for="debit">Debit</label>
        <!-- Credit Selector-->
        <input
          id="credit"
          v-model="form.type"
          type="radio"
          name="transaction_type"
          value="credit"
        />
        <label for="credit">Credit</label>
      </div>

      <!-- Form Validation Errors -->
      <template v-if="errors">
        <ul class="font-bold mb-4">
          <li v-for="error in errors" :key="error">- {{ error }}</li>
        </ul>
      </template>

      <!-- Transaction Description -->

      <div class="input-field">
        <label for="description">Transaction Description</label>
        <input
          id="description"
          v-model="form.description"
          type="text"
          name="transaction_description"
          placeholder="Enter purchase description"
        />
      </div>

      <!-- Transaction Amount -->
      <div class="input-field">
        <label for="amount">Amount</label>
        <div>
          <span class="currency">$</span
          ><input
            id="amount"
            v-model="form.amount"
            type="text"
            name="transaction_amount"
          />
        </div>
      </div>

      <div>
        <button
          class="bg-blue-100 hover:bg-blue-800 hover:text-white rounded font-bold uppercase py-4 px-8 mt-2 mb-4"
          @click.prevent="addTransaction"
        >
          Add Transaction
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: 'debit',
        description: '',
        amount: '',
      },
      errors: [],
    }
  },

  methods: {
    addTransaction() {
      // Form Validation

      if (!this.validForm()) {
        return
      }

      // Convert Value into Cents
      this.form.amount *= 100

      // Add Event to Store (Data House :) )
      this.$store.dispatch('addTransaction', this.form)

      // After Success, Redirect to All Transactions View

      this.$router.push({ path: '/transactions/' })
    },
    validForm() {
      // Reset Errors Array
      this.errors = []

      // Field Validation
      if (!this.form.description) {
        this.errors.push('Description required.')
      }

      if (!this.form.amount) {
        this.errors.push('Amount required.')
      }

      // Return True or False
      return !this.errors.length
    },
  },
}
</script>

<style></style>
