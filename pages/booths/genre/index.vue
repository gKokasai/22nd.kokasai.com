<template lang="pug">
div
  Hero(title="ジャンル一覧")
  div.columns.is-multiline
    nuxt-link(:to="'/booths/genre/food'").button.is-fullwidth.column
      span 食べる
      b-icon(icon="chevron-right" size="is-medium")
    nuxt-link(:to="'/booths/genre/experience'").button.is-fullwidth.column
      span 体験する
      b-icon(icon="chevron-right" size="is-medium")
    nuxt-link(:to="'/booths/genre/game'").button.is-fullwidth.column
      span 遊ぶ
      b-icon(icon="chevron-right" size="is-medium")
    nuxt-link(:to="'/booths/genre/other'").button.is-fullwidth.column
      span その他
      b-icon(icon="chevron-right" size="is-medium")
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components:{
    Hero
  }
}
</script>
