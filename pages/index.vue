<script setup lang="ts">
  const online = useOnline()
  useSeoMeta({
    title: 'template-landing-page',
    description: 'template nuxt3 is a usage tool for create nuxt3 project',
  })

  defineOgImage({
    title: 'template-landing-page',
    description: 'template nuxt3 is a usage tool for create nuxt3 project',
  })
</script>

<template>
  <Home />
</template>
