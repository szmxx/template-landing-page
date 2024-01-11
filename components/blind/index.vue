<template>
  <div
    ref="container"
    class="relative select-none"
    :style="{ '--width': '3px', width: width + 'px' }"
  >
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <img :width="width" class="h-full max-w-none" :src="a" alt="code" />
    </div>
    <div
      :style="{ width: transform + 'px' }"
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <img :width="width" class="h-full max-w-none" :src="b" alt="text" />
    </div>
    <div
      class="blind absolute top-0 center h-full"
      :style="{ transform: `translate3d(${transform - 15}px, 0, 0)` }"
      @mousedown="onMousedown"
      @touchstart="onTouchstart"
    >
      <div class="p-0.5 bg-color rounded z-9 w-30px flex cursor-pointer">
        <div class="i-ion-arrow-left-b"></div>
        <div class="i-ion-arrow-right-b"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const transform = ref()
  const width = ref()
  const container = ref()
  defineProps({
    a: {
      type: String,
      default: '',
    },
    b: {
      type: String,
      default: '',
    },
  })

  onMounted(() => {
    const { width: w } = container.value.getBoundingClientRect()
    transform.value = w / 2
    width.value = w
  })
  function onMousedown() {
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  }
  function onMousemove(evt: MouseEvent) {
    const { clientX } = evt
    const { left, width } = container.value.getBoundingClientRect()
    transform.value = Math.max(0, Math.min(clientX - left, width))
  }
  function onTouchstart() {
    document.addEventListener('touchmove', onTouchmove)
    document.addEventListener('touchend', onTouchend)
  }
  function onTouchmove(evt: TouchEvent) {
    const { clientX } = evt.touches[0]
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { left, width } = container?.value?.getBoundingClientRect?.()
    transform.value = Math.max(0, Math.min(clientX - left, width))
  }

  function onTouchend() {
    document.removeEventListener('touchmove', onTouchmove)
    document.removeEventListener('touchend', onTouchend)
  }

  function onMouseup() {
    document.removeEventListener('mousemove', onMousemove)
    document.removeEventListener('mouseup', onMouseup)
  }
</script>

<style scoped lang="scss">
  .blind::before {
    content: '';
    width: var(--width);

    @apply h-1/2 absolute top-0 bg-color rounded;
  }

  .blind::after {
    content: '';
    width: var(--width);

    @apply h-1/2 absolute bottom-0 bg-color rounded;
  }
</style>
