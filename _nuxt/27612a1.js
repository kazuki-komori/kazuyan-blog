(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,n){"use strict";n(58);e.a={computed:{dateTime:function(){return function(time){var t=new Date(time);return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())}},readTime:function(){return function(time){return Math.ceil(time)}}}}},262:function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,required:!0}},methods:{tagIndex:function(t){this.$router.push({path:"/",query:{tag:t}})}}},c=n(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex pb-3"},[n("span",{staticClass:"material-icons"},[t._v("\n    label\n  ")]),t._v(" "),t._l(t.tags,(function(e,r){return n("section",{key:r,staticClass:"cursor-pointer text-lg px-2 tracking-wide hover:text-green"},[n("p",{on:{click:function(n){return t.tagIndex(e)}}},[t._v("# "+t._s(e))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){var content=n(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("44a0d19d",content,!0,{sourceMap:!1})},265:function(t,e,n){t.exports=n.p+"img/kazuyan.7dcc205.jpg"},266:function(t,e,n){t.exports=n.p+"img/twitter-icon.a4dfaf0.png"},267:function(t,e,n){t.exports=n.p+"img/github-icon.f87561b.png"},268:function(t,e,n){"use strict";n(263)},269:function(t,e,n){(e=n(36)(!1)).push([t.i,".nuxt-content h2{padding-bottom:.5rem;border-bottom:1px solid #00cea5}.nuxt-content a{color:#00cea5}.nuxt-content a,.nuxt-content p{font-size:1.2rem}.nuxt-content .nuxt-content-highlight{position:relative}.nuxt-content .filename{position:absolute;padding-top:.5rem;padding-right:1rem;right:0;color:#fff}.p-index__card{top:100px}",""]),t.exports=e},282:function(t,e,n){"use strict";n.r(e);var r=n(12),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-full py-2 text-xl text-gray-800 lg:rounded bg-white"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);n(32);var r=n(6),c={mixins:[n(261).a],data:function(){return{heights:[]}},mounted:function(){this.page||this.$router.push("/")},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog").where({title:r.title}).fetch();case 3:return c=e.sent,l=c[0],e.abrupt("return",{page:l});case 6:case"end":return e.stop()}}),e)})))()}},l=(n(268),n(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.page?r("article",[r("div",{staticClass:"py-10"},[r("h1",{staticClass:"lg:text-5xl text-3xl text-center"},[t._v(t._s(t.page.title))]),t._v(" "),r("div",{staticClass:"pb-16"},[r("section",{staticClass:"flex justify-center items-center pt-3"},[r("span",{staticClass:"flex px-2"},[r("span",{staticClass:"material-icons px-1"},[t._v("\n            cached\n          ")]),t._v("\n          "+t._s(t.dateTime(t.page.createdAt))+"\n        ")]),t._v(" "),r("span",{staticClass:"flex px-2"},[r("span",{staticClass:"material-icons px-1"},[t._v("\n            access_time\n          ")]),t._v("\n          "+t._s(t.readTime(t.page.readingTime))+" min\n        ")])]),t._v(" "),r("section",{staticClass:"flex justify-center items-center pt-4"},[r("AppLabel",{attrs:{tags:t.page.tags}})],1)]),t._v(" "),r("section",{staticClass:"lg:grid lg:grid-cols-9 lg:gap-8"},[r("div",{staticClass:"col-span-7"},[r("AppCard",[r("div",{staticClass:"prose lg:prose-lg max-w-none px-10"},[r("nuxt-content",{attrs:{document:t.page}})],1)])],1),t._v(" "),r("div",{staticClass:"col-span-2"},[r("div",{staticClass:"sticky p-index__card"},[r("AppCard",[r("div",{staticClass:"py-8 px-4"},[r("img",{staticClass:"rounded-full mx-auto w-24 h-24",attrs:{src:n(265),alt:"kazuyanのアイコン"}}),t._v(" "),r("section",{staticClass:"py-4"},[r("p",{staticClass:"text-center text-xl font-medium pb-2"},[t._v("かずやん")]),t._v(" "),r("p",{staticClass:"text-md text-center pb-2"},[r("span",{staticClass:"font-bold text-vueGreen"},[t._v("Vue")]),t._v(" を愛する\n                  "),r("br"),t._v("フロントエンドエンジニア\n                ")]),t._v(" "),r("p",{staticClass:"text-center"},[t._v("Vue/React/Python/Go")]),t._v(" "),r("a",{attrs:{target:"_blank",href:"https://twitter.com/D_kazuyan"}},[r("section",{staticClass:"flex py-4"},[r("img",{staticClass:"rounded rounded-full h-8 w-8 mr-4",attrs:{src:n(266),alt:""}}),t._v(" "),r("p",{staticClass:"hover:text-blue-500"},[t._v("D_kazuyan")])])]),t._v(" "),r("a",{attrs:{target:"_blank",href:"https://github.com/kazuki-komori"}},[r("section",{staticClass:"flex"},[r("img",{staticClass:"rounded rounded-full h-8 w-8 mr-4",attrs:{src:n(267),alt:""}}),t._v(" "),r("p",{staticClass:"hover:text-blue-500"},[t._v("kazuki-komori")])])])])])])],1)])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLabel:n(262).default,AppCard:n(282).default})}}]);