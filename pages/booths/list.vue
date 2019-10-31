<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      figure.image
        img(src="/22nd/images/tentsmap.svg" alt="Map" style="height: 600px;width: 480px;")
      article.media(v-for="item in items")
        figure.media-left
            div.image.is-128x128
              img(:src="'/22nd/images/' + item.circle + '.png'" :alt="item.circle +'のサークルカット'")
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
import Meta from "~/assets/mixins/meta";

export default {
  mixins: [
    Meta
  ],
  asyncData() {
    return {
      items: process.env.jsonData.booths
    }
  },
  data() {
    return {
      heroTitle: "クラス・部活動企画一覧",
      meta: {
        title: "クラス・部活動企画一覧"
      }
    }
  }
}
</script>
