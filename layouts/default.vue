<template>
  <div>
    <Schema />
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Schema from "@/components/Schema.vue";

export default {
  components: {Footer, Header, Schema}
}
</script>
