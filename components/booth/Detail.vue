<template lang="pug">
  div.container
    div.notification.is-hidden-mobile
      div.columns
        div.column.is-2
          figure.image.is-128x128
            img(:src="'/22nd/images/' + circle + '.png'" :alt="circle +'のサークルカット'")
        div.column.has-text-left
          h1.title {{ item.title }}
          div.data
            p.has-text-weight-light.grid
              b-icon(icon="account" custom-size="mdi-24px")
              span {{ circle }}
            p.has-text-weight-light.grid
                b-icon(icon="map-marker" custom-size="mdi-24px")
                span {{ item.place }}
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
    div.notification.is-hidden-tablet
      figure.image.is-128x128
        img(:src="'/22nd/images/' + circle + '.png'" :alt="circle +'のサークルカット'")
      div.content
        h1.title {{ item.title }}
        p.has-text-weight-light.grid
          b-icon(icon="account" custom-size="mdi-24px")
          span {{ circle }}
        p.has-text-weight-light.grid
          b-icon(icon="map-marker" custom-size="mdi-24px")
          span {{ item.place }}
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: 27px 1fr;
}
.data {
	display: grid;
	grid-gap: 5px;
}
</style>

<script>
import moment from "moment";

export default {
  props: ["item", "circle"]
}
</script>
