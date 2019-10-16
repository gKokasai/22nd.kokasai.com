<template lang="pug">
  div
    Schema
    Header
    main
      nuxt
    Footer
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Schema from "@/components/Schema.vue";

export default {
  components: {Footer, Header, Schema}
}
</script>
