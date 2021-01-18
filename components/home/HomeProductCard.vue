<template>
  <div>
    <nuxt-link
      to="#"
      class="text-center"
    >
      <img :src="item.image" :title="item.title" class="object-cover w-full" />
      <h3 class="text-b1 md:text-h3 pt-4">{{item.title}}</h3>
      <p class="text-b2 md:text-b1 font-light pt-2">{{item.subtitle}}</p>
      <div class="text-green font-pacifico font-light text-price-m md:text-price">
        <span class="text-price md:text-h2">$</span>{{item.price}}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  }
}
</script>