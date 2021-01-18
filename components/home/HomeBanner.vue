<template>
  <div class="relative mt-u20 md:mt-u50">
    <img :src="slide.image" class="object-cover w-full min-h-u227" />
    <div class="bg-grey md:bg-transparent md:absolute w-full lg:container md:top-0 h-full md:left-2/4 md:transform md:-translate-x-1/2 px-6 xl:px-8 2xl:px-0 pt-u20 md:pt-0 pb-u30 md-pb-0">
      <div
        class="md:absolute text-center md:text-left"
        :class="{
          'md:top-2/4 md:transform md:-translate-y-1/2': slide.position === 'left-center',
          'md:right-u20 md:top-u50': slide.position === 'right-top',
          'text-green': slide.txtColor === 'green',
          'text-green md:text-white': slide.txtColor === 'white'
        }"
      >
        <h1 class="font-pacifico text-price md:text-h1">{{slide.title}}</h1>
        <p class="text-announce md:text-subheader pt-2 md:pt-4 pb-4 md:pb-8">{{slide.subtitle}}</p>
        <nuxt-link
          :to="slide.btnLink"
          :title="slide.btnTitle"
          class="uppercase text-announce px-u25 h-btn inline-flex items-center justify-center text-white font-bold"
          :class="{
            'bg-black': slide.btnBG === 'black',
            'bg-black md:bg-green': slide.btnBG === 'green'
          }"
        >
          {{slide.btnTitle}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: {
        image: require('~/assets/image/HeroImage2.jpg'),
        title: 'Our Favorite Tees',
        subtitle: 'Everyday tees you need.',
        txtColor: 'white',
        btnTitle: 'Shop Now',
        btnLink: '#',
        btnBG: 'black',
        position: 'right-top'
      }
    }
  }
}
</script>
