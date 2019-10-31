<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      div.columns.is-multiline
        div.column.is-full
          h2.has-text-success.subtitle.is-size-5-mobile.is-size-4-desktop ブックマーク機能とは？
          p.has-text-success ブックマーク機能とは気になった企画を保存しておき、使いたいときに呼び出しできる機能です。PCでブックマークしておきスマホで呼び出す、といった高機能なことはできず簡易的なものではありますが、ご活用ください。
        div.column.is-full
          h2.has-text-success.is-size-5-mobile.is-size-4-desktop クラス部活動企画
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
        div.column.is-full
          h2.has-text-success.is-size-5-mobile.is-size-4-desktop ステージ企画
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
  methods: {
    removeStageBookmark: (title) => {
      this.stages = this.stages.filter(value => value !== title)
      localStorage.setItem("stages_bookmark", this.stages)

      this.$buefy.toast.open({
          message: 'ブックマークから削除しました！',
          position: 'is-bottom',
          type: 'is-success'
        })
    }
  },
  mounted() {
    let bookmarkedStages = JSON.parse(localStorage.getItem("stages_bookmark")) || [];
    let bookmarkedBooths = JSON.parse(localStorage.getItem("booths_bookmark")) || [];

    bookmarkedBooths.forEach(value => {
      this.booths.push({circle: value, item: process.env.jsonData.booths[value]})
    });

    bookmarkedStages.forEach(value => {
      this.stages.push({title: value, item: process.env.jsonData.stages[value]})
    });
  },
  data() {
    return {
      heroTitle: "ブックマーク",
      booths: [],
      stages: [],
      meta: {
        title: "ブックマーク"
      }
    }
  }
}
</script>
