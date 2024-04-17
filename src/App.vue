<template>
  <main>
    <main-component></main-component>
  </main>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import {computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2KEeLSD215ENvw9L1Le77L&ust=1713292207196000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJi2z_3sxIUDFQAAAAAdAAAAABAE'

export default {
  name: 'App',
  components: {
    MainComponent
  },
  setup() {
    const siteData = reactive({
      title: `Nerses & Vard`,
      description: `Our wedding invitation website`,
      meta: [
        {
          hid: 'og:title',
          property: 'ogTitle',
          content: 'Nerses & Vard',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: imageUrl,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: imageUrl,
        },
      ],
    })
      useHead({
        // Can be static or computed
        title: computed(() => siteData.title),
        meta: [
          {
            name: `og:title`,
            content: computed(() => siteData.meta[0].content),
          },
          {
            name: `description`,
            content: computed(() => siteData.description),
          },
          {
            name: 'og:image',
            content: computed(() => imageUrl)
          },
          {
            name: 'og:url',
            content: "https://wedding-event-info-4bc80.web.app/"
          },
          {
            name: 'og:type',
            content: "website"
          },
        ],
      
      })
  },
}
</script>

<style src="./assets/css/main.css"></style>
