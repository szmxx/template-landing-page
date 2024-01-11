<template>
  <div
    ref="container"
    :style="{ width: width + 'px' }"
    class="overflow-hidden relative"
  >
    <div
      :style="{
        width: 100 * list.length + '%',
        transform: `translate3d(-${current * width}px, 0, 0)`,
      }"
      :class="{ 'transition-all': transitioning }"
      class="h-full flex"
      @transitionend="onTransitionend"
    >
      <div :style="{ 'min-width': width + 'px', 'max-width': width + 'px' }">
        <template v-if="list?.[list?.length - 1]?.slot">
          <swiper-slot :data="list?.[list?.length - 1]"></swiper-slot
        ></template>
        <template v-else>
          <img
            :src="list?.[list?.length - 1]?.url"
            class="h-full w-full max-w-none object-cover bg-color"
          />
        </template>
      </div>
      <div
        v-for="(item, index) in list"
        :key="item.url + index"
        :style="{ 'min-width': width + 'px', 'max-width': width + 'px' }"
      >
        <template v-if="item?.slot">
          <swiper-slot :data="item"></swiper-slot
        ></template>
        <template v-else>
          <img
            :src="item.url"
            class="h-full w-full max-w-none object-cover bg-color"
          />
        </template>
      </div>
      <div :style="{ 'min-width': width + 'px', 'max-width': width + 'px' }">
        <template v-if="list?.[0]?.slot">
          <swiper-slot :data="list?.[0]"></swiper-slot
        ></template>
        <template v-else>
          <img
            :src="list?.[0]?.url"
            class="h-full w-full max-w-none object-cover bg-color"
          />
        </template>
      </div>
    </div>
    <div class="absolute center bottom-4 w-full">
      <ul class="flex gap-2 bg-color/20 px-3 py-1.5 rounded" @click="onIndex">
        <li
          v-for="(item, index) in list"
          :key="item.url + index"
          :data-index="index"
          class="w-2.5 h-2.5 bg-color rounded-1/2 cursor-pointer transition-all"
          :class="{ 'w-6 rounded! bg-primary': current - 1 === index }"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SwiperSlot from './slot'
  import { ISwiperItem } from './types'
  import { InstanceKey } from './constants'
  const props = defineProps({
    list: {
      type: Array as PropType<ISwiperItem[]>,
      default: () => [],
    },
  })
  provide(InstanceKey, getCurrentInstance()!)
  const current = ref(1)
  const transitioning = ref(true)

  const width = ref()
  const container = ref()
  onMounted(() => {
    const { width: w } = container.value.getBoundingClientRect()
    width.value = w
  })
  function onIndex(evt: MouseEvent) {
    transitioning.value = true
    const index = (evt.target as HTMLElement).dataset.index
    if (index !== void 0) {
      current.value = +index + 1
    }
  }
  function onPrev() {
    transitioning.value = true
    if (current.value > 0) {
      current.value -= 1
    } else {
      current.value = props?.list?.length - 1
    }
  }
  function onNext() {
    transitioning.value = true
    console.log(current.value, props?.list?.length)
    if (current.value < props?.list?.length + 1) {
      current.value += 1
    } else {
      current.value = 1
    }
  }
  function onTransitionend() {
    if (current.value === props?.list?.length + 1) {
      transitioning.value = false
      current.value = 1
    }
    if (current.value === 0) {
      transitioning.value = false
      current.value = props?.list?.length
    }
  }
</script>
