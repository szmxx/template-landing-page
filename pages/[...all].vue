<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <main text="center text-success flex flex-col gap-y-4">
    <div text-xl>
      <div i-ion-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button text-sm @click="router.back()">Back</button>
    </div>
  </main>
</template>
