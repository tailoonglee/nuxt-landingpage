<template>
  <div>
    <HeroSlider />
    <HomeCollections />
    <HomeProducts />
    <HomeBanner />
    <HomeInstagram />
    <HomeSubscribe />
  </div>
</template>

<script>
import HeroSlider from '~/components/home/HeroSlider.vue'
import HomeCollections from '~/components/home/HomeCollections.vue'
import HomeProducts from '~/components/home/HomeProducts.vue'
import HomeBanner from '~/components/home/HomeBanner.vue'
import HomeInstagram from '~/components/home/HomeInstagram.vue'
import HomeSubscribe from '~/components/home/HomeSubscribe.vue'

export default {
  components: {
    HeroSlider,
    HomeCollections,
    HomeProducts,
    HomeBanner,
    HomeInstagram,
    HomeSubscribe
  }
}
</script>