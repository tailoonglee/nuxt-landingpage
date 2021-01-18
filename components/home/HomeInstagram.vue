<template>
  <div class="lg:container mx-auto pt-u20 md:pt-u50  px-6 xl:px-8 2xl:px-0">
    <h1 class="text-price md:text-h1 font-pacifico text-center pb-u30">Follow Us On Instagram</h1>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-u26">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="{
          'hidden md:block': index > 2
        }"
      >
        <img :src="image" title="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        require('~/assets/image/Social1.png'),
        require('~/assets/image/Social2.png'),
        require('~/assets/image/Social3.png'),
        require('~/assets/image/Social4.png'),
        require('~/assets/image/Social5.png')
      ]
    }
  }
}
</script>
