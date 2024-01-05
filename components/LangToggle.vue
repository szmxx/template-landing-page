<!--
 * @Author: cola
 * @Date: 2023-09-10 15:24:09
 * @LastEditors: cola
 * @Description:
-->
<template>
  <NuxtLink :to="switchLocalePath(locale === 'en' ? 'zh-CN' : 'en')">
    <div i-carbon-translate></div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
</script>
