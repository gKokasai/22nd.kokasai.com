<template lang="pug">
  div
    Hero(:title="'ジャンル '+ place +'の企画一覧'")
    div.container
      figure.image
        img(src="/images/tentsmap.svg" alt="Map" style="height: 600px;width: 480px;")
      article.media(v-for="item in items")
        figure.media-left
            div.image.is-128x128
              img(:src="'/images/' + item.circle + '.png'" :alt="item.circle +'のサークルカット'")
        div.media-content
          div.content
            p.is-size-5-mobile.is-size-4-desktop.has-text-weight-bold
              nuxt-link(:to="'/booths/' + item.circle") {{ item.title }}
            p.has-text-weight-light
              b-icon(icon="account" size="is-small")
              span {{ item.circle }}
            p.has-text-weight-light
              b-icon(icon="map-marker" size="is-small")
              span {{ item.place }}
        div.media-right
          b-icon(icon="star-outline" size="is-large")
</template>

<script>
import Hero from "@/components/Hero.vue"

export default {
  props: ["items", "place"],
  components: {
    Hero
  },
  created() {
    this.samePlaceBooths = this.items.filter(value => value["placeBlock"] !== this.place)
  },
  data() {
    return {
      samePlaceBooths: []
    }
  }
}
</script>
