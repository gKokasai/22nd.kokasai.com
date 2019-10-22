<template lang="pug">
  div.container
    div.notification.is-hidden-mobile
      div.columns
        div.column.is-2
          figure.image.is-128x128
            img(:src="'/22nd/images/' + item.organization + '.png'" :alt="item.organization +'のサークルカット'")
        div.column.has-text-left
          h1.title {{ title }}
          div.data
            p.has-text-weight-light.grid
              b-icon(icon="account" custom-size="mdi-24px")
              span {{ item.organization }}
            p.has-text-weight-light.grid
              b-icon(icon="map-marker" custom-size="mdi-24px")
              span {{ item.place }}
            p.has-text-weight-light.grid
              b-icon(icon="clock-outline" size="mdi-24px")
              span
                span(v-for="schedule in item.schedules") {{ schedule.startedTime | moment }} ~ {{ schedule.endedTime | moment }} <br />
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
    div.notification.is-hidden-tablet
      figure.image.is-128x128
        img(:src="'/22nd/images/' + item.organization + '.png'" :alt="item.organization +'のサークルカット'")
      div.content
        h2.title {{ title }}
        p.has-text-weight-light.grid
          b-icon(icon="account" custom-size="mdi-24px")
          span(style="margin-left: 4px;") {{ item.organization }}
        p.has-text-weight-light.grid
          b-icon(icon="map-marker" custom-size="mdi-24px")
          span(style="margin-left: 4px;") {{ item.place }}
        p.has-text-weight-light.grid
            b-icon(icon="clock-outline" size="mdi-24px")
            span
              span(v-for="schedule in item.schedules") {{ schedule.startedTime | moment }} ~ {{ schedule.endedTime | moment }} <br />
        a.button.is-warning
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: 30px 1fr;
}
.data {
	display: grid;
	grid-gap: 5px;
}
</style>

<script>
import moment from "moment";

export default {
  props: ["item", "title"],
  filters: {
    moment: function (date) {
      return moment(date).format("YYYY.MM.DD HH:mm");
    }
  }
}
</script>
