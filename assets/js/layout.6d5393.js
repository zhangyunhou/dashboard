webpackJsonpwedn([7,20],{247:function(t,e,n){n(329);var s=n(74)(n(287),n(356),null,null);t.exports=s.exports},271:function(t,e,n){var s=n(74)(n(273),n(363),null,null);t.exports=s.exports},272:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(75),a=n(271),i=n.n(a);e.default={name:"header",components:{MenuList:i.a},computed:n.i(s.a)({header:"header",currentUser:"currentUser"}),created:function(){this.$store.dispatch("getCurrentUser")},methods:{logout:function(){this.$store.dispatch("deleteToken"),this.$router.replace({path:"/login"})}}}},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(311),a=n.n(s);e.default={name:"menu-list",props:{items:Array,activeClass:Boolean},methods:{isActive:function(t){var e=this,n=function(t,e){return a()(t).length!==a()(e).length||a()(t).every(function(n){return String(t[n])===String(e[n])})},s=function(t){return t.name===e.$route.name&&(!t.params||n(t.params,e.$route.params))};return s(t)||t.children&&t.children.length&&t.children.some(function(t){return s(t)})}}}},274:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(75),a=n(271),i=n.n(a);e.default={name:"sidebar",components:{MenuList:i.a},computed:n.i(s.a)({sidebar:"sidebar"}),methods:n.i(s.b)({toggleCollapse:"toggleSidebarCollapse"})}},287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(335),a=n.n(s),i=n(336),r=n.n(i);e.default={name:"layout",title:"WEDN.NET | make IT better",components:{AppHeader:a.a,AppSidebar:r.a}}},311:function(t,e,n){t.exports={default:n(312),__esModule:!0}},312:function(t,e,n){n(314),t.exports=n(7).Object.keys},313:function(t,e,n){var s=n(16),a=n(7),i=n(25);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),s(s.S+s.F*i(function(){n(1)}),"Object",r)}},314:function(t,e,n){var s=n(45),a=n(44);n(313)("keys",function(){return function(t){return a(s(t))}})},319:function(t,e,n){e=t.exports=n(233)(!0),e.push([t.i,".content{position:relative}.content-enter-active,.content-leave-active{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.content-enter,.content-leave-active{opacity:0}","",{version:3,sources:["/Users/zce/Local/wedn/dashboard/app/views/layout.vue"],names:[],mappings:"AACA,SACE,iBAAmB,CACpB,AACD,4CAEE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,oCAAqC,AACrC,2BAA6B,CAC9B,AACD,qCAEE,SAAU,CACX",file:"layout.vue",sourcesContent:["\n.content {\n  position: relative;\n}\n.content-enter-active,\n.content-leave-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity .5s ease;\n  transition: opacity .5s ease;\n}\n.content-enter,\n.content-leave-active {\n  opacity: 0\n}\n"],sourceRoot:""}])},329:function(t,e,n){var s=n(319);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(234)("067ee5a9",s,!0)},335:function(t,e,n){var s=n(74)(n(272),n(351),null,null);t.exports=s.exports},336:function(t,e,n){var s=n(74)(n(274),n(373),null,null);t.exports=s.exports},351:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"brand"},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.header.name))])],1),t._v(" "),n("nav",{staticClass:"toolbar"},[n("menu-list",{attrs:{items:t.header.menus}}),t._v(" "),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{attrs:{href:"#"}},[t._v("Hi, "+t._s(t.currentUser.name)+"! "),n("img",{staticClass:"avatar",attrs:{src:t.currentUser.meta.avatar,alt:t.currentUser.name}})]),t._v(" "),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("router-link",{attrs:{to:{name:"profile"}}},[t._v("个人主页")])],1),t._v(" "),n("li",{staticClass:"item"},[n("router-link",{attrs:{to:{name:"profile"}}},[t._v("编辑个人资料")])],1),t._v(" "),n("li",{staticClass:"divider"}),t._v(" "),n("li",{staticClass:"item"},[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.logout(e)}}},[t._v("登出")])])])])])],1)])},staticRenderFns:[]}},356:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("app-header"),t._v(" "),n("section",{staticClass:"main"},[n("app-sidebar"),t._v(" "),n("main",{staticClass:"content"},[n("transition",{attrs:{name:"content"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]}},363:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},[t._l(t.items,function(e){return[e.divider?n("li",{staticClass:"divider"}):e.title?n("li",{staticClass:"title"},[t._v(t._s(e.title))]):n("li",{staticClass:"item",class:{active:t.activeClass&&t.isActive(e)}},[n("router-link",{class:"icon-before icon-"+e.icon,attrs:{to:e,title:e.text}},[t._v(t._s(e.text))]),t._v(" "),e.children?n("ul",{staticClass:"list"},[t._l(e.children,function(e){return[e.divider?n("li",{staticClass:"divider"}):n("li",{staticClass:"item",class:{active:t.activeClass&&t.isActive(e)}},[n("router-link",{attrs:{to:e,title:e.text}},[t._v(t._s(e.text))])],1)]})],2):t._e()],1)]})],2)},staticRenderFns:[]}},373:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar",class:{collapse:t.sidebar.collapse}},[n("nav",{staticClass:"menu"},[n("menu-list",{attrs:{items:t.sidebar.menus,"active-class":""}})],1),t._v(" "),n("footer",{staticClass:"footer"},[n("a",{staticClass:"toggle icon-before icon-circle-left",attrs:{title:"Toggle navigation menu"},on:{click:t.toggleCollapse}}),t._v(" "),n("router-link",{staticClass:"copyright",attrs:{to:{name:"about"},title:"About"+t.sidebar.copyright}},[t._v("© "+t._s(t.sidebar.copyright))])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=layout.6d5393.js.map