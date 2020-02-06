<template lang="pug">
  div
    boothDetailComponents(:item="item" :circle="boothName")
</template>

<script>
import boothDetailComponents from "@/components/booth/Detail.vue";
import Meta from "~/assets/mixins/meta.js";

export default {
  layout: "boothDetail",
  mixins: [
    Meta
  ],
  components: {
    boothDetailComponents
  },
  asyncData () {
    return {
      json: process.env.jsonData.booths
    }
  },
  data() {
    return {
      meta: {
        title: this.$route.params.booth,
      },
      boothName: this.$route.params.booth,
      item: {}
    }
  },
  created() {
    for(var i = 0; i < this.json.length; i++) {
      if (this.json[i]["circle"] === this.boothName) {
        this.item = this.json[i]
      }
    }
  }
}
</script>
