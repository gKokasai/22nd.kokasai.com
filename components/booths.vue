<template lang="pug">
  div
    Hero(:title="heroTitle")
    div.container
      Booth(:items="items")
</template>

<script>
import Hero from "@/components/Hero.vue";
import Booth from "@/components/Booth.vue";

export default {
  components: {
    Hero,
    Booth
  },
  props: ["items", "heroTitle"]
}
</script>
