<template lang="pug">
  header
    div(class="notification has-text-left countdown is-light has-text-success")
      i(class="fas fa-3x fa-stopwatch")
      div(id="countdown-timer")
    b-navbar
      template(slot="brand")
        nuxt-link(class="navbar-item" to="/") 第22回 群馬高専工華祭
      template(slot="start")
        b-navbar-item(tag="nuxt-link" :to="{ path: '/' }") トップ
        b-navbar-item(tag="nuxt-link" :to="{ path: '/access/' }") アクセス
        b-navbar-item(tag="nuxt-link" :to="{ path: '/stages/' }") ステージ
        b-navbar-dropdown(label="企画" hoverable)
          b-navbar-item(tag="nuxt-link" :to="{ path: '/booths/list/' }") 企画一覧
      template(slot="end")
        a(class="navbar-item" href="https://twitter.com/kokasai_GNCT")
          b-icon(icon="twitter" size="is-medium")
</template>
