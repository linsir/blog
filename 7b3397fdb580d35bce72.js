(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{173:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c});var r={baseUrl:"https://api.hdagb.cn/"},c={owner:"linsir",repo:"blog",oauth:{client_id:"a836beed3114dbe478e2",client_secret:"9fa5623b13804e9764abe254389bbcfc21033cca"}}},174:function(t,n,e){"use strict";var r=e(176),c=e.n(r),o=e(173);n.a=c.a.create({baseURL:o.a.baseUrl})},182:function(t,n,e){var content=e(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("715ccc0c",content,!0,{sourceMap:!1})},246:function(t,n,e){"use strict";var r=e(182);e.n(r).a},247:function(t,n,e){(t.exports=e(20)(!1)).push([t.i,".link-description[data-v-5921d0ca]{padding-left:10px;color:#7f8c8d;font-size:90%;font-style:italic}",""])},527:function(t,n,e){"use strict";e.r(n);e(58);var r,c=e(10),o=e(174),l={asyncData:(r=Object(c.a)(regeneratorRuntime.mark(function t(n){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.error,t.next=3,o.a.get("/v1/posts");case 3:return e=t.sent,data=e.data,t.abrupt("return",{posts:data.data,total:data.data.total});case 6:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)}),head:function(){return{title:"Links | Linsir's Blog",meta:[{hid:"description",name:"description",content:"Links"}]}}},d=(e(246),e(5)),component=Object(d.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[e("h1",[t._v("Links")]),t._v(" "),e("div",{staticClass:"links"},[e("ul",t._l(t.links,function(link){return e("li",[e("a",{attrs:{href:""+link.url}},[t._v(t._s(link.name))]),t._v(" "),e("span",{staticClass:"link-description"},[t._v(t._s(link.description))])])}),0)])])},[],!1,null,"5921d0ca",null);n.default=component.exports}}]);