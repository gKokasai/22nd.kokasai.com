<template lang="pug">
div
  Hero(title="第22回 群馬高専工華祭" subtitle="Re:Make ～平成を越えて～")
  section
    div.container
      div.columns.is-multiline.is-variable.is-2.is-light.has-text-success.has-text-centered
        div.column.is-one-third
          article.title.is-child.notification.is-light.has-text-success.has-text-centered
           div.content
            b-icon(icon="textbox" size="is-large")
            p.is-size-3-mobile.is-size-2-desktop.has-text-weight-semibold 名称
            p.is-size-4-mobile.is-size-4-desktop.has-text-weight-light 第22回 群馬高専工華祭
        div.column.is-one-third
          article.title.is-child.notification.is-light.has-text-success.has-text-centered
           div.content
            b-icon(icon="clock" size="is-large")
            p.is-size-3-mobile.is-size-2-desktop.has-text-weight-semibold 日時
            p.is-size-4-mobile.is-size-4-desktop.has-text-weight-light 2019/11/02(土)~2019/11/03(日)
            p.is-size-4-mobile.is-size-4-desktop.has-text-weight-light 両日 09:30~16:30
        div.column.is-one-third
          article.title.is-child.notification.is-light.has-text-success.has-text-centered
           div.content
            b-icon(icon="clipboard-outline" size="is-large")
            p(class="is-size-3-mobile is-size-2-desktop has-text-weight-semibold") テーマ
            p(class="is-size-4-mobile is-size-4-desktop has-text-weight-light") "Re:make ~平成を越えて~"
        div.column.is-one-third
          article.title.is-child.notification.is-light.has-text-success.has-text-centered
           div.content
            span.icon.is-large
              i.mdi.mdi-map-marker
            p(class="is-size-3-mobile is-size-2-desktop has-text-weight-semibold") 場所
            p(class="is-size-4-mobile is-size-4-desktop has-text-weight-light")
              nuxt-link(to="/access/") 群馬工業高等専門学校
        div.column.is-one-third
          article.title.is-child.notification.is-light.has-text-success.has-text-centered
           div.content
            b-icon(icon="account" size="is-large")
            p(class="is-size-3-mobile is-size-2-desktop has-text-weight-semibold") 主催
            p(class="is-size-4-mobile is-size-4-desktop has-text-weight-light") 第22回 群馬高専工華祭実行委員会
</template>

<script>
import Hero from '@/components/Hero.vue'
import Meta from "~/assets/mixins/meta"

export default {
  mixins:[
    Meta
  ],
  components: {
    Hero
  },
  data() {
    return {
      meta: {
        title: "Home"
      }
    }
  }
}
</script>

