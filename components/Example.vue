<template>
  <section class="w-full center flex-col gap-8">
    <div class="flex w-full rounded overflow-hidden <sm:flex-col">
      <div
        class="flex-1 w-1/2 center flex-col bg-color gap-8 px-16 <lg:p-8 <sm:(w-full p-8)"
      >
        <h2 class="text-24px font-bold w-full line-height-1em">
          Rich content formats
        </h2>
        <p class="line-height-1.4em text-lg">
          As a content creator, marketing creative content is not a simple
          matter. uShare provides code, text and even markdown formats to help
          users spread their creative content.
        </p>
      </div>
      <Swiper class="w-90 h-90" :list="ImgList">
        <template #markdown>
          <Blind class="w-90 h-90 overflow-hidden" :a="aurl" :b="burl"></Blind>
        </template>
        <template #code="{ data }">
          <img :src="data.url" class="object-contain" />
        </template>
      </Swiper>
    </div>
    <div class="flex w-full rounded overflow-hidden <sm:flex-col">
      <img class="h-90" src="/images/highlight.png" />

      <div
        class="flex-1 center bg-color gap-8 px-16 flex-col <lg:p-8 <sm:(w-full p-8)"
      >
        <h2 class="text-24px font-bold w-full line-height-1em">
          Enrich your technical content
        </h2>
        <p class="line-height-1.4em text-lg">
          uShare provides support for 20+ languages and themes, and provides
          file naming and multiple highlighting effects to create rich and
          interesting code snippets.
        </p>
      </div>
    </div>
    <div class="flex w-full rounded overflow-hidden <sm:flex-col">
      <div
        class="flex-1 center bg-color gap-8 px-16 flex-col <lg:p-8 <sm:(w-full p-8)"
      >
        <h2 class="text-24px font-bold w-full line-height-1em">
          Well run everywhere
        </h2>
        <p class="line-height-1.4em text-lg">
          As a life lover, uShare runs well on different devices and can even be
          used offline. On the plane, you can take out your mobile phone and
          open uShare to design excellent works.
        </p>
      </div>
      <img class="h-90" src="/images/consumer.png" />
    </div>
    <div class="flex w-full rounded overflow-hidden <sm:flex-col">
      <img class="h-90" src="/images/market.png" />
      <div
        class="flex-1 center bg-color gap-8 px-16 flex-col <lg:p-8 <sm:(w-full p-8)"
      >
        <h2 class="text-24px font-bold w-full line-height-1em">
          Help marketing
        </h2>
        <p class="line-height-1.4em text-lg">
          As a marketer, uShare provides a variety of presets, themes, fonts,
          notes, watermarks and other settings to help design better marketing
          posters.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const ImgList = [
    {
      slot: 'markdown',
      url: '',
    },
    {
      slot: 'code',
      url: '/images/code.png',
    },
    {
      slot: 'code',
      url: '/images/text.png',
    },
  ]
  const aurl = '/images/markdown-b.png'
  const burl = '/images/markdown-a.png'
</script>
