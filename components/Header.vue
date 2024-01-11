<template>
  <header class="flex items-center justify-between py-4">
    <div class="flex gap-2 items-center">
      <img class="h-8" src="/maskable-icon.png" alt="ushare logo" />
      <div>{{ SiteName }}</div>
    </div>
    <div class="flex gap-4" @click="onScroll">
      <a
        v-for="nav in NavList"
        :key="nav.value"
        class="nav cursor-pointer"
        :data-anchor="nav.value"
        >{{ nav.name }}
        <div class="h-0.5 bg-primary rounded transition-width-200 w-0"></div>
      </a>
    </div>
    <div class="flex gap-x-4 items-center">
      <a
        href="https://discord.gg/aZarY8WF2b"
        target="_blank"
        class="i-logos-discord-icon cursor-pointer text-lg"
      ></a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { SiteName } from '~/config'
  const NavList = [
    {
      name: 'Testimonials',
      value: 'testimonials',
      active: false,
    },
    {
      name: 'Pricing',
      value: 'pricing',
      active: false,
    },
    {
      name: 'FAQ',
      value: 'faq',
      active: false,
    },
  ]

  function onScroll(evt: MouseEvent) {
    const anchor = (evt.target as HTMLElement).dataset.anchor
    if (anchor) {
      const ele = document?.querySelector?.(`a#${anchor}`)
      ele?.scrollIntoView?.({
        behavior: 'smooth',
      })
    }
  }
</script>

<style lang="scss" scoped>
  .nav:hover > div {
    @apply w-full;
  }
</style>
