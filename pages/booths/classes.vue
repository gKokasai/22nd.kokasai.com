<template lang="pug">
  div
    Booths(:items="items" :heroTitle="heroTitle")
    div(v-for="(item,label) in items")
      p "/booth/{{ label }}",
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
      heroTitle: "クラス企画",
      meta: {
        title: "クラス企画"
      }
    }
  }
}
</script>
