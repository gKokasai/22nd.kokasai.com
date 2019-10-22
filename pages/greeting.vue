<template lang="pug">
  div
    Hero(title="ごあいさつ")
    div.container
      div.columns.is-multiline
        div.column.is-full
          article.notification.is-light.has-text-success
            div.content
              h2.title 作り直される「工華祭」
              p 第22回 工華祭実行委員長
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 工華祭が開催されることを嬉しく思います。
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 今年のテーマは「Re:make ~平成を超えて~」です。元号が変わり、新しい時代となった今年にふさわしいよう、新しいことに「Remake」作り直すという意味が込められています。
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 私は、昨年度学生会の会長を務めましたが、その経験を用いて多くのことを「Remake」できるよう努めてきました。今年は例年より模擬店の数も増え、体育館では、より規模が大きくなり復活した学生バンドを行います。ご来場の方々に楽しんでいただけることを願っています。
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 最後に、開催にあたりまして、多大なるご支援ご協力いただいた教職員、学生、工華祭実行委員の皆様に心よりお礼申し上げます。
        div.column.is-full
          article.notification.is-light.has-text-success
            div.content
              h2.title 開催に寄せて
              p 群馬工業高等専門学校 学生会長
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light この度は、工華祭にお越しいただきありがとうございます。22回目を数える工華祭は多くの方々のご支援により今回も開催を迎えることができます。学生会を代表いたしまして、心より感謝申し上げます。
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light さて、今年は平成から令和へ時代が変わった年ということで、工華祭のテーマを「Re:make 〜平成を超えて〜」と決め、令和最初に良いスタートを切るべく学生全員が本日まで精一杯準備を進めて参りました。各学級、クラブ、有志から多くの模擬店、展示、ステージなどが披露されるこの工華祭は2年に1度。どうか来場される皆様には企画はもちろん、青春を謳歌する群馬高専学生の雰囲気を心ゆくまで楽しんで頂けたら幸いです。
              p.is-size-5-mobile.is-size-5-desktop.has-text-weight-light 最後になりましたが、工華祭開催にあたり、惜しみないご支援ご協力をいただきました関係者の皆様に重ねて感謝申し上げるとともに、今後も変わらぬご指導ご鞭撻をお願い致しまして挨拶とさせていただきます。
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components:{
    Hero
  },
  data() {
    return {

    }
  }
}
</script>
