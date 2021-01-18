<template>
  <div>
    <div class="flex items-center justify-between">
      <h3 class="text-footer font-pacifico">{{menu.title}}</h3>
      <div
        class="w-u29 text-right md:hidden"
        @click.prevent="toggleBlock"
      >
        <span v-if="collapsed">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <ul
      class="pt-u10"
      :class="{
        'hidden md:block': collapsed
      }"
    >
      <li
        v-for="(item, index1) in menu.children"
        :key="index1"
      >
        <nuxt-link
          :to="item.to"
          class="text-menu-2-m md:text-menu-2"
        >
          {{item.title}}
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
    menu: {
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