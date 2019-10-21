<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      article.media(v-for="(item, circle) in items")
        figure.media-left
            div.image.is-128x128
              img(:src="'/22nd/images/' + circle + '.png'" :alt="circle +'のサークルカット'")
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

export default {
  components: {
    Hero
  },
  props: ["items", "heroTitle"]
}
</script>
