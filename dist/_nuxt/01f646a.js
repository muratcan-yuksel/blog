(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{292:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("65a8502e",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(292)},294:function(t,e,n){var r=n(82)(!1);r.push([t.i,'body[data-v-cb61285e]{margin:0;font-family:"Lato",sans-serif}.sidebar[data-v-cb61285e]{margin:0;padding:0;width:200px;background-color:#f1f1f1;position:fixed;height:100%;overflow:auto}.sidebar a[data-v-cb61285e]{display:block;color:#000;padding:16px;text-decoration:none}.sidebar a.active[data-v-cb61285e]{background-color:#04aa6d;color:#fff}.sidebar a[data-v-cb61285e]:hover:not(.active){background-color:#555;color:#fff}div.content[data-v-cb61285e]{margin-left:200px;padding:1px 16px;height:1000px}@media screen and (max-width:700px){.sidebar[data-v-cb61285e]{width:100%;height:auto;position:relative}.sidebar a[data-v-cb61285e]{float:left}div.content[data-v-cb61285e]{margin-left:0}}@media screen and (max-width:400px){.sidebar a[data-v-cb61285e]{text-align:center;float:none}}',""]),t.exports=r},296:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("aaa053fa",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.r(e);var r={},o=(n(293),n(68)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar"},[n("a",{staticClass:"active",attrs:{href:"#home"}},[t._v("Home")]),t._v(" "),n("a",{attrs:{href:"#news"}},[t._v("News")]),t._v(" "),n("a",{attrs:{href:"#contact"}},[t._v("Contact")]),t._v(" "),n("a",{attrs:{href:"#about"}},[t._v("About")])]),t._v(" "),n("div",{staticClass:"content"},[n("h2",[t._v("Responsive Sidebar Example")]),t._v(" "),n("p",[t._v("\n      This example use media queries to transform the sidebar to a top\n      navigation bar when the screen size is 700px or less.\n    ")]),t._v(" "),n("p",[t._v("\n      We have also added a media query for screens that are 400px or less,\n      which will vertically stack and center the navigation links.\n    ")]),t._v(" "),n("h3",[t._v("Resize the browser window to see the effect.")])])])}],!1,null,"cb61285e",null);e.default=component.exports},301:function(t,e,n){"use strict";n(296)},302:function(t,e,n){var r=n(82)(!1);r.push([t.i,'.links[data-v-0f982d2c]{color:#000}.para[data-v-0f982d2c]{color:#515151;font-size:1rem}#mainContent[data-v-0f982d2c]{font-family:"PT Sans",Helvetica,Arial,sans-serif}body[data-v-0f982d2c]{margin:0;font-family:"Lato",sans-serif}.article[data-v-0f982d2c]{margin:2.5em}.contentItem[data-v-0f982d2c]{margin:15px}.sidebar[data-v-0f982d2c]{display:flex;flex-direction:column;justify-content:center;margin:0;padding:0;width:200px;background-color:#202020;position:fixed;height:100vh;overflow:auto;color:#fff}.sidebar a[data-v-0f982d2c]{display:block;color:#fff;padding:16px;text-decoration:none}.sidebar a.active[data-v-0f982d2c]{background-color:#202020;color:#fff}.sidebar a[data-v-0f982d2c]:hover:not(.active){background-color:#555;color:#fff}div.content[data-v-0f982d2c]{margin-left:200px;padding:1px 16px;height:1000px}@media screen and (max-width:700px){.sidebar[data-v-0f982d2c]{width:100%;height:20em;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.sidebar a[data-v-0f982d2c]{float:left}div.content[data-v-0f982d2c]{margin-left:0}}@media screen and (max-width:400px){.sidebar a[data-v-0f982d2c]{text-align:center;float:none}}',""]),t.exports=r},315:function(t,e,n){"use strict";n.r(e);var r=n(24),o=(n(67),n(312)),c={name:"Blog",components:{SideBar:n(297).default},filters:{formatDate:function(){return Object(o.a)(new Date,"dd MMM yyyy")}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent,console.log(r),e.abrupt("return",{articles:r});case 6:case"end":return e.stop()}}),e)})))()}},d=(n(301),n(68)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainContent"}},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[t.articles?n("div",t._l(t.articles,(function(article){return n("div",{key:article.id,staticClass:"article"},[n("h1",{staticClass:"links"},[n("nuxt-link",{staticClass:"links",attrs:{to:"/blog/"+article.slug+"/"}},[t._v("\n            "+t._s(article.slug)+"\n          ")])],1),t._v(" "),n("p",[t._v(t._s(t._f("formatDate")(article.createdAt)))]),t._v(" "),n("p",{staticClass:"para"},[t._v("\n          "+t._s(article.description)+"\n          "),n("nuxt-link",{staticClass:"links",attrs:{to:"/blog/"+article.slug+"/"}},[t._v("\n            ...\n          ")])],1)])})),0):n("div",[n("h1",[t._v("Loading...")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("h4",{staticClass:"contentItem"},[t._v("This blog is (mostly) on solidity language")]),t._v(" "),n("a",{staticClass:"active",attrs:{href:"#home"}},[t._v("Home")]),t._v(" "),n("a",{attrs:{href:"#news"}},[t._v("News")]),t._v(" "),n("a",{attrs:{href:"#contact"}},[t._v("Contact")]),t._v(" "),n("a",{attrs:{href:"#about"}},[t._v("About")])])}],!1,null,"0f982d2c",null);e.default=component.exports}}]);