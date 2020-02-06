<template lang="pug">
  div
    stageDetailComponents(:item="json[boothName]" :title="boothName")
</template>

<script>
import stageDetailComponents from "@/components/stage/Detail.vue";
import Meta from "~/assets/mixins/meta.js";

export default {
  layout: "boothDetail",
  mixins: [
    Meta
  ],
  components: {
    stageDetailComponents
  },
  asyncData () {
    return {
      json: process.env.jsonData.stages
    }
  },
  data() {
    return {
      meta: {
        title: this.$route.params.stage,
      },
      boothName: this.$route.params.stage
    }
  }
}
</script>
