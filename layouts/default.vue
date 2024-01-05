<!--
 * @Author: cola
 * @Date: 2023-08-06 17:42:54
 * @LastEditors: cola
 * @Description:
-->
<script setup>
  const { t } = useI18n()
</script>
<template>
  <main class="center h-full w-full flex-col gap-y-2">
    <slot />
    <Footer />
    <div class="text-auxiliary">[{{ t('default_layout') }}]</div>
  </main>
</template>
