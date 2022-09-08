<template>
  <v-app full-height>
    <Contact />
  </v-app>
</template>

<script setup lang="ts">
import Contact from '@/layout/Contact.vue'

</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}

body {
  height: 100% !important;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #fff inset !important;
  -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(42, 39, 39, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
