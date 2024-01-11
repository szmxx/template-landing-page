<template>
  <section class="w-full center flex-col gap-8">
    <h2 class="text-32px"><a id="testimonials">Customer Testimonials</a></h2>
    <p>Thank you all for supporting uShare from the start!</p>
    <div class="flex gap-4 w-full justify-start flex-wrap">
      <UserCard
        v-for="user in UserList"
        :key="user.content"
        :user="user"
        class="flex-1 min-w-1/4 <lg:min-w-1/3 <sm:min-w-full"
      ></UserCard>
    </div>
  </section>
</template>

<script setup lang="ts">
  const UserList = [
    {
      name: 'Shaya',
      content:
        "Trying out uShare and I'm impressed! It seamlessly adapts to different screens, making sharing content a breeze. The code and markdown support is a nice touch. Two thumbs up! 👍👍 ",
      img: '/images/j.jpg',
      color: 'rgb(var(--color-primary))',
    },
    {
      name: 'Dan',
      content:
        "Just discovered uShare and it's a game-changer! Building stunning sharing cards for my content has never been easier. The versatility to support code, text, and markdown is fantastic. Highly recommend!",
      img: '/images/g.jpg',
      color: 'rgb(var(--color-danger))',
    },
    {
      name: 'Thomas Sanlis',
      content:
        'uShare is a design marvel! It effortlessly generates beautiful sharing cards across various devices. The support for code, text, and markdown makes it a must-have for designers. Kudos! 👏 ',
      img: '/images/c.jpg',
      color: 'rgb(var(--color-success))',
    },
    {
      name: 'Wilson',
      content:
        'uShare is leveling up my social media game. Quick and easy generation of eye-catching sharing cards across different formats. A must for influencers! 🌟 ',
      img: '/images/d.jpg',
      color: 'rgb(var(--color-danger))',
    },
    {
      name: 'huglemon',
      content:
        'U made the product what I wanted to do, haha, it’s very good, keep iterating~',
      img: '/images/a.avif',
      color: 'rgb(var(--color-success))',
    },
    {
      name: 'Tibo',
      content:
        'uShare is my new travel companion! Sharing my journey is now hassle-free with beautifully generated cards. Perfect for travel bloggers on the go!',
      img: '/images/f.jpg',
      color: 'rgb(var(--color-primary))',
    },
    {
      name: 'Luca Restagno',
      content:
        "uShare is an innovation in content sharing. The ability to create visually appealing cards on different devices is fantastic. It's a tool that fuels innovation and creativity! ",
      img: '/images/i.jpg',
      color: 'rgb(var(--color-success))',
    },
    {
      name: 'KK',
      content:
        '简直是程序员的福音！生成支持代码的分享卡片，让我在社交媒体上展示我的代码变得轻而易举！',
      img: '/images/a.jpeg',
      color: 'rgb(var(--color-primary))',
    },
    {
      name: '阿龙',
      content:
        '作为一个数字游牧者，uShare给了我一个便捷的方式在不同设备上分享我的内容。太方便啦',
      img: '/images/b.png',
      color: 'rgb(var(--color-danger))',
    },
  ]
</script>
