<template>
  <div class="bg-black pt-u20 md:pt-u60 pb-u30 md:pb-u90">
    <div class="lg:container mx-auto flex flex-col md:flex-row justify-between px-6 xl:px-8 2xl:px-0">
      <div class="flex flex-col md:flex-row">
        <FooterMenuBlock
          v-for="(menu, index) in menus"
          :key="index"
          class="text-white pb-u20 md:pb-0"
          :class="{
            'mr-0 md:mr-u80': index === 0
          }"
          :menu="menu"
        />
      </div>

      <div class="text-white">
        <h3 class="text-footer font-pacifico">{{socials.title}}</h3>
        <div class="flex pt-u10 md:pt-u20 items-center">
          <nuxt-link
            v-for="(iconItem, index) in socials.children"
            :key="index"
            :to="iconItem.link"
            class="mr-u40 last:mr-0"
          >
            <Icon :icon="iconItem.icon" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/base/Icon.vue'
import FooterMenuBlock from '~/components/base/FooterMenuBlock.vue'

export default {
  components: {
    Icon,
    FooterMenuBlock
  },
  data () {
    return {
      menus: [
        {
          title: 'Customer Service',
          children: [
            {
              title: 'Accessibility',
              to: '#'
            },
            {
              title: 'Contact Us',
              to: '#'
            },
            {
              title: 'Return Policy',
              to: '#'
            },
            {
              title: 'FAQ',
              to: '#'
            },
            {
              title: 'Gift Certificates',
              to: '#'
            },
            {
              title: 'Wishlist',
              to: '#'
            },
          ]
        },
        {
          title: 'Company',
          children: [
            {
              title: 'About Us',
              to: '#'
            },
            {
              title: 'Careers',
              to: '#'
            },
            {
              title: 'Press',
              to: '#'
            },
            {
              title: 'Affiliates',
              to: '#'
            },
          ]
        }
      ],
      socials: {
        title: 'Follow Us',
        children: [
          {
            link: '#',
            icon: 'facebook'
          },
          {
            link: '#',
            icon: 'instagram'
          },
          {
            link: '#',
            icon: 'twitter'
          }
        ]
      },
      collapsed: false
    }
  }
}
</script>