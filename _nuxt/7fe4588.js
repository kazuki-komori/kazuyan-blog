(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e,n){"use strict";n(58);e.a={computed:{dateTime:function(){return function(time){var t=new Date(time);return"".concat(t.getFullYear(),".").concat(t.getMonth()+1,".").concat(t.getDate())}},readTime:function(){return function(time){return Math.ceil(time)}}}}},260:function(t,e,n){"use strict";n.r(e);var r={props:{tags:{type:Array,required:!0}},methods:{tagIndex:function(t){this.$router.push({path:"/",query:{tag:t}})}}},c=n(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex pb-3"},[n("span",{staticClass:"material-icons"},[t._v("\n    label\n  ")]),t._v(" "),t._l(t.tags,(function(e,r){return n("section",{key:r,staticClass:"cursor-pointer text-lg px-2 tracking-wide hover:text-green"},[n("p",{on:{click:function(n){return t.tagIndex(e)}}},[t._v("# "+t._s(e))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(259).a],data:function(){return{tags:["tag1","tag2"]}},props:{article:{type:Object,required:!0}},computed:{}},c=n(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-10 p-6 grid sm:grid-cols-9"},[n("span",{staticClass:"col-span-2 text-xl tracking-wider pb-2"},[t._v(t._s(t.dateTime(t.article.updatedAt)))]),t._v(" "),n("section",{staticClass:"sm:col-span-7"},[n("section",{staticClass:"flex"},[n("span",{staticClass:"flex pr-4"},[n("span",{staticClass:"material-icons px-1"},[t._v("\n          access_time\n        ")]),t._v("\n        "+t._s(t.readTime(t.article.readingTime))+" min\n      ")]),t._v(" "),n("AppLabel",{attrs:{tags:t.article.tags}})],1),t._v(" "),n("router-link",{attrs:{to:"article/"+t.article.title}},[n("span",{staticClass:"block grid-cols-5 lg:mb-10 mb-4"},[n("h2",{staticClass:"sm:text-4xl text-2xl font-medium hover:text-green"},[t._v("\n          "+t._s(t.article.title)+"\n        ")])])]),t._v(" "),n("p",{staticClass:"text-lg tracking-wider"},[t._v(t._s(t.article.description))])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLabel:n(260).default})},284:function(t,e,n){"use strict";n.r(e);n(32);var r=n(6),c={components:{ArticleCard:n(262).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$content,r=t.query,!(c=r.tag)){e.next=7;break}return e.next=5,n("blog").where({tags:{$contains:c}}).fetch();case 5:return l=e.sent,e.abrupt("return",{articles:l});case 7:return e.next=9,n("blog").fetch();case 9:return o=e.sent,e.abrupt("return",{articles:o});case 11:case"end":return e.stop()}}),e)})))()}},l=n(12),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-y divide-green"},this._l(this.articles,(function(article,t){return e("div",{key:t},[e("ArticleCard",{attrs:{article:article}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleCard:n(262).default})}}]);