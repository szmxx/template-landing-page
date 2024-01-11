<template>
  <div
    ref="card"
    class="card"
    :class="{ flipped: isFlipped }"
    :style="{
      '--shadow-x': 3,
      '--shadow-y': -1,
      '--glare-x': 8,
      '--glare-y': 33,
    }"
    @mousemove="onMousemove"
    @mouseleave="onMouseLeave"
  >
    <div
      class="content backend opacity-0"
      :class="{ 'opacity-100': isFlipped }"
    >
      <div class="rotate-y-180deg">
        <img class="rounded-2 w-90% <sm:w-85%" src="@/assets/code.png" />
        <div
          class="px-2 py-1 center bg-color/50 absolute right-3 top-3 rounded"
          @click="onFlip"
        >
          <button class="i-ion-md-swap"></button>
        </div>
        <div class="glare"></div>
      </div>
    </div>
    <div
      class="content"
      :class="{ 'opacity-0 pointer-events-none': isFlipped }"
    >
      <div
        class="px-2 py-1 center absolute right-3 top-3 rounded bg-color/50"
        @click="onFlip"
      >
        <button class="i-ion-md-swap"></button>
      </div>
      <img src="@/assets/text.png" class="rounded-2 w-90% <sm:w-85%" />
      <div class="glare"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const card = ref()
  function onMousemove(evt: MouseEvent) {
    const maxRotate = 20
    const maxShadow = 5
    const { clientX, clientY } = evt
    const { top, left, width, height } = card.value.getBoundingClientRect()
    // 原点位置
    const centerX = width / 2
    const centerY = height / 2

    // 鼠标位置相对卡片左上角的坐标
    const offsetX = clientX - left
    const offsetY = clientY - top

    const shadowX = ((centerX - offsetX) / centerX) * maxShadow
    const shadowY = ((centerY - offsetY) / centerY) * maxShadow
    let gX = (1 - offsetX / (centerX * 2)) * 100
    let gY = (1 - offsetY / (centerY * 2)) * 100

    let rotateX = ((offsetY - centerY) / centerY) * maxRotate * -1
    let rotateY = ((offsetX - centerX) / centerX) * maxRotate
    // 设置 CSS Variables
    card.value.style.setProperty('--rotate-x', rotateX)
    card.value.style.setProperty('--rotate-y', rotateY)
    card.value.style.setProperty('--shadow-x', shadowX)
    card.value.style.setProperty('--shadow-y', shadowY)
    card.value.style.setProperty('--glare-x', gX)
    card.value.style.setProperty('--glare-y', gY)
    card.value.style.setProperty('--perspective', centerX * 5)
  }

  function onMouseLeave() {
    card.value.style.setProperty('--rotate-x', 0)
    card.value.style.setProperty('--rotate-y', 0)
  }

  const isFlipped = ref()
  function onFlip() {
    isFlipped.value = !isFlipped.value
  }
</script>

<style scoped lang="scss">
  .card {
    backface-visibility: visible;
    transform-style: preserve-3d;
    transition: all 200ms ease-out;
    perspective: calc(var(--perspective) * 1px);
  }

  .content .glare {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at calc(var(--glare-x) * 1%) calc(var(--glare-y) * 1%),
      rgb(189 188 233),
      transparent
    );
    opacity: 0.6;
    transition: all 0.1s ease-out;
    content: '';
    pointer-events: none;
    mix-blend-mode: hard-light;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .content {
    position: relative;
    filter: drop-shadow(
      calc(var(--shadow-x) * 1px) calc(var(--shadow-y) * 1px) 5px
        rgb(var(--text-primary))
    );
    transform: rotateX(calc(var(--rotate-x) * 1deg))
      rotateY(calc(var(--rotate-y) * 1deg));
    will-change: transform, filter;
    perspective: calc(var(--perspective) * 1px);
    transition: all 200ms ease-out;
  }

  .backend {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.15s ease-out;
    will-change: transform, filter;
  }
</style>
