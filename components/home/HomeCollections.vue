<template>
  <div class="lg:container mx-auto grid grid-cols-2 md:grid-cols-3 gap-u20 mt-u50 px-6 xl:px-8 2xl:px-0">
    <div
      v-for="(block, index) in blocks"
      :key="index"
      class="col-span-1 relative"
      :class="{
        'col-span-2 md:col-span-1 min-h-u200 sm:min-h-u300 overflow-hidden relative': index === 2
      }"
    >
      <nuxt-link
        :to="block.link"
      >
        <img
          :src="block.image"
          class="object-cover w-full"
          :class="{
            'absolute top-2/4 transform -translate-y-1/2': index === 2
          }"
        />
        <div class="absolute bottom-0 bg-green text-white font-pacifico text-h2-m md:text-h2 w-full py-u4 md:py-u22 text-center">
          <span class="block">{{block.title}}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        {
          image: require('~/assets/image/WomensImage.png'),
          title: 'Women’s',
          link: '#'
        },
        {
          image: require('~/assets/image/MensImage.png'),
          title: 'Men’s',
          link: '#'
        },
        {
          image: require('~/assets/image/AccessoriesImage.png'),
          title: 'Accessories',
          link: '#'
        }
      ]
    }
  }
}
</script>