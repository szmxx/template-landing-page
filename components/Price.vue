<template>
  <section class="w-full center flex-col gap-8">
    <h2 class="text-32px"><a id="pricing">Pricing</a></h2>
    <p>Choose the plan that fits your needs</p>
    <div class="w-full center <sm:flex-col gap-8">
      <div
        v-for="item in PriceList"
        :key="item.price"
        class="border p-4 rounded-2 w-1/3 <lg:w-1/2 <sm:w-full flex flex-col gap-4 shadow-lg"
      >
        <div class="flex justify-between items-center flex-1">
          <h3 class="text-28px line-height-1.5em border-b">{{ item.title }}</h3>
          <div
            v-if="item.recommend"
            class="border-primary border border-b-5 px-4 py-1 text-sm rounded-4"
          >
            Most popular
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-24px line-height-1.2em">
            <span class="text-lg">$</span>{{ item.price }}
            <span class="text-hint text-lg">/month</span>
          </div>
          <div class="flex flex-col gap-4">
            <div
              v-for="cell in item.list"
              :key="cell.name"
              class="flex gap-2 items-center"
              :class="{ 'decoration-line-through': !cell.checked }"
            >
              <div class="i-ion-md-checkbox text-primary"></div>
              <div>{{ cell.name }}</div>
            </div>
          </div>
          <button class="w-full py-1.5 bg-primary rounded text-white">
            Try For Free
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const PriceList = [
    {
      price: 0,
      title: 'Free',
      recommend: true,
      list: [
        {
          name: 'Multi-platform support',
          checked: true,
        },
        {
          name: 'Rich presets',
          checked: true,
        },
        {
          name: 'Adjust watermark and note',
          checked: true,
        },
        {
          name: 'Adjust background color and image',
          checked: true,
        },
        {
          name: 'Adjust font and size',
          checked: true,
        },
        {
          name: 'Support markdown',
          checked: true,
        },
        {
          name: '20+ themes and language support',
          checked: true,
        },
        {
          name: 'Code highlighting',
          checked: true,
        },
      ],
    },
  ]
</script>
