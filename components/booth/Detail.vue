<template lang="pug">
  div.container
    div.notification.is-hidden-mobile
      div.columns
        div.column.is-2
          figure.image.is-128x128
            img(:src="'/images/' + item.circle + '.png'" :alt="item.circle +'のサークルカット'")
        div.column.has-text-left
          h1.title {{ item.title }}
          div.data
            p.has-text-weight-light.grid
              b-icon(icon="account" custom-size="mdi-24px")
              span {{ item.circle }}
            p.has-text-weight-light.grid
                b-icon(icon="map-marker" custom-size="mdi-24px")
                span {{ item.place }}
        a.button.is-danger(@click="deleteBookmark" v-if="isFavoritedItsBooth")
        a.button.is-danger(@click="deleteBookmark" v-if="isFavoritedItsBooth")
          b-icon(icon="star-outline" custom-size="mdi-24px")
          span ブックマークから削除
        a.button.is-warning(@click="addBookmark" v-else)
          b-icon(icon="star" custom-size="mdi-24px")
          span ブックマークに追加
      div.content
        p {{ item.description }}
    div.notification.is-hidden-tablet
      figure.image.is-128x128
        img(:src="'/images/' + circle + '.png'" :alt="circle +'のサークルカット'")
      div.content
        h1.title {{ item.title }}
        p.has-text-weight-light.grid
          b-icon(icon="account" custom-size="mdi-24px")
          span {{ item.circle }}
        p.has-text-weight-light.grid
          b-icon(icon="map-marker" custom-size="mdi-24px")
          span {{ item.place }}
        a.button.is-danger(@click="deleteBookmark" v-if="isFavoritedItsBooth")
        a.button.is-danger(@click="deleteBookmark" v-if="isFavoritedItsBooth")
          b-icon(icon="star-outline" custom-size="mdi-24px")
          span ブックマークから削除
        a.button.is-warning(@click="addBookmark" v-else)
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
  props: ["item"],
  data() {
    return {
      booths: [],
      isFavoritedItsBooth: false
    }
  },
  mounted() {
    const bookmark = JSON.parse(localStorage.getItem("booths_bookmark")) || [];
    this.booths = bookmark;
    this.isFavoritedItsBooth = bookmark.some(value => {
      return (value === this.item.circle)
    })
  },
  methods: {
    addBookmark: function() {
      try {
        this.booths.push(this.circle)
        localStorage.setItem("booths_bookmark", JSON.stringify(this.booths))

        this.$buefy.toast.open({
          message: 'ブックマークに追加しました！',
          position: 'is-bottom',
          type: 'is-success'
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'ブックマークに追加できませんでした',
          position: 'is-bottom',
          type: 'is-danger'
        })
        console.log(error)
      }
    },
    deleteBookmark: function() {
      try {
        this.booths = this.booths.filter(value => value !== this.circle);

        localStorage.setItem("booths_bookmark", JSON.stringify(this.booths))

        this.$buefy.toast.open({
          message: '選択したブックマークを削除しました！',
          position: 'is-bottom',
          type: 'is-success'
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'ブックマークを削除できませんでした',
          position: 'is-bottom',
          type: 'is-danger'
        })
        console.log(error)
      }
    },
    createShareLink(url, params) {
      var encoded_params = [];
      for (var key in params) {
          var value = encodeURIComponent(params[key]);
          encoded_params.push(key + "=" + value);
      }
      return url + "?" + encoded_params.join("&");
    },
    shareToTwitter() {
      return createShareLink("https://twitter.com/intent/tweet", {
        "url": "https://22nd.kokasai.com/booths/" + this.item["circle"],
        "text": this.item["title"] + " - 第22回群馬高専工華祭"
      });
    }
  }
}

</script>
