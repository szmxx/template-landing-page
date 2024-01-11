<template>
  <div class="flex items-center justify-between gap-4 py-4 <sm:flex-col">
    <div class="text-hint">Copyright © 2023 - PRESENT uShare</div>
    <div class="flex items-center gap-4">
      <DarkToggle />
      <LangToggle />
      <a
        href="https://discord.gg/aZarY8WF2b"
        target="_blank"
        class="i-logos-discord-icon cursor-pointer text-lg"
      ></a>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const Author = 'szmx'
</script>
