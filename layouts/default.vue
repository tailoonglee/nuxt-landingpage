<template>
  <div class="font-lato">
    <AnnounceBar />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import AnnounceBar from '~/components/base/AnnounceBar.vue'
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'

export default {
  components: {
    AnnounceBar,
    Header,
    Footer
  }
}
</script>
