<template>
  <div
    ref="card"
    class="card p-4 relative flex flex-col bg-color cursor-pointer gap-4 rounded-2 overflow-hidden"
    :style="{ '--clr': user.color }"
    @mousemove="onMousemove"
  >
    <img class="w-10 h-10 rounded object-cover z-1" :src="user.img" alt="" />
    <p class="relative z-1 flex-1">{{ user.content }}</p>
    <div class="text-hint z-1">{{ user.name }}</div>
    <div class="i-ion-md-quote absolute right-4"></div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    user: {
      type: Object,
      default: () => {},
    },
  })
  const card = ref()
  function onMousemove(evt: MouseEvent) {
    const { offsetX, offsetY } = evt
    card.value.style.setProperty('--x', offsetX + 'px')
    card.value.style.setProperty('--y', offsetY + 'px')
  }
</script>

<style lang="scss" scoped>
  .card::before {
    position: absolute;
    top: var(--y);
    left: var(--x);
    background: radial-gradient(var(--clr), transparent, transparent);
    opacity: 0;
    transition: all 0.5s;
    content: '';
    transform: translate(-50%, -50%);

    @apply w-200% h-200%;
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 2px;

    @apply bg-color/80 rounded-2;
  }
</style>
