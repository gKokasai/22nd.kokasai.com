<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      article.media(v-for="(item, circle) in items")
        div(v-if="!item.icon")
          figure.media-left
            img(src="https://bulma.io/images/placeholders/128x128.png")
        div(v-else)
          figure.media-left
            img(:src="item.icon")
        div.media-content
          div.content
            p.is-size-5-mobile.is-size-4-desktop.has-text-weight-bold
              nuxt-link(:to="'/booths/' + circle") {{ item.title }}
            p.has-text-weight-light
              b-icon(icon="account" size="is-small")
              span {{ circle }}
            p.has-text-weight-light
              b-icon(icon="map-marker" size="is-small")
              span {{ item.place }}
        div.media-right
          b-icon(icon="star-outline" size="is-large")
</template>

<script>
import Hero from "@/components/Hero.vue";
import Booth from "@/components/Booth.vue";

export default {
  components: {
    Hero,
    Booth
  },
  props: ["items", "heroTitle"]
}
</script>
