(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0aa3d7f6":"8c3d499e","chunk-19281f84":"cef82ab6","chunk-2d0d7699":"692256cf","chunk-2d217357":"a5c89fda","chunk-2d21a3d2":"20c4400c","chunk-5f4ad635":"ef64b160","chunk-77d90a73":"9aa37b73","chunk-b792b0c6":"414ab4cb","chunk-c420df12":"feb51e34"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/Vue_Bookkeeping/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},3011:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-Ru",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6057:function(e,t,r){"use strict";r.r(t),t["default"]={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r,position:"top"})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}}},"9c0c":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},u=[],l=r("ee8b"),d={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){console.log(e.code),l["a"][e.code]?this.$error("[Error]: ".concat(l["a"][e.code])):this.$error("Ой, что-то пошло не так")}}},p=d,f=r("2877"),h=Object(f["a"])(p,s,u,!1,null,null,null),m=h.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Создать новую запись",expression:"'Создать новую запись'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},b=[],g=(r("b64b"),r("96cf"),r("1da1")),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("dateFilter")(e.date,"date-time")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"navbar__dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},k=[],y=(r("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?massage=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.navbar__dropdown,{constrainWidth:!1,alignment:"right"})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),x=y,O=Object(f["a"])(x,w,k,!1,null,null,null),_=O.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},C=[],R={props:["value"],data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},E=R,I=Object(f["a"])(E,j,C,!1,null,null,null),$=I.exports,U={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},components:{Navbar:_,Sidebar:$},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){console.log(e.code),l["a"][e.code]?this.$error("[Error]: ".concat(l["a"][e.code])):this.$error("Ой, что-то пошло не так")}}},P=U,S=Object(f["a"])(P,v,b,!1,null,null,null),D=S.exports,V=r("59ca"),F=r.n(V),A={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:m,MainLayout:D}},T=A,B=(r("5c0b"),Object(f["a"])(T,c,i,!1,null,null,null)),L=B.exports,N=(r("45fc"),r("d3b7"),r("8c4f"));n["a"].use(N["a"]);var q=[{path:"/",name:"Home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-19281f84").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d7699").then(r.bind(null,"7769"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-b792b0c6").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-0aa3d7f6").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-77d90a73").then(r.bind(null,"43ef"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}}],J=new N["a"]({mode:"history",base:"/portfolio/Vue_Bookkeeping/",routes:q});J.beforeEach((function(e,t,r){var n=F.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));!n&&a?r("/login?massage=login"):r()}));var z=J,W=(r("fb6a"),r("b680"),r("b85c")),G=r("2f62"),K={actions:{login:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,r.prev=1,r.next=4,F.a.auth().signInWithEmailAndPassword(t.email,t.password);case 4:r.next=10;break;case 6:throw r.prev=6,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[1,6]])})))()},logout:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,F.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()},getUserId:function(){var e=F.a.auth().currentUser;return e?e.uid:null},regUser:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,F.a.auth().createUserWithEmailAndPassword(t.email,t.password);case 4:return r.next=6,n("getUserId");case 6:return o=r.sent,r.next=9,F.a.database().ref("/users/".concat(o,"/info")).set({bill:1e4,name:t.name});case 9:r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}}},H=r("5530"),Q={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUserId");case 4:return a=t.sent,t.next=7,F.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},updataInfo:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUserId");case 4:return c=r.sent,i=Object(H["a"])(Object(H["a"])({},o.info),t),r.next=8,F.a.database().ref("/users/".concat(c,"/info")).update(i);case 8:a("setInfo",i),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},X=(r("d81d"),{actions:{createCategory:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commmit,a=e.dispatch,r.prev=1,r.next=4,a("getUserId");case 4:return o=r.sent,r.next=7,F.a.database().ref("/users/".concat(o,"/categories")).push(t);case 7:return c=r.sent,r.abrupt("return",{title:t.title,limit:t.limit,id:c.key});case 11:throw r.prev=11,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},updateCategory:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commmit,a=e.dispatch,r.prev=1,r.next=4,a("getUserId");case 4:return o=r.sent,r.next=7,F.a.database().ref("/users/".concat(o,"/categories")).child(t.id).update({title:t.title,limit:t.limit});case 7:r.sent,r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchCategories:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commmit,n=e.dispatch,t.prev=1,t.next=4,n("getUserId");case 4:return a=t.sent,t.next=7,F.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(H["a"])({id:e},o[e])})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()}}}),Y={actions:{crateRecord:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUserId");case 4:return o=r.sent,r.next=7,F.a.database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUserId");case 4:return a=t.sent,t.next=7,F.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(H["a"])({id:e},o[e])})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()}}};n["a"].use(G["a"]);var Z=new G["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,e.commit,r.next=3,fetch("https://www.cbr-xml-daily.ru/daily_json.js");case 3:return n=r.sent,r.next=6,n.json();case 6:n=r.sent,a={date:n.Date.slice(0,10),rates:{RUB:n.Valute.EUR.Value,EUR:1}},o=Object(W["a"])(t),r.prev=9,o.s();case 11:if((c=o.n()).done){r.next=18;break}if(i=c.value,"EUR"!=i&&"RUB"!=i){r.next=15;break}return r.abrupt("continue",16);case 15:a.rates[i]=(n.Valute.EUR.Value/n.Valute[i].Value).toFixed(4);case 16:r.next=11;break;case 18:r.next=23;break;case 20:r.prev=20,r.t0=r["catch"](9),o.e(r.t0);case 23:return r.prev=23,o.f(),r.finish(23);case 26:return r.abrupt("return",a);case 27:case"end":return r.stop()}}),r,null,[[9,20,23,26]])})))()}},modules:{record:Y,auth:K,info:Q,category:X}});r("caad"),r("2532");function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={year:"numeric",month:"short",day:"2-digit"};return t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit"),new Intl.DateTimeFormat("ru-Ru",r).format(e)}var te=r("3011"),re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer spinner-blue-only"},[r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})]),r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})]),r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])])])])}],ae={},oe=ae,ce=Object(f["a"])(oe,re,ne,!1,null,null,null),ie=ce.exports,se=(r("ea7b"),r("66ce"),r("6885"),r("9483"));Object(se["a"])("".concat("/portfolio/Vue_Bookkeeping/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ue,le=r("6057").default,de=r("e721").default;n["a"].config.productionTip=!1,n["a"].filter("dateFilter",ee),n["a"].filter("currencyFilter",te["a"]),n["a"].use(o.a),n["a"].use(de),n["a"].directive("tooltip",le),n["a"].component("Loader",ie),F.a.initializeApp({apiKey:"AIzaSyC54EfJOG9R06bs_TR7OqN0O-qvFDQmJLo",authDomain:"works-in-portfolio.firebaseapp.com",databaseURL:"https://works-in-portfolio.firebaseio.com",projectId:"works-in-portfolio",storageBucket:"works-in-portfolio.appspot.com",messagingSenderId:"742960061197",appId:"1:742960061197:web:9e2bb5d6ff56c52a35ee44",measurementId:"G-8VEFVK06DR"}),F.a.auth().onAuthStateChanged((function(e){ue||(ue=new n["a"]({router:z,store:Z,render:function(e){return e(L)}}).$mount("#app"))}))},e721:function(e,t,r){"use strict";r.r(t);var n=r("2b0e");t["default"]={install:function(e){n["a"].prototype.$messagePlugin=function(e){M.toast({html:e})},n["a"].prototype.$error=function(e){M.toast({html:"[Error]: ".concat(e)})}}}},ee8b:function(e,t,r){"use strict";t["a"]={logout:"Вы вышли из системы",login:"Для работы с приложением, необходима авторизация","auth/wrong-password":"Неверный пароль","auth/too-many-requests":"Пвоторите попытку позже","auth/user-not-found":"Пользователь не найден","auth/email-already-in-use":"Данный Email уже занят"}}});
//# sourceMappingURL=app.3b407d90.js.map