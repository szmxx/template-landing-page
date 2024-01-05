<!--
 * @Author: cola
 * @Date: 2023-09-09 00:59:50
 * @LastEditors: cola
 * @Description:
-->
<script setup lang="ts">
  const online = useOnline()
  useSeoMeta({
    title: 'Template-Nuxt3',
    description: 'template nuxt3 is a usage tool for create nuxt3 project',
  })

  defineOgImage({
    title: 'Template-Nuxt3',
    description: 'template nuxt3 is a usage tool for create nuxt3 project',
  })
</script>

<template>
  <Suspense>
    <Counter v-if="online" />
    <div v-else class="text-hint">You're offline</div>
    <template #fallback>
      <div class="italic op50">
        <span class="animate-pulse">Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
