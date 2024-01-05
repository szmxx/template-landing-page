<!--
 * @Author: cola
 * @Date: 2023-08-06 17:42:54
 * @LastEditors: cola
 * @Description:
-->
<script setup lang="ts">
  import dayjs from 'dayjs'
  const { data } = await useGet<IApi>(
    '/api',
    {},
    {
      key: 'count',
    },
  )
  const { setCount } = useCountStore()
  const { count } = storeToRefs(useCountStore())
  function dec() {
    setCount(count.value - 1)
  }
  function inc() {
    setCount(count.value + 1)
  }
  const now = computed(() =>
    dayjs(data.value.startAt).format('YYYY-MM-DD HH:mm:ss'),
  )
</script>

<template>
  <div class="center gap-x-2">
    <button class="bg-success rounded p-1" @click="dec()">
      <div i-ion-remove />
    </button>
    <div>
      {{ count }}
    </div>
    <button class="bg-success rounded p-1" @click="inc()">
      <div i-ion-add />
    </button>
  </div>
  <div>{{ data?.pageview }}</div>
  <div>{{ now }}</div>
</template>
