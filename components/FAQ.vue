<template>
  <section class="w-full center flex-col gap-8">
    <h2 class="text-32px line-height-1em text-center">
      <a id="faq">Frequently Asked Questions</a>
    </h2>
    <p>Everything you need to know.</p>
    <div class="flex flex-col justify-start w-full">
      <div
        v-for="(faq, index) in FAQList"
        :key="faq.q"
        class="flex flex-col border-b"
      >
        <div
          class="font-bold flex bg-color justify-between items-center px-4 py-3 text-medium cursor-pointer rounded"
          @click="onToggle(index)"
        >
          <div :class="{ 'text-primary': index === current }">{{ faq.q }}</div>
          <div
            class="i-ion-plus-round overflow-hidden min-w-8 text-hint"
            :class="{ 'i-ion-minus-round! text-primary!': index === current }"
          ></div>
        </div>
        <div
          class="overflow-hidden h-0"
          :class="{ 'h-full!': index === current }"
        >
          <p class="p-3 rounded line-height-1.5em">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const FAQList = [
    {
      q: 'What is uShare?',
      a: 'uShare is a tool designed to build beautiful sharing cards, making it easy to spread your content across various platforms.',
    },
    {
      q: 'What types of content does uShare support?',
      a: 'uShare supports a variety of content types, including code snippets, plain text, and even Markdown format.',
    },
    {
      q: 'How does uShare generate sharing cards on different devices?',
      a: 'uShare uses responsive design principles to ensure that the generated sharing cards look great on a wide range of devices, providing a seamless experience.',
    },
    {
      q: 'Is uShare suitable for non-technical users?',
      a: 'Absolutely! uShare is designed with user-friendliness in mind, making it accessible for both technical and non-technical users to create visually appealing sharing cards.',
    },
    {
      q: 'Is there a limit to the number of sharing cards I can create with uShare?',
      a: 'uShare offers flexibility, and there is no strict limit on the number of sharing cards you can generate. However, certain plan restrictions may apply based on your subscription level.',
    },
  ]
  const current = ref(0)
  function onToggle(index: number) {
    if (current.value === index) {
      current.value = -1
    } else {
      current.value = index
    }
  }
</script>
