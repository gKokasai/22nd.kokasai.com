<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      h2.subtitle.has-text-success クラス部活動企画
      article.media(v-for="booth in booths")
        figure.media-left
            div.image.is-128x128
              img(:src="'/22nd/images/' + booth.circle + '.png'" :alt="booth.circle +'のサークルカット'")
        div.media-content
          div.content
            p.is-size-5-mobile.is-size-4-desktop.has-text-weight-bold
              nuxt-link(:to="'/booths/' + booth.circle") {{ booth.item.title }}
            p.has-text-weight-light
              b-icon(icon="account" size="is-small")
              span {{ booth.circle }}
            p.has-text-weight-light
              b-icon(icon="map-marker" size="is-small")
              span {{ booth.item.place }}
        div.media-right
          b-icon(icon="star-outline" size="is-large")
      h2.subtitle.has-text-success ステージ企画
      article.media(v-for="stage in stages")
        figure.media-left
            div.image.is-128x128
              img(:src="'/22nd/images/' + stage.item.organization + '.png'" :alt="stagetitle +'のサークルカット'")
        div.media-content
          div.content
            p.is-size-5-mobile.is-size-4-desktop.has-text-weight-bold
              nuxt-link(:to="'/stages/' + stage.title") {{ stage.title }}
            p.has-text-weight-light
              b-icon(icon="account" size="is-small")
              span {{ stage.item.organization }}
            p.has-text-weight-light
              b-icon(icon="map-marker" size="is-small")
              span {{ stage.item.place }}
            p.has-text-weight-light(v-for="schedule in stage.item.schedules")
              b-icon(icon="clock-outline" size="is-small")
              span {{ schedule.startedTime | moment }} ~ {{ schedule.endedTime | moment }}
        div.media-right
          b-icon(icon="star-outline" size="is-large")

</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components: {
    Hero
  },
  data() {
    const cookie = this.$cookies.get("bookmark")

    const boothsArray = [];
    cookie.booths.forEach(value => {
      boothsArray.push({circle: value, item: process.env.jsonData.booths[value]})
    });

    const stagesArray = [];
    cookie.stages.forEach(value => {
      stagesArray.push({title: value, item: process.env.jsonData.stages[value]})
    });

    return {
      heroTitle: "ブックマーク",
      booths: boothsArray,
      stages: stagesArray
    }
  }
}
</script>
