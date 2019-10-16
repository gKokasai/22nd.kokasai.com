<template lang="pug">
  div
    section.hero.is-success.is-medium
      div.hero-body
          div.container
              h1.title {{ title }}
              h2.subtitle {{ subtitle }}
</template>

<script>
export default {
  props: ["title", "subtitle"]
}
</script>
