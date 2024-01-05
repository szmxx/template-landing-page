<!--
 * @Author: cola
 * @Date: 2023-09-09 00:59:50
 * @LastEditors: cola
 * @Description:
-->
<script setup lang="ts">
  const color = useColorMode()

  useHead({
    meta: [
      {
        id: 'theme-color',
        name: 'theme-color',
      },
    ],
  })

  function toggleDark() {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
  }
</script>

<template>
  <button class="cursor-pointer" @click="toggleDark">
    <div
      class="i-ion-sunny-sharp"
      :class="{ 'i-ion-moon-sharp!': color?.preference === 'dark' }"
    />
  </button>
</template>
