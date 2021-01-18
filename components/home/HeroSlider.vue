<template>
  <div>
    <div class="home-hero-slider relative">
      <vue-tiny-slider v-bind="tinySliderOptions">
        <div
          v-for="(slide, index) in sliders"
          :key="index"
          class="relative"
        >
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
      </vue-tiny-slider>
    </div>
  </div>
</template>

<script>
export default {
  components: {

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
      tinySliderOptions: {
        mouseDrag: true,
        loop: true,
        items: 1,
        swipeAngle: 45,
        controls: false,
        nav: true,
        navPosition: 'bottom'
      },
      sliders: [
        {
          image: require('~/assets/image/HeroImage1.jpg'),
          title: 'Shop New Arrivals',
          subtitle: 'Our coolest new items are waiting for you!',
          txtColor: 'green',
          btnTitle: 'Shop Now',
          btnLink: '#',
          btnBG: 'black',
          position: 'left-center'
        },
        {
          image: require('~/assets/image/HeroImage2.jpg'),
          title: 'Our Favorite Tees',
          subtitle: 'Everyday tees you need.',
          txtColor: 'white',
          btnTitle: 'Shop Now',
          btnLink: '#',
          btnBG: 'green',
          position: 'right-top'
        }
      ]
    }
  }
}
</script>

<style scoped>
  * >>> .home-hero-slider  .tns-nav {
    text-align: center;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 20px;
  }
  * >>> .home-hero-slider  .tns-nav > [aria-controls] {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    border: 0;
  }

  * >>> .home-hero-slider  .tns-nav > [aria-controls]:focus {
    outline: none;
  }

  * >>> .home-hero-slider  .tns-nav > .tns-nav-active { background: #ffffff; }

  @media (max-width: 767px) {
    * >>> .home-hero-slider  .tns-nav {
      top:60%;
    }

    * >>> .home-hero-slider  .tns-nav > [aria-controls] {
      width: 8px;
      height: 8px;
    }
  }

  @media (max-width: 650px) {
    * >>> .home-hero-slider  .tns-nav {
      top:57%;
    }
  }

  @media (max-width: 600px) {
    * >>> .home-hero-slider  .tns-nav {
      top:55%;
    }
  }

  @media (max-width: 550px) {
    * >>> .home-hero-slider  .tns-nav {
      top:52%;
    }
  }

  @media (max-width: 375px) {
    * >>> .home-hero-slider  .tns-nav {
      top: 200px;
    }
  }
</style>
