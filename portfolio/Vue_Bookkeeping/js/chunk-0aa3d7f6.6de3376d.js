(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa3d7f6"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),c=r("ae40"),o=a("reduce"),s=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!o||!s},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localizeFilter")("Planning")))]),r("h4",[e._v(e._s(e._f("currencyFilter")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e._f("currencyFilter")(t.spend,"RUB"))+" "+e._s(e._f("localizeFilter")("outOf"))+" "+e._s(e._f("currencyFilter")(t.limit,"RUB"))+" ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"c.tooltip"}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.chekProgress],style:{width:t.balancePerc+"%"}})])])})),0):r("p",{staticClass:"center"},[r("router-link",{attrs:{to:"/categories"}},[e._v(e._s(e._f("localizeFilter")("AddCategory")))])],1)],1)},i=[],a=(r("99af"),r("4de4"),r("d81d"),r("13d5"),r("5530")),c=(r("96cf"),r("1da1")),o=r("2f62"),s=r("3011"),l=r("d343"),u={name:"plunning",data:function(){return{loading:!0,categories:[]}},metaInfo:function(){return{title:"".concat(Object(l["a"])("Planning")," | ").concat("Bookkeeping")}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:n=t.sent,e.categories=n.map((function(e){var t=r.filter((function(t){return t.categoryID===e.id&&"outcome"===t.type})).reduce((function(e,t){return e+ +t.amount}),0),n=t/e.limit*100,i=n>100?100:n,c=n<60?"green":n<100?"yellow":"red",o=e.limit-t,u="".concat(o<0?Object(l["a"])("ExcessBy"):Object(l["a"])("Left")," \n        ").concat(Object(s["a"])(Math.abs(o)));return Object(a["a"])(Object(a["a"])({},e),{},{spend:t,balancePerc:i,chekProgress:c,tooltip:u})})),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},computed:Object(a["a"])({},Object(o["b"])(["info"]))},d=u,f=r("2877"),p=Object(f["a"])(d,n,i,!1,null,null,null);t["default"]=p.exports},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),c=r("861d"),o=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),g=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),_=d("concat"),m=function(e){if(!c(e))return!1;var t=e[g];return void 0!==t?!!t:a(e)},w=!b||!_;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,i,a,c=o(this),d=u(c,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?c:arguments[t],m(a)){if(i=s(a.length),f+i>h)throw TypeError(v);for(r=0;r<i;r++,f++)r in a&&l(d,f,a[r])}else{if(f>=h)throw TypeError(v);l(d,f++,a)}return d.length=f,d}})},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),c=r("50c4"),o=function(e){return function(t,r,o,s){n(r);var l=i(t),u=a(l),d=c(l.length),f=e?d-1:0,p=e?-1:1;if(o<2)while(1){if(f in u){s=u[f],f+=p;break}if(f+=p,e?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:d>f;f+=p)f in u&&(s=r(s,u[f],f,l));return s}};e.exports={left:o(!1),right:o(!0)}}}]);
//# sourceMappingURL=chunk-0aa3d7f6.6de3376d.js.map