
moment().format('YYYY-MM-DD HH:mm:ss');
moment.locale("ja");
const html = document.getElementById("countdown-timer");
let nowIsAfterKokasai = moment().isAfter('2019-11-03 18:00:00');
let nowIsBeforeKokasai = moment().isBefore('2019-11-02 09:00:00');
let diffFromKokasai = moment('2019-11-03 09:00:00').diff(moment());
let duration = moment.duration(diffFromKokasai);
let daysDiff = Math.floor(duration.asDays());
const hoursDiff = duration.hours();
const minutesDiff = duration.minutes();
if (nowIsBeforeKokasai) {
    html.textContent = "第22回工華祭まであと" + daysDiff + "日" + hoursDiff + "時間" + minutesDiff + "分";
} else if (nowIsAfterKokasai) {
    html.textContent = "第22回工華祭は終了しました";
} else {
    html.textContent = "第22回工華祭開催中";
}