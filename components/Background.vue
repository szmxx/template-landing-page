<template>
  <canvas ref="canvasref"></canvas>
</template>

<script setup lang="ts">
  const canvasref = ref()
  const ctx = shallowRef()
  const particles: Particle[] = []
  onMounted(() => {
    ctx.value = canvasref.value.getContext('2d')
    canvasref.value.width = window.innerWidth
    canvasref.value.height = window.innerHeight
    createParticles()
    animateParticles()
  })

  const color = useColorMode()
  const colorlist = ref<string[]>([])

  onMounted(() => {
    const root = document.querySelector(':root')
    if (root) {
      const style = getComputedStyle(root)
      colorlist.value = [
        style.getPropertyValue('--color-primary'),
        style.getPropertyValue('--color-danger'),
        style.getPropertyValue('--color-success'),
      ]
    }
  })
  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number

    constructor() {
      this.x = Math.random() * canvasref.value.width
      this.y = Math.random() * canvasref.value.height
      this.size = Math.random() * 2 + 1
      this.speedX = Math.random() * 5 - 2.5
      this.speedY = Math.random() * 5 - 2.5
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.size > 0.2) this.size -= 0.1

      if (this.size <= 0.2) {
        this.x = Math.random() * canvasref.value.width
        this.y = Math.random() * canvasref.value.height
        this.size = Math.random() * 2 + 1
      }
    }

    draw() {
      const index = ~~(Math.random() * colorlist.value.length)
      ctx.value.fillStyle = `rgba(${colorlist.value[index]}, 0.5)`
      ctx.value.strokeStyle = `rgba(${colorlist.value[index]}, 0.5)`

      ctx.value.lineWidth = 2

      ctx.value.beginPath()
      ctx.value.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.value.closePath()
      ctx.value.fill()
      ctx.value.stroke()
    }
  }

  function createParticles() {
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }
  }

  function animateParticles() {
    ctx.value.clearRect(0, 0, canvasref.value.width, canvasref.value.height)

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()
    }

    requestAnimationFrame(animateParticles)
  }
</script>
