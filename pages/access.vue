<template lang="pug">
div
  Hero(title="アクセス")
  div.container
    div.columns.is-multiline
      div.column.is-full
        Timer
      div.column.is-full
        article.notification.is-light.has-text-success
          div.content
            p.is-size-3-mobile.is-size-3-desktop.has-text-weight-semibold
              span お願い
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 当日は本校の駐車場を開放しますが、台数に限りがあります。そのため、なるべく公共交通機関のご利用をお願いします。
      div.column.is-half-desktop
        article.notification.is-light.has-text-success
          div.content
            p.is-size-3-mobile.is-size-3-desktop.has-text-weight-semibold
              b-icon(icon="car" size="is-large")
              span 車
            figure.image.is-5by3
              img(src="/22nd/images/parking.png" alt="駐車場" @click="isImageModalActive = true")
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 一般の方は群馬高専校内の駐車場を上図桃色の駐車場を3つ、大きな方から順に開放しますので、そちらを利用することができます。また、前橋方面の方はぐんまマラソンの交通規制もご確認ください。
      div.column.is-half-desktop
        article.notification.is-light.has-text-success
            p.is-size-3-mobile.is-size-3-desktop.has-text-weight-semibold
              b-icon(icon="train" size="is-large")
              span 電車
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light JR上越線/両毛線/吾妻線 新前橋駅下車後シャトルバスで20分
      div.column
        article.is-child.notification.is-light.has-text-success
          div.content
            p.is-size-3-mobile.is-size-3-desktop.has-text-weight-semibold
              b-icon(icon="bus-clock" size="is-large")
              span シャトルバス
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-normal 当日2019/11/02、2019/11/03は新前橋駅東口と群馬高専を結ぶシャトルバスが運行されます。また、群馬高専正門 18:00発、18:45発のバスは2日目のみの運行となります。お気を付けください。
            div.columns
              div.column.is-3-desktop.is-3-tablet
                div.is-size-4-mobile.is-size-4-desktop.has-text-weight-medium 新前橋駅東口 発 時刻表
                table.table.is-bordered
                  thead
                    tr
                      th 時
                      td 分
                  tbody
                    tr(v-for="item in fromShinmaebashiDiagram")
                      th {{ item.oclock }}
                      td
                        div(v-for="minute in item.minutes")
                          span(v-if="minute === 0") 00
                          span(v-else) {{ minute }}
              div.column.is-3-desktop.is-3-tablet
                div.is-size-4-mobile.is-size-4-desktop.has-text-weight-medium 群馬高専正門 発 時刻表
                table.table.is-bordered
                  thead
                    tr
                      th 時
                      td 分
                  tbody
                    tr(v-for="item in fromKosenDiagram")
                      th {{ item.oclock }}
                      td
                        div(v-for="minute in item.minutes")
                          span(v-if="minute === 0") 00
                          span(v-else) {{ minute }}
      b-modal(:active.sync="isImageModalActive")
        p.image.is-4by3
          img(src="/22nd/images/parking.png" alt="駐車場")
</template>

<script>
import Hero from "@/components/Hero.vue";
import Meta from "@/assets/mixins/meta.js";
import Timer from "@/components/Timer.Vue";

export default {
  components: {
    Hero,
    Timer
  },
  mixins: [
    Meta
  ],
  data() {
    return {
      isImageModalActive: false,
      meta: {
        title: "アクセス"
      },
      fromShinmaebashiDiagram: [
        {oclock: 9, minutes: [30]},
        {oclock: 10, minutes: [0,30]},
        {oclock: 11, minutes: [0,30]},
        {oclock: 12, minutes: [0]},
        {oclock: 13, minutes: [0,30]},
        {oclock: 14, minutes: [30]},
        {oclock: 15, minutes: [0,30]},
        {oclock: 16, minutes: [0]},
      ],
      fromKosenDiagram: [
        {oclock: 10, minutes: [0,30]},
        {oclock: 11, minutes: [0,30]},
        {oclock: 12, minutes: [30]},
        {oclock: 13, minutes: [0]},
        {oclock: 14, minutes: [0,30]},
        {oclock: 15, minutes: [0,30]},
        {oclock: 16, minutes: [0,30]},
        {oclock: 17, minutes: [0,30]},
        {oclock: 18, minutes: [0,45]}
      ]
    }
  }
}
</script>
