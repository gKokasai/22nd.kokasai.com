<template lang="pug">
  div
    somewhereAplaceOnBooth(:items="items" :place="genre")
</template>

<script>
import somewhereAplaceOnBooth from "@/components/booth/place/list.vue";

export default {
  components: {
    somewhereAplaceOnBooth
  },
  methods: {

  },
  data() {
    return {
      genre: this.$route.params.genre,
      json: process.env.jsonData.booths,
      items: []
    }
  },
  created() {
    function findThisGenre(list, genre) {
      const emptylist = [];
      for(var i = 0; i < list.length; i++) {
        if(list[i]["genre"].length !== 0) {
          for (var j = 0; j < list[i]["genre"].length; j++) {
            if(list[i]["genre"][j] === genre) {
              emptylist.push(list[i]);
            }
          }
        }
      }
      return emptylist
    }
    this.items = findThisGenre(this.json, this.genre)
  }
}
</script>

