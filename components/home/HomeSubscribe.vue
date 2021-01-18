<template>
  <div class="bg-green py-u20 md:py-u90 mt-u30 md:mt-u50">
    <div class="flex justify-center items-center">
      <div class="w-u29 md:w-u53">
        <Icon icon="envelop" class="w-full" />
      </div>
      <h2 class="text-h2-m md:text-h2 text-white font-pacifico pl-u10">Sign Up & Stay Connected</h2>
    </div>
    <div class="lg:container mx-auto pt-u30 lg:flex px-6 xl:px-8 2xl:px-0">
      <div class="text-p md:text-h3 text-white lg:w-2/4">
        <span class="block mr-0 md:mr-u22 text-center md:text-left">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</span>
      </div>
      <div class="text-h3 flex flex-col lg:flex-row text-white text-center lg:w-2/4 lg:h-u54 mt-u30 lg:mt-0">
        <input
          type="email"
          class="lg:ml-u22 lg:mr-u10 lg:flex-grow px-u17 text-black h-u41 md:h-u54 max-w-md mx-auto w-full lg:w-auto"
          placeholder="Enter Your Email Address"
        />
        <input
          type="button"
          value="Subscribe"
          class="uppercase text-announce px-u25 h-full lg:flex items-center justify-center text-white font-bold bg-green border-2 border-white h-u41 md:h-u54 mt-u20 lg:mt-0 max-w-u140 mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/base/Icon.vue'
export default {
  components: {
    Icon
  },
}
</script>