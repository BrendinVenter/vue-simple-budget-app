<template>
  <div>
    <navigation></navigation>
    <total-bar></total-bar>
    <app-modal></app-modal>
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Navigation,
  },
}
</script>

<style>
h1 {
  @apply text-3xl;
  @apply font-extrabold;
  @apply tracking-wide;
  @apply text-gray-800;
  @apply mb-4;
}

body {
  @apply text-lg;
  @apply tracking-wide;
  @apply text-gray-800;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.input-field label {
  margin-bottom: 10px;
  font-weight: bold;
}

.input-field input {
  padding: 10px 10px;
}

.currency {
  font-size: 25px;
  padding: 2px 8px 0 0;
  @apply text-gray-800;
}

.toggle-switch {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
}

.toggle-switch input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.toggle-switch label {
  background-color: #2a4365;
  @apply text-white;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.toggle-switch label:hover {
  cursor: pointer;
}

.toggle-switch input:checked + label {
  background-color: #ebf8ff;
  @apply text-gray-800;
  box-shadow: none;
}

.toggle-switch label:first-of-type {
  border-radius: 10px 0 0 10px;
}

.toggle-switch label:last-of-type {
  border-radius: 0 10px 10px 0;
}
</style>
