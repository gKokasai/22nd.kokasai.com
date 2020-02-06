<template lang="pug">
  div
    somewhereAplaceOnBooth(:items="items" :place="place")
</template>

<script>
import somewhereAplaceOnBooth from "@/components/booth/place/list.vue";

export default {
  components: {
    somewhereAplaceOnBooth
  },
  data() {
    return {
      place: this.$route.params.place,
      json: process.env.jsonData.booths,
      items: []
    }
  },
  mounted() {
    this.items = this.json.filter(value => value !== this.place)
  }
}
</script>
