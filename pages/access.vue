<template lang="pug">
div
  Hero(title="アクセス")
  div.container
    div.columns.is-light.has-text-success.has-text-centered
      div.column
        article(class="title is-child notification is-light has-text-success has-text-centered")
           div.content
            b-icon(icon="car" size="is-large")
            p.is-size-3-mobile 車
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 一般の方は群馬高専 大駐車場に停めことができます。前橋方面の方はぐんまマラソンの交通規制もご確認ください。
      div.column
        article(class="title is-child notification is-light has-text-success has-text-centered")
    div.columns.is-multiline
      div.column.is-full
        Timer
          div.content
            b-icon(icon="train" size="is-large")
            p.is-size-3-mobile 電車
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light JR上越線/両毛線/吾妻線 新前橋駅下車後シャトルバスでN分
    div(class="tile is-parent is-vertical")
        article(class="title is-child notification is-light has-text-success has-text-centered")
          div.content
            b-icon(icon="bus-clock" size="is-large")
            p.is-size-3-mobile シャトルバス
            p.is-size-5-mobile.is-size-5-desktop.has-text-weight-normal 当日2019/11/02、2019/11/03は新前橋駅東口と群馬高専を結ぶシャトルバスが運行されます。
            div.columns.is-multiline.is-half-desktop.is-half-tablet
              div.column
                p.is-size-3-mobile 新前橋駅東口 発 時刻表
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
              div.column
                p.is-size-3-mobile 群馬高専正門 発 時刻表
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
</template>

<script>
import Hero from "@/components/Hero.vue";
import Meta from "@/assets/mixins/meta.js";

export default {
  components: {
    Hero
  },
  mixins: [
    Meta
  ],
  data() {
    return {
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
      ]
    }
  }
}
</script>
