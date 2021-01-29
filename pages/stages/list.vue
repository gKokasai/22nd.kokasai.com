<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      article.media(v-for="(item, title) in items")
        figure.media-left
            div.image.is-128x128
              img(:src="'/images/' + item.organization + '.png'" :alt="title +'のサークルカット'")
        div.media-content
          div.content
            p.is-size-5-mobile.is-size-4-desktop.has-text-weight-bold
              nuxt-link(:to="'/stages/' + title") {{ title }}
            p.has-text-weight-light
              b-icon(icon="account" size="is-small")
              span {{ item.organization }}
            p.has-text-weight-light
              b-icon(icon="map-marker" size="is-small")
              span {{ item.place }}
            p.has-text-weight-light(v-for="schedule in item.schedules")
              b-icon(icon="clock-outline" size="is-small")
              span {{ schedule.startedTime | moment }} ~ {{ schedule.endedTime | moment }}
        div.media-right
          b-icon(icon="star-outline" size="is-large")
</template>

<script>
import Hero from "@/components/Hero.vue";
import Meta from "~/assets/mixins/meta";
import moment from "moment";

export default {
  mixins: [
    Meta
  ],
  components: {
    Hero
  },
  filters: {
    moment: function (date) {
      return moment(date).format("YYYY.MM.DD HH:mm");
    }
  },
  asyncData() {
    return {
      items: process.env.jsonData.stages
    }
  },
  data() {
    return {
      heroTitle: "ステージ企画",
      meta: {
        title: "ステージ企画"
      }
    }
  }
}
</script>
