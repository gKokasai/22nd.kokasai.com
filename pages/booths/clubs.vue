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
  data() {
    return {
      items: [
        {circle: "電算部", boothName: "Dの挑戦状", place:"学生ホール"},
        {circle: "文芸部", boothName: "文芸部", place: "学生ホール"}
      ],
      heroTitle: "部活動企画",
      meta: {
        title: "部活動企画"
      }
    }
  }
}
</script>
