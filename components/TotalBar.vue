<template>
  <div class="text-center bg-gray-300 p-4 mb-4">
    <h2>
      Account Balance <strong>{{ formatMoney(getBalance) }}</strong>
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import money from '~/mixins/money.js'
export default {
  mixins: [money],
  computed: {
    ...mapGetters({ getBalance: 'getBalance' }),
  },
}
</script>

<style></style>
