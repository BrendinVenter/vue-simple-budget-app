<template>
  <!-- component -->
  <!-- component -->
  <div
    v-if="getModal"
    class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-75"
  >
    <div class="bg-white rounded-lg w-1/2">
      <div class="flex flex-col items-start p-4">
        <div class="flex items-center w-full">
          <div class="text-gray-800 font-bold text-3xl">Are you sure?</div>
          <svg
            class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            @click.prevent="hideModal"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
        </div>
        <hr />
        <div class="text-gray-800">
          Clicking <strong>'OK'</strong> will remove this transaction.
        </div>
        <hr />
        <div class="ml-auto">
          <button
            class="bg-blue-800 hover:bg-blue-200 text-white hover:text-gray-800 border-blue-800 rounded font-bold uppercase py-2 px-4"
            @click.prevent="confirmModal"
          >
            Ok
          </button>
          <button
            class="bg-transparent hover:bg-blue-800 text-gray-800 font-semibold hover:text-white uppercase py-2 px-4 border border-blue-800 hover:border-transparent rounded"
            @click.prevent="hideModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ getModal: 'getModal' }),
  },
  methods: {
    hideModal() {
      this.$store.dispatch('hideModal')
    },
    confirmModal() {
      this.$store.dispatch('resolveModal')
    },
  },
}
</script>

<style></style>
