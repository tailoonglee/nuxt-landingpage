<template>
  <div class="bg-green">
    <div class="flex justify-between items-center xl:container h-u64 md:h-u138 mx-auto px-6 xl:px-8 2xl:px-0">
      <div class="flex items-center">
        <button
          aria-label="Open Navigation Panel"
          class="md:hidden mr-u25 focus:outline-none js-target-toggle"
          @click="openMobileMenu"
        >
          <Icon :icon="'meat'" />
        </button>

        <nuxt-link
          to="/"
          class="w-u55 md:w-auto"
        >
          <Icon icon="logo" class="max-w-full" />
        </nuxt-link>
      </div>

      <div class="h-full hidden md:flex">
        <div
          v-for="link in links"
          :key="link.title"
          class="main-nav-wrapper group h-full"
        >
          <nuxt-link
            :to="link.to"
            v-if="link.hasChildren"
            v-touch:tap="touchMainMenu"
            class="h-full flex uppercase text-white font-medium text-menu mx-u10 lg:mx-u20 xl:mx-u30 items-center"
          >
            <span class="mt-8 border-b-2 border-transparent hover:border-white pb-u7">{{link.title}}</span>
          </nuxt-link>
          <nuxt-link
            :to="link.to"
            v-else
            class="h-full flex uppercase text-white font-medium text-menu mx-u10 lg:mx-u20 xl:mx-u30 items-center"
          >
            <span class="mt-8 border-b-2 border-transparent hover:border-white pb-u7">{{link.title}}</span>
          </nuxt-link>

          <MainNavSection
            v-if="link.hasChildren"
            :item="link.children"
            class="hidden main-nav-section group-hover:block"
          />
        </div>
      </div>

      <div class="flex items-center md:mt-8">
        <div
          class="w-u278 h-u36 hidden"
          role="search"
          v-if="visibleSearch"
          v-click-outside="hideSearch"
          :class="{
            'lg:flex': visibleSearch
          }"
        >
          <input type="text" class="flex-grow border border-black focus:outline-none px-u10" placeholder="What are you searching for?" />
          <button class="bg-black uppercase text-white font-bold text-btn-m px-u17">GO</button>
        </div>

        <div
          v-for="link in leftLinks"
          :key="link.icon"
          class="mr-u20 xl:mr-u30 last:mr-0 flex items-center"
        >
          <button
            v-if="link.icon === 'search'"
            @click.prevent="openSearch"
            class="focus:outline-none"
            :class="{
              'lg:hidden': visibleSearch
            }"
          >
            <Icon :icon="link.icon" />
          </button>
          <nuxt-link
            v-else
            :to="link.to"
            :title="link.icon"
          >
            <Icon :icon="link.icon" />
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="fixed bg-white left-2/4 transform -translate-x-1/2 w-u335 h-u47 flex z-20 p-u5 lg:hidden"
      role="search"
      v-if="visibleSearch"
      v-click-outside="hideSearch"
    >
      <input type="text" class="flex-grow border border-black focus:outline-none px-u10" placeholder="What are you searching for?" />
      <button class="bg-black uppercase text-white font-bold text-btn-m px-u17">GO</button>
    </div>

    <div
      class="fixed bg-black bg-opacity-70 z-30 inset-0 top-u45 w-screen h-screen overflow-hidden transform transition-transform duration-300"
      :class="visibleMenu ? 'translate-x-0' : '-translate-x-full'"
      role="navigation"
    >
      <div class="h-full mr-u50 bg-white relative">
        <div class="flex justify-end border-b-1/2 border-grey1">
          <button
            class="focus:outline-none mt-u15 mr-u11 mb-u8"
            @click="closeMobileMenu"
          >
            <Icon icon="close" />
          </button>
        </div>
        <div class="">
          <MainNavBlock
            v-for="(link, index) in links[0].children.submenus"
            :key="index"
            :link="link"
          />
        </div>

        <div class="absolute bottom-0 bg-grey left-0 w-full pt-u20 pb-u30 px-u35 flex">
          <img :src="links[0].children.image" title="" class="w-1/2 h-auto object-contain self-start mr-u25 mt-u10" />
          <div class="mb-u35">
            <nuxt-link
              v-for="(link, index) in links[0].children.main"
              :key="index"
              :to="link.to"
              :title="link.title"
              class="block text-menu-3"
            >
              {{link.title}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import select from 'dom-select'
import Icon from '~/components/base/Icon.vue'
import MainNavSection from '~/components/base/nav/MainNavSection.vue'
import MainNavBlock from '~/components/base/nav/MainNavBlock.vue'

export default {
  components: {
    Icon,
    MainNavSection,
    MainNavBlock
  },
  data () {
    return {
      links: [
        {
          title: 'Men\'s',
          to: '#',
          hasChildren: true,
          children: {
            image: require('~/assets/image/Social1.png'),
            main: [
              {
                title: 'Shop All',
                to: '#'
              },
              {
                title: 'New Arrivals',
                to: '#'
              },
              {
                title: 'Favorites',
                to: '#'
              },
              {
                title: 'Sale',
                to: '#'
              }
            ],
            submenus: [
              {
                title: 'Tops',
                collections: [
                  {
                    title: 'T-Shirts',
                    to: '#'
                  },
                  {
                    title: 'Short Sleeve',
                    to: '#'
                  },
                  {
                    title: 'Long Sleeve',
                    to: '#'
                  }
                ]
              },
              {
                title: 'Bottoms',
                collections: [
                  {
                    title: 'Shorts',
                    to: '#'
                  },
                  {
                    title: 'Pants',
                    to: '#'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Women\'s',
          to: '#',
          hasChildren: false
        },
        {
          title: 'ACCESSORIES',
          to: '#',
          hasChildren: false
        },
        {
          title: 'Sale!',
          to: '#',
          hasChildren: false
        }
      ],
      leftLinks: [
        {
          icon: 'search',
          to: '#'
        },
        {
          icon: 'user',
          to: '#'
        },
        {
          icon: 'cart',
          to: '#'
        }
      ],
      bodyClassToggle: 'overflow-hidden',
      visibleMenu: false,
      visibleSearch: false
    }
  },
  methods: {
    touchMainMenu (e) {

    },
    openMobileMenu () {
      const body = select('body')
      body.classList.add(this.bodyClassToggle)
      this.visibleMenu = true
    },
    closeMobileMenu () {
      const body = select('body')
      body.classList.remove(this.bodyClassToggle)
      this.visibleMenu = false
    },
    openSearch () {
      this.visibleSearch = true
    },
    hideSearch () {
      this.visibleSearch = false
    }
  }
}
</script>