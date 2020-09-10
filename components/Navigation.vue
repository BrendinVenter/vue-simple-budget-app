<template>
  <nav class="flex justify-evenly align-center items-center p-4 bg-blue-800">
    <nuxt-link class="px-4 text-xl text-white font-bold" to="/transactions"
      ><list-sign></list-sign
    ></nuxt-link>
    <nuxt-link class="px-4 text-xl text-white font-bold" to="/transactions"
      ><Logo
    /></nuxt-link>
    <nuxt-link
      class="px-4 text-xl text-white font-bold"
      to="/transactions/create"
      ><add-sign></add-sign
    ></nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
