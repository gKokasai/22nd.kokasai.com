<template lang="pug">
  div.container
    div.notification.is-hidden-mobile
      div.columns
        div.column.is-2
          figure.image.is-128x128
            img(src="https://bulma.io/images/placeholders/128x128.png")
        div.column.has-text-left
          h1.title {{ item.title }}
          p.has-text-weight-light
            b-icon(icon="account" custom-size="mdi-24px")
            span {{ circle }}
            b-icon(icon="map-marker" custom-size="mdi-24px")
            span {{ item.place }}
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
    div.notification.is-hidden-tablet
      figure.image.is-128x128
        img(src="https://bulma.io/images/placeholders/128x128.png")
      div.content
        h2.title {{ item.title }}
        p.has-text-weight-light
          b-icon(icon="account" custom-size="mdi-24px")
          span {{ circle }}
          b-icon(icon="map-marker" custom-size="mdi-24px")
          span {{ item.place }}
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
</template>

<script>
export default {
  props: ["item", "circle"]
}
</script>
