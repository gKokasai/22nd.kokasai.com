(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,c,l){"use strict";var t={props:["title","subtitle"]},r=l(6),component=Object(r.a)(t,(function(){var e=this,c=e.$createElement,l=e._self._c||c;return l("section",{staticClass:"hero is-success is-medium"},[l("div",{staticClass:"hero-body"},[l("div",{staticClass:"container"},[l("h1",{staticClass:"title"},[e._v(e._s(e.title))]),l("h2",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))])])])])}),[],!1,null,null,null);c.a=component.exports},292:function(e,c,l){"use strict";var t={props:["items","place"],components:{Hero:l(153).a},created:function(){var e=this;this.samePlaceBooths=this.items.filter((function(c){return c.placeBlock!==e.place}))},data:function(){return{samePlaceBooths:[]}}},r=l(6),component=Object(r.a)(t,(function(){var e=this,c=e.$createElement,l=e._self._c||c;return l("div",[l("Hero",{attrs:{title:"ジャンル "+e.place+"の企画一覧"}}),l("div",{staticClass:"container"},[e._m(0),e._l(e.items,(function(c){return l("article",{staticClass:"media"},[l("figure",{staticClass:"media-left"},[l("div",{staticClass:"image is-128x128"},[l("img",{attrs:{src:"/images/"+c.circle+".png",alt:c.circle+"のサークルカット"}})])]),l("div",{staticClass:"media-content"},[l("div",{staticClass:"content"},[l("p",{staticClass:"is-size-5-mobile is-size-4-desktop has-text-weight-bold"},[l("nuxt-link",{attrs:{to:"/booths/"+c.circle}},[e._v(e._s(c.title))])],1),l("p",{staticClass:"has-text-weight-light"},[l("b-icon",{attrs:{icon:"account",size:"is-small"}}),l("span",[e._v(e._s(c.circle))])],1),l("p",{staticClass:"has-text-weight-light"},[l("b-icon",{attrs:{icon:"map-marker",size:"is-small"}}),l("span",[e._v(e._s(c.place))])],1)])]),l("div",{staticClass:"media-right"},[l("b-icon",{attrs:{icon:"star-outline",size:"is-large"}})],1)])}))],2)],1)}),[function(){var e=this.$createElement,c=this._self._c||e;return c("figure",{staticClass:"image"},[c("img",{staticStyle:{height:"600px",width:"480px"},attrs:{src:"/images/tentsmap.svg",alt:"Map"}})])}],!1,null,null,null);c.a=component.exports},308:function(e,c,l){"use strict";l.r(c);var t={components:{somewhereAplaceOnBooth:l(292).a},methods:{},data:function(){return{genre:this.$route.params.genre,json:[{circle:"1-1",place:"第2講義棟 1F 2-102教室",title:"STAR WARS ～ダースベイダーの復活～",description:"今こそ、帝国軍の息の根を止める。さあ、敵地に侵入しダースベイダーを倒せ!!あなたも”STARWARS”を体感せよ。補足:当企画はゲーム形式です。景品もあるよ♪",genre:["game"],placeBlock:"第1・2講義棟"},{circle:"1-2",place:"第1講義棟 1F 2-101教室",title:"憩いの場",description:"1年2組は持ち込みOK、駄べりOKの休憩所をやります！ ドリンクも販売します 不定期でライブもします！ 是非お越しください！！！",genre:["other"],placeBlock:"第1・2講義棟"},{circle:"1-3",place:"第1講義棟 1F 1-104教室",title:"人狼カフェ～飲んどる場合かーッ～",description:"1-3の出し物は人狼ゲームです。 人狼ゲームは人狼陣営と村人陣営で戦うテーブルゲームで、よく話し合うゲームなのでコミュニケーション力を生かして遊びます。 また、カフェもあるのでぜひ1-3に寄ってみてください。",genre:["food"],placeBlock:"第1・2講義棟"},{circle:"1-4",place:"赤の広場 テントQ",title:"ふるーつあめやさん。",description:"1年4組は赤の広場でフルーツ飴を販売してるよー飴お勝ってくれた人にはおまけもあるのでぜひ来てね～",genre:["food"],placeBlock:"赤の広場"},{circle:"1-5",place:"群嶺会館 1F 食堂",title:"タイムアタックお化け屋敷",description:"皆さんこんにちは。私たち1年5組は、タイムアタックとお化け屋敷を掛け合わせた、「タイムアタックお化け屋敷」というものをやります。聞きなれないな、と思うかもしれませんが、私たちが考えた、涼しさ全開の楽しいお化け屋敷となっております。気になった方は、ぜひ食堂にいらしてください!",genre:["game"],placeBlock:"群嶺会館"},{circle:"2-1",place:"第1講義棟 3F 1-302教室",title:"シューティングカフェ",description:"その名の通り、射的とカフェを融合したクラス展示です。射的ゲームで疲れたら、カフェでくつろぎましょう。おいしいパンケーキやサンドウィッチをご用意してます!!",genre:["game","food"],placeBlock:"第1・2講義棟"},{circle:"2-2",place:"図書館前 テントK",title:"あき無し商店",description:"「食べても食べても飽きない美味しさ」 名古屋名物「玉せん」を工華祭verにアレンジ。パリパリおせんべいとトロッと卵、きっとあなたも玉せんファンに！",genre:["food"],placeBlock:"図書館"},{circle:"2-3",place:"第1講義棟 3F 1-304教室",title:"賭博黙示録",description:"トランプやルーレットといったカジノを代表するゲームから、輪投げなど簡単なゲームまで、大人も子供も楽しめるカジノとなっています。ぜひ、遊びに来てください。",genre:["game"],placeBlock:"第1・2講義棟"},{circle:"2-4",place:"第1講義棟 3F 1-303教室",title:"Baked confectionery cafe",description:"2-4ではカフェを開店中!味も見た目もばっちり。まさに「インスタ映え」なケーキと飲み物で少し休憩していきませんか??時間によっては出来たても!?お待ちしています!!",genre:["food"],placeBlock:"第1・2講義棟"},{circle:"2-5",place:"第2講義棟 3F 2-302教室",title:"赤点からの脱出",description:"君たちは数々と繰り出される謎を解き明かすことができるのか!?第二講義棟三階で皆さんのお越しをお待ちしています!これであなたも名探偵",genre:["game"],placeBlock:"第1・2講義棟"},{circle:"3J",place:"赤の広場 テントP",title:"最強パンケーキ",description:"パンケーキを焼きます。きれいに焼きますので、是非ご賞味ください。余談なんですけど、「パンケーキ食べたい」ってやってるのはあれどっからきたネタなんですかね?",genre:["food"],placeBlock:"赤の広場"},{circle:"3M",place:"第2体育館",title:"なおやの的屋～なお屋～",description:"“機械からしいことがしたい!”という想いからこの企画はスタートしました。銃の設計から制作まで全て3M!!普通の射的とは全く異なる射的が君を待っている!!",genre:["game"],placeBlock:"第2体育館"},{circle:"3E",place:"第1講義棟 2F 1-204教室",title:"工作教室",description:"ここでは、AMラジオやちょっと変わった釣りを体験することができます。また、2日とも10:00、11:00、14:00、15:00からLEDの製作体験も開催します。ぜひ遊びに来てみてください！",genre:["experience"],placeBlock:"第1・2講義棟"},{circle:"3K",place:"第2講義棟 2F 2-202教室",title:"カジノ喫茶 たぴおか",description:"少しだけ日常から離れた時を過ごしませんか？心震える賭けの先には何があるのか…。さらにカジノで疲れた心を癒すタピオカも用意しております。",genre:["food","game"],placeBlock:"赤の広場"},{circle:"3C",place:"赤の広場 テントC",title:"みんなでチュロる",description:"赤の広場でチュロス売ってます。貴方のためにチュロスを作ります。是非きてね！！",genre:["food"],placeBlock:"赤の広場"},{circle:"コンパスカフェ",place:"電子情報工学科棟 1F J-102教室",title:"コンパスカフェ",description:"あの有名なスマホ型eスポーツ「#コンパス」のカフェが群馬高専に?!eスポーツに興味がある人やそうでない人も気軽にお越しください!コンパスでみんなと一緒に楽しみましょう!",genre:["game"],placeBlock:"群嶺会館"},{circle:"4J",place:"図書館前 テントJ & 第1講義棟 2F 1-203教室",title:"HelloWorldのポップコーン",description:"4Jはポップコーン(場所:図書館前 テントJ)とゲームセンター(場所:第1講義棟 2F 1-203教室)を別々の場所で展開中!出来たてのおいしいポップコーンと真心を込めて作成したオリジナルのゲームで皆様をおもてなしします。",genre:["food","game"]},{circle:"4K",place:"図書館前 テントI",title:"あげぱんアイス",description:"暖かい揚げパンに冷たいアイスを挟んだあげぱんアイスを販売します。もちろん普通のあげぱんも用意しています。ぜひ食べに来てください!",genre:["food"],placeBlock:"群嶺会館"},{circle:"4M",place:"第1講義棟 1F 1-103教室",title:"射的",description:"ナーフを使用した本格的な射的です!最後には豪華賞品もプレゼント!銃の腕に自信のある方、初心者の方も大歓迎!ぜひお越しください!",genre:["game"],placeBlock:"第1・2講義棟"},{circle:"4E",place:"第2体育館",title:"コスプレカフェ",description:"工華祭に来たのなら4Eのコスプレカフェに参りましょう。異様な服装をしたお兄さん、お姉さんがご主人様、お嬢様を手厚くお迎えします。 お手頃価格で情熱的なひとときを。",genre:["food"],placeBlock:"第2体育館"},{circle:"4C",place:"機械工学科棟北 テントF",title:"チュロス工房「メロンパン」",description:"メロンパンは取り扱っておりません。",genre:["food"],placeBlock:"図書館"},{circle:"5C",place:"図書館前 テントI",title:"私のタピオカ❤",description:"5Cでは、タピオカドリンクを販売します。味は、ミルクティー、サイダー、パイン等を用意しています!ぜひ飲みに来てください!",genre:["food"],placeBlock:"図書館"},{circle:"5E",place:"第二講義棟 2F 2-201教室",title:"デザイン実験作品展示",description:"構想から制作に至るまで各班のアイデアや技術の結集した作品が揃っています。5年間の集大成となる作品たちを、ぜひご覧ください。",genre:[""],placeBlock:"第1・2講義棟"},{circle:"5J",place:"図書館内ロビー",title:"休憩処",description:"ちょっと歩き疲れたら、5-Jの休憩所で一息ついてみませんか？飲食持ち込みOKなので、食事や待ち合わせにご活用ください。",genre:["other"],placeBlock:"図書館"},{circle:"5K",place:"第二講義棟 3F 2-301教室",title:"クイズ喫茶",description:"5K クイズ喫茶 で定番のクイズから高専生が本気で作った難問まで幅広いクイズをお楽しみください! 詳細は「工華祭 クイズ喫茶」で検索",genre:["food"],placeBlock:"第1・2講義棟"},{circle:"5M",place:"第2体育館",title:"M印良品",description:"これぞ群馬高専品質！実習工場のレーザー加工機で切り抜き，学生の手で丁寧に仕上げたキーホルダを販売しています。Ｍ科生の機械屋魂がこもった良品をぜひお買い求めください。",genre:["buy"],placeBlock:"第2体育館"},{circle:"剣道部",place:"図書館前 テントH",title:"俺のフランクフルト",description:"剣道部はフランクフルト!なんといってもこいつは群馬高専で一番うまいフランクフルトだよ!!毎年2日目には売り切れちまう早い者勝ちだ!",genre:["food"],placeBlock:"図書館"},{circle:"構造デザイン研究会",place:"図書館前 テントJ",title:"ヤバイ串もの屋さん(だんご)",description:"どうもデザコンです。串もの売ってます!(団子とか)橋の載荷実験もやる予定です!!みんな見に来てね!!どうか買ってね!!",genre:["food"],placeBlock:"図書館"},{circle:"硬式野球部",place:"赤の広場 テントC",title:"坊主のうどん屋",description:"みなさん、こんにちは!!寒くなってきたこの時期にぴったりな、温かいうどんはいかがですか?お昼ごはんや軽食に、ぜひ来てください!",genre:["food"],placeBlock:"赤の広場"},{circle:"柔道部",place:"機械工学科棟北 テントG",title:"男のじゃがバター",description:"私たち柔道部はじゃがバターを行います。工華祭当日は10月の終わりということもあり、肌寒くなるでしょう。そんな時においしいじゃがバターを食べれば、心も体も温まるでしょう。是非じゃがバターを食べに来てください!!",genre:["food"],placeBlock:"図書館"},{circle:"女子バスケットボール部",place:"赤の広場 テントE",title:"落書きせんべい",description:"好きなキャラクターを描いたり、推しの名前を書いたり。とにかくキラキラさせて可愛くしとけばインスタ映え間違いなし!!夕日の広場で待ってるよ～! #落書きせんべい",genre:["food"],placeBlock:"赤の広場"},{circle:"将棋部",place:"赤の広場 テントD",title:"一口ドーナツ&揚げ餅屋",description:"外はサクサク中はモチモチのドーナツと揚げ餅を販売します。部員に勝利して無料券を手に入れよう!デュエルスタンバイ!!",genre:["food"],placeBlock:"赤の広場"},{circle:"バスケットボール部",place:"赤の広場 テントB",title:"焼きそばずんずん",description:"どうも、男子バスケットボール部です。男バスは例年通り焼きそばを販売します。部員全員でめちゃくちゃおいしい焼きそばをつくるんでぜひ足を運んでください、お待ちしております。",genre:["food"],placeBlock:"赤の広場"},{circle:"陸上競技部",place:"群嶺会館前 テントM",title:"18人の焼き鳥戦士",description:"そうだ、焼き鳥食べよう。",genre:["food"],placeBlock:"群嶺会館"},{circle:"美術部",title:"美術作品鑑賞会",description:"今年も例年通り部員の作品を展示します。また、3学年の部員を中心に作成したアニメも展示します。ぜひ学生ホールまで観に来てください。",genre:["experience"],place:"第1講義棟 1F 学生ホール",placeBlock:"第1・2講義棟"},{circle:"茶道部",place:"群嶺会館裏",title:"工華祭茶会",description:"普段、見られないお茶を点てているところを見ながら抹茶を飲めます。おいしいお茶とお菓子を用意していますので、ぜひお越しくださいませ。",genre:["experience"],placeBlock:"群嶺会館"},{circle:"卓球部",place:"赤の広場 テントQ",title:"銅だこ",description:"日々、練習をする中で我々はピンポン玉を必ず目にします、そこからヒントを得て、型の似ているたこ焼きを作ろうとなりました。全て手作りの出来立てで熱々のたこ焼きを提供します。是非来てください。",genre:["food"],placeBlock:"赤の広場"},{circle:"水泳部",place:"群嶺会館前 テントL",title:"ぷわぷわましゅまろはうす",description:"水泳部では、焼きマシュマロを販売します。バーベキューなどでやってことのある方もいると思います。マシュマロは焼くとトロトロで甘みが増しておいしくなります。ぜひ、いらしてください！",genre:["experience"],placeBlock:"群嶺会館"},{circle:"SF研究部",place:"電子情報工学科棟 1F J-101教室",title:"ライブRPG&ボードゲーム喫茶",description:"どうもSF研究部です。例年行っている観客参加型の劇『ライブRPG』に加え、今年から新たに『ボードゲーム喫茶』なるものも始めてみました。いつ来ても楽しめるようになったので、遊びに来てくださいね。",genre:["experience"],placeBlock:"群嶺会館"},{circle:"エコノパワー愛好会",place:"赤の広場 テントA",title:"工華祭名物 チキンサンド",description:"工華祭名物チキンサンド エコラン車両の展示もあり〼",genre:["food"],placeBlock:"赤の広場"},{circle:"サッカー部",place:"赤の広場 テントE",title:"CHOCOっとバナナ",description:"サッカー部は今年もチョコバナナを販売します。工華祭といえばサッカー部のチョコバナナ！！さらに今年はバナナ・オレも販売します。是非立ち寄ってください。",genre:["food"],placeBlock:"赤の広場"},{circle:"硬式テニス部",place:"赤の広場 テントD",title:"お好み焼き",description:"硬式テニス部では、お好み焼きの屋台をやります。部員の作る美味しいお好み焼きを200円で販売します。ぜひ、購入してください。",genre:["food"],placeBlock:"赤の広場"},{circle:"バレーボール部",place:"赤の広場 テントL",title:"福ちゃんの美味しい唐揚げ",description:"群馬県の鶏肉を使った本格的なプロの味！！インスタ映え？しません！！1度食べたら止まらない！ぜひバレーボール部のからあげを食べに来てください！",genre:["food"],placeBlock:"赤の広場"},{circle:"フットサル愛好会",place:"機械工学科棟北 テントG",title:"ワッフレスト！～あなたにとって最上級ワッフル～",description:"最近タピオカやらケーキやらパフェやら騒いでますが、そんなものはあまあまの甘ちゃんなんですよ。今の時代はワッフルこれしかありません。・・・なんだって「ワッフルも甘い」だって・・・そんなのどうだっていいだろ。とりあえずワッフルくっとけ。以上。",genre:["food"],placeBlock:"図書館"},{circle:"ロボット研究会",place:"第二体育館",title:"高専ロボコン",description:"過去2回工華祭とロボコン地区大会の日程が被ってろくな企画をしてこなかったロボ研が満を持して参加！今年の高専ロボコン地区大会に出場したロボットを動かしています。他にも全国大会に出場した歴代のロボットたちにあえるかも。",genre:["experience"],placeBlock:"第2体育館"},{circle:"写真部",place:"第二体育館",title:"学生写真展",description:"写真部は第二体育館で写真展を開きます。例年はA4まででしたが、今年はA3の写真まで展示できることになりました。また、部員も増えたためよりレベルの高い作品が集まると思います。大勢のご来場お待ちしています。",genre:["experience"],placeBlock:"第2体育館"},{circle:"電算部",title:"Dの挑戦状",description:"電算部員が制作したゲームを展示します。展示されるゲームはダウンロード可能です。また、部誌「D言語 ver.2019」も配布していますので、こちらもぜひどうぞ。",genre:["game"],place:"第1講義棟 1F 学生ホール",placeBlock:"第1・2講義棟"},{circle:"文芸部",title:"文芸部",description:"部員の書いた小説を収めた小冊子「1 Piece Puzzle」および「ぼへみあん」を頒布します。傑作ばかりですので、是非持ち帰って御覧ください。",genre:["experience"],place:"第1講義棟 1F 学生ホール",placeBlock:"第1・2講義棟"},{circle:"Eグルジャンプ",title:"Eグルジャンプ",description:"SwiftやC♯などを使った、自作ゲームを展示・体験できる場所です。是非見に来てください！(フェア○ーズス○ーリーはありません)※有志企画で人が少数のため、12:00~13:00は休憩中",genre:["experience"],place:"第1講義棟 2F 1-202教室",placeBlock:"第1・2講義棟"},{circle:"専攻科有志企画",title:"専攻科企画展",description:"専攻科生が企画を持ち寄りました。ミニゲームありドリンク販売あり、最近話題の光のアートありのなんでも企画です。高専生活の集大成、ぜひご覧ください。",genre:["experience"],place:"第1講義棟 1F 1-102教室",placeBlock:"第1・2講義棟"},{circle:"理科部",place:"赤の広場 テントA",title:"酸っぱい理科屋さん",description:"簡単！クエン酸ジュース！作り手次第で味が変わる… あなたは美味しく作れるか？スマホで出来るVRもあり〼 そして、オリジナルカードゲーム‪α‬- schoonができるのはココだけ！",genre:["experience","food"],placeBlock:"赤の広場"},{circle:"3dデザイン研究会",place:"赤の広場 テントA",title:"ヤバイキーホルダー屋さん",description:"それは近い将来、生活必需品になりえるかもしれない高度なテクノロジーの一つである。従来のプラスチック造形ではなしえない技術にあなたも触れてみませんか？",genre:["buy"],placeBlock:"赤の広場"},{circle:"バドミントン部",place:"図書館前 テントH",title:"(株)いもこうき",description:"「Why don`t you buy french-fries?」～なぜフライドポテトを買わないのか?～",genre:["food"],placeBlock:"図書館"},{circle:"学生会",place:"図書館前 テントK",title:"わたあめ屋ワタナベ",description:"わたあめ 50 円です！工華祭の思い出におひとつどうぞ。",genre:["food"],placeBlock:"図書館"},{circle:"ソフトテニス部",place:"機械工学科棟北 テントF",title:"こた爺のクレープ工房",description:"生地から作る本格クレープです。種類もたくさんあり、出来立てホカホカのクレープを是非とも召し上がってください！！",genre:["food"],placeBlock:"図書館"}],items:[]}},created:function(){this.items=function(e,c){for(var l=[],i=0;i<e.length;i++)if(0!==e[i].genre.length)for(var t=0;t<e[i].genre.length;t++)e[i].genre[t]===c&&l.push(e[i]);return l}(this.json,this.genre)}},r=l(6),component=Object(r.a)(t,(function(){var e=this,c=e.$createElement,l=e._self._c||c;return l("div",[l("somewhereAplaceOnBooth",{attrs:{items:e.items,place:e.genre}})],1)}),[],!1,null,null,null);c.default=component.exports}}]);