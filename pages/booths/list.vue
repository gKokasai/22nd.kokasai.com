<template lang="pug">
  div
    Booths(:items="items" :heroTitle="heroTitle")
</template>

<script>
import Booths from "@/components/Booths.vue";
import Meta from "~/assets/mixins/meta";

export default {
  mixins: [
    Meta
  ],
  components: {
    Booths
  },
  asyncData() {
    return {
      items: process.env.jsonData.booths
    }
  },
  data() {
    return {
      heroTitle: "クラス・部活動企画一覧",
      meta: {
        title: "クラス・部活動企画一覧"
      }
    }
  }
}
</script>
