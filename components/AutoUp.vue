<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'

  const showButton = ref(false)

  function handleScroll() {
    showButton.value = window.scrollY > 100
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <button
    v-show="showButton"
    class="h-9 w-9 rounded fixed bottom-4 right-4 p-1 bg-default center border z-99"
    @click="scrollToTop"
  >
    <div class="i-ion-md-rocket text-lg" />
  </button>
</template>
