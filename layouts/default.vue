<template>
  <div class="h-full w-full bg-default lg:px-48 <lg:px-24 <sm:px-4">
    <Header></Header>
    <slot></slot>

    <Footer />
    <Background class="absolute top-0 left-0 pointer-events-none"></Background>
  </div>
</template>
