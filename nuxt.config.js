const pkg = require('./package')
const fs = require("fs")
const jsonData = JSON.parse(fs.readFileSync("assets/booths.json"))
const routes = [
  "/greeting/",
  "/access/",
  "/bookmark/",
  "/stages/",
  "/stages/list",
  "/stages/～女子力ボンジュール～ by ダンス愛好会",
  "/stages/ステージ演奏",
  "/stages/バンド",
  "/stages/女装男装コンテスト",
  "/stages/コスプレコンテスト",
  "/stages/工華祭特別公演",
  "/stages/クイズラリー",
  "/booth/list",
  "/booth/1-1",
  "/booth/1-2",
  "/booth/1-3",
  "/booth/1-4",
  "/booth/1-5",
  "/booth/2-1",
  "/booth/2-2",
  "/booth/2-3",
  "/booth/2-4",
  "/booth/2-5",
  "/booth/3J",
  "/booth/3M",
  "/booth/3E",
  "/booth/3K",
  "/booth/3C",
  "/booth/コンパスカフェ",
  "/booth/4J",
  "/booth/4K",
  "/booth/4M",
  "/booth/4E",
  "/booth/4C",
  "/booth/5C",
  "/booth/5E",
  "/booth/5J",
  "/booth/5K",
  "/booth/5M",
  "/booth/剣道部",
  "/booth/構造デザイン研究会",
  "/booth/硬式野球部",
  "/booth/柔道部",
  "/booth/女子バスケットボール部",
  "/booth/将棋部",
  "/booth/バスケットボール部",
  "/booth/陸上競技部",
  "/booth/美術部",
  "/booth/茶道部",
  "/booth/卓球部",
  "/booth/水泳部",
  "/booth/SF研究部",
  "/booth/エコノパワー愛好会",
  "/booth/サッカー部",
  "/booth/硬式テニス部",
  "/booth/バレーボール部",
  "/booth/フットサル愛好会",
  "/booth/ロボット研究会",
  "/booth/写真部",
  "/booth/電算部",
  "/booth/文芸部",
  "/booth/Eグルジャンプ",
  "/booth/専攻科有志企画",
  "/booth/理科部",
  "/booth/3dデザイン研究会",
  "/booth/バドミントン部"
]

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: https://ogp.me/ns#'
    },
    titleTemplate: '%s - 第22回 群馬高専工華祭',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "2019/11/02~2019/11/03に開催する第22回群馬高専工華祭の公式Webサイトです。" },
      { hid: "og:title", property: "og:title", content: "第22回 群馬高専工華祭"},
      { hid: "og:type", property: "og:type", content: "website"},
      { hid: "og:url", property: "og:url", content: "https://www.kokasai.com/22nd/"},
      { hid: "og:description", property: "og:description", content: "2019/11/02~2019/11/03に開催する第22回群馬高専工華祭の公式Webサイトです。"},
      { hid: "og:email", property: "og:email", content: "kokasai.gnct@gmail.com"},
      { hid: "og:site_name", property: "og:site_name", content: "群馬高専工華祭実行委員会 公式サイト"},
      { hid: "og:locale", property: "og:locale", content: "ja_JP"},
      { hid: "og:image", property: "og:image", content: "/logo.png"},
      { name: "twitter:card", content: "summary"},
      { name: "twitter:site", content: "@kokasai_GNCT"},
      { name: "twitter:url", content: "https://kokasai.com/22nd/"},
      { name: "twitter:title", content: "Home - 第22回 群馬高専工華祭"},
      { name: "twitter:description", content: "2019/11/02~2019/11/03に開催する第22回群馬高専工華祭の公式Webサイトです。"},
      { name: "twitter:image", content: "/logo.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      //{ rel: 'stylesheet', href: '//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css' }
    ],
    script: [
      { src: "https://platform.twitter.com/widgets.js", charset:"utf-8", async: ""}
    ]
  },

  env: {
    jsonData: jsonData,
  },

  generate: {
    route: routes
  },

  router: {
    base: "/22nd/",
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/sitemap',
    "moment"
  ],

  buefy: {
    defaultTooltipType: "is-success"
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: "https://kokasai.com/22nd/",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // 静的ジェネレート時にも利用
    exclude: [
      '/404*', // 404ページは除く
    ],
    routes: routes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
