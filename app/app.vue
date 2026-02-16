<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs:({
    dir: 'rtl',
    lang: 'fa'
  }),
  title: 'Erfan Bahari',
  meta: [
    { name: 'description', content: 'Developer resume built wite Nuxt and Nest' }
  ]
})
</script>