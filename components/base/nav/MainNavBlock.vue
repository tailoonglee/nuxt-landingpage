<template>
  <div
    class="flex flex-col border-b-1/2 border-grey1 pl-u35 pt-u15 pb-u10"
  >
    <div class="flex items-center justify-between pb-u10">
      <h5 class="text-b1 font-light uppercase">{{link.title}}</h5>
      <div
        class="w-u29 flex items-center"
        @click.prevent="toggleBlock"
      >
        <Icon
          v-if="collapsed"
          icon="arrow-top"
          class="transform rotate-180"
        />
        <Icon
          v-else
          icon="arrow-top"
        />
      </div>
    </div>
    <ul
      :class="{
        'hidden md:block': collapsed
      }"
    >
      <li
        v-for="(collection, indexCol) in link.collections"
        :key="indexCol"
      >
        <nuxt-link
          :to="collection.to"
          class="text-menu-2"
        >
          {{collection.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '~/components/base/Icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    link: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleBlock () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>