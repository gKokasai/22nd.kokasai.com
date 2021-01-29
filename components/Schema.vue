<template lang="pug">
  div#schema.
    <script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@graph": [
            {
                "@id": "https://kokasai.com/#organization",
                "@type": "Organization",
                "name": "群馬工業高等専門学校 工華祭実行委員会",
                "url": [
                    "https://kokasai.com/",
                    "https://twitter.com/kokasai_GNCT"
                ]
            },
            {
                "@id": "https://kokasai.com/#website",
                "@type": "WebSite",
                "url": "https://kokasai.com/",
                "name": "群馬高専 工華祭実行委員会 ホームページ",
                "keywords": "群馬高専,群馬工業高等専門学校,National Institute of Technology Gunma College,NITGC,文化祭,工華祭,kokasai",
                "isPartOf": {
                    "@id": "https://kokasai.com/#website"
                },
                "publisher": {
                    "@id": "https://kokasai.com/#organization"
                },
                "sameAs": "https://twitter.com/kokasai_GNCT"
            },
            {
                "@id": "https://22nd.kokasai.com/#toppage",
                "@type": "WebPage",
                "url": "https://22nd.kokasai.com/",
                "name": "第22回 群馬高専工華祭 ホームページ",
                "isPartOf": {
                    "@id": "https://kokasai.com/#website"
                },
                "inLanguage": "ja",
                "keywords": "群馬高専,群馬工業高等専門学校,National Institute of Technology Gunma College,NITGC,文化祭,工華祭 2019,第22回 工華祭,kokasai",
                "publisher": {
                    "@id": "https://kokasai.com/#organization"
                },
                "copyrightHolder": {
                    "@id": "https://kokasai.com/#organization"
                },
                "copyrightYear": 2019,
                "publication": {
                    "@id": "https://22nd.kokasai.com/#event"
                }
            },
            {
                "@id": "https://22nd.kokasai.com/#event",
                "@type": "PublicationEvent",
                "name": "第22回 群馬高専工華祭",
                "isAccessibleForFree": true,
                "inLanguage": "ja",
                "location": {
                    "@type": "PostalAddress",
                    "@language": "ja",
                  	"addressCountry": "日本",
                  	"addressRegion": "群馬県",
              		"addressLocality": "前橋市",
          			"streetAddress": "鳥羽町580番地"
                },
                "organizer": {
                    "@id": "https://kokasai.com/#organization"
                },
                "startDate": [
                    "2019-11-02T09:00:00Z+09:00",
                    "2019-11-03T09:00:00Z+09:00"
                ],
                "endDate": [
                    "2019-11-03T18:00:00Z+09:00",
                    "2019-11-02T18:00:00Z+09:00"
                ]
            }
        ]
    }
    </script>
</template>
