<template>
  <div class="absolute w-full max-w-u972 top-full left-2/4 transform -translate-x-1/2 z-10">
    <div class="flex">
      <div class="flex px-u42 pt-u40 pb-u55 bg-grey">
        <img :src="item.image" title="" class="mt-u10" />
        <div class="flex flex-col">
          <nuxt-link
            v-for="(link, index) in item.main"
            :key="index"
            :to="link.to"
            :title="link.title"
            class="text-footer pl-u60 pr-u30"
          >
            {{link.title}}
          </nuxt-link>
        </div>
      </div>
      <div class="flex bg-white flex-grow justify-around pt-u45 px-u42">
        <div
          v-for="(link, index) in item.submenus"
          :key="index"
          class="flex flex-col"
        >
          <h5 class="text-b1 font-light uppercase pb-u10">{{link.title}}</h5>
          <nuxt-link
            v-for="(collection, indexCol) in link.collections"
            :key="indexCol"
            class="text-footer"
            :to="collection.to"
          >
            {{collection.title}}
          </nuxt-link>
        </div>
      </div>
    </div>
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