(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{253:function(t,e,n){"use strict";n.r(e);n(57);var r={data:function(){return{tags:["tag1","tag2"]}},props:{article:{type:Object,required:!0}},computed:{dateTime:function(){return function(time){var t=new Date(time);return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())}}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"my-10 p-6 grid grid-cols-9"},[n("span",{staticClass:"col-span-2 text-xl tracking-wider"},[t._v(t._s(t.dateTime(t.article.createdAt)))]),t._v(" "),n("section",{staticClass:"col-span-7"},[n("AppLabel",{attrs:{tags:t.article.tags}}),t._v(" "),n("router-link",{attrs:{to:"article/"+t.article.title}},[n("span",{staticClass:"block grid-cols-5 mb-10"},[n("h2",{staticClass:"text-4xl font-medium hover:text-green"},[t._v("\n          "+t._s(t.article.title)+"\n        ")])])]),t._v(" "),n("p",{staticClass:"text-xl tracking-wider"},[t._v(t._s(t.article.description))])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLabel:n(266).default})},266:function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,required:!0}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex pb-3"},[n("span",{staticClass:"material-icons"},[t._v("\n    label\n  ")]),t._v(" "),t._l(t.tags,(function(e,r){return n("section",{key:r,staticClass:"text-lg px-2 tracking-wide hover:text-green"},[n("router-link",{attrs:{to:"#"}},[t._v("# "+t._s(e))])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);n(31);var r=n(6),c={components:{ArticleCard:n(253).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent,console.log(r),console.log(),e.abrupt("return",{articles:r});case 7:case"end":return e.stop()}}),e)})))()}},l=n(18),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-y divide-green"},this._l(this.articles,(function(article,t){return e("div",{key:t},[e("ArticleCard",{attrs:{article:article}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleCard:n(253).default})}}]);