export default {
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: "og:title", property: "og:title", content: this.meta.title },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:description", property: "og:description", content: this.meta.description },
        { hid: "og:email", property: "og:email", content: this.meta.email },
        { name: "twitter:url", content: "https://kokasai.com/22nd"},
        { name: "twitter:title", content: this.meta.title },
        { name: "twitter:description", content: this.meta.description },
        { name: "twitter:image", content: this.meta.image }
      ],
    }
  }
}
