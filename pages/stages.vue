<template lang="pug">
  div
    Hero(title="ステージ企画")
    p 工事中……
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components: {
    Hero
  },
  data() {
    return {
      title: "ステージ企画"
    }
  }
}
</script>
