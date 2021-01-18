<template>
  <div class="pt-u20 md:pt-u50 lg:container mx-auto md:pb-u22">
    <h1 class="text-price md:text-h1 font-pacifico text-center pb-u30">Shop New Arrivals</h1>
    <div class="home-products-slider mx-u50">
      <VueSlickCarousel v-bind="carouselOptions">
        <HomeProductCard
          v-for="(slide, index) in sliders"
          :key="index"
          :item="slide"
        />
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            <Icon icon="arrow-left" />
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            <Icon icon="arrow-right" />
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/base/Icon.vue'
import HomeProductCard from '~/components/home/HomeProductCard.vue'

export default {
  components: {
    HomeProductCard,
    Icon
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        }
      ]
    };
  },
  data () {
    return {
      carouselOptions: {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          }
        ]
      },
      sliders: []
    }
  },
  beforeMount () {
    const item = {
      image: require('~/assets/image/ProductImage.png'),
      title: 'Product Title',
      subtitle: 'WOMEN’S T-SHIRT',
      price: '19.99'
    }
    for (let index = 0; index < 8; index++) {
      this.sliders.push(item)
    }
  }
}
</script>

<style scoped>
  * >>> .home-products-slider  .slick-prev::before,
  * >>> .home-products-slider  .slick-next::before {
    display: none;
  }
  * >>> .home-products-slider  .slick-prev.slick-disabled,
  * >>> .home-products-slider  .slick-next.slick-disabled {
    opacity: 0.2;
  }
</style>
