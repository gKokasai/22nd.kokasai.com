<template lang="pug">
div.container.is-light.notification
  article.media.has-text-success(v-if="!isKokasaiStarted")
    div.media-left
      b-icon(icon="timer" size="is-large")
    div.media-content
      div.content
        p.is-size-3-mobile.is-size-3-desktop 第22回工華祭まであと
          span.has-text-weight-semibold  {{ countDown }}
    div.media-right
  article.media.has-text-success(v-else)
    div.media-left
      b-icon(icon="check" size="is-large")
    div.media-content
      div.content
        p.is-size-3-mobile.is-size-3-desktop.has-text-weight-semibold {{ countDown }}
    div.media-right
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      countDown: '',
      isKokasaiStarted: "",
      isKokasaiEnded: ""
    }
  },
  mounted() {
    setInterval(() => {
      const diff = moment('2019-11-03 09:30:00.000').diff(moment());

      const duration = moment.duration( diff );

      const days = Math.floor(duration.asDays());
      const hours   = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      this.now = moment();

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        this.countDown = "第22回工華祭 開催中です！";
        this.isKokasaiStarted = true;
        this.isKokasaiEnded = false;
      } else if(days <= -2 && hours <= -7 && minutes <= 0 && seconds <= 0) {
        this.countDown = "第22回工華祭は終了しました";
        this.isKokasaiStarted = true;
        this.isKokasaiEnded = true;
      } else {
        this.countDown = days + '日' +  hours + '時間' + minutes + '分' + seconds + '秒';
        this.isKokasaiStarted = false;
        this.isKokasaiEnded = false;
      }
      }, 1000)
  }
}
</script>
