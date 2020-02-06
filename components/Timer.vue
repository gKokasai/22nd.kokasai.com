<template lang="pug">
div.container.is-light.notification
  article.media.has-text-success(v-if="!isKokasaiStarted")
    div.media-left
      b-icon(icon="timer" size="is-large")
    div.media-content
      div.content.is-size-4-mobile.is-size-3-desktop
        p 第22回工華祭まであと
          span.has-text-weight-semibold.is-hidden-mobile {{ countDown }}
          div.has-text-weight-semibold.is-hidden-tablet {{ countDown }}
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
      const startTime = moment('2019-11-02 09:30:00.000');
      const endTime = moment('2019-11-03 16:30:00.000');

      this.now = moment();

      if (startTime.isBefore() && endTime.isAfter()) {
        this.countDown = "第22回工華祭 開催中です！";
        this.isKokasaiStarted = true;
        this.isKokasaiEnded = false;
      } else if(endTime.isBefore()) {
        this.countDown = "第22回工華祭は終了しました";
        this.isKokasaiStarted = true;
        this.isKokasaiEnded = true;
      } else if (startTime.isAfter()) {
        const diff = startTime.diff(moment());
        const duration = moment.duration( diff );
        const days = Math.floor(duration.asDays());
        const hours   = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        this.countDown = days + '日' +  hours + '時間' + minutes + '分' + seconds + '秒';
        this.isKokasaiStarted = false;
        this.isKokasaiEnded = false;
      }
      }, 1000)
  }
}
</script>
