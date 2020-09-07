(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c3bc7124"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,o[1](c)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio-website/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1771:function(t,e,o){var n={"./baguette-logo.png":"966b","./facebook-logo.png":"ca04","./finance-logo.png":"b0fe","./firebird-logo.png":"787a","./firebird-logo.svg":"9e56","./food-vision-logo.png":"5e8e","./logo.png":"cf05","./logo.svg":"9b19","./pic.jpg":"7a88","./plaid-logo.svg":"469b","./ss-logo-high-res.png":"c8ce","./uzir.png":"2f3e"};function a(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="1771"},"2f3e":function(t,e,o){t.exports=o.p+"img/uzir.6882648c.png"},"469b":function(t,e,o){t.exports=o.p+"img/plaid-logo.30ba599e.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("p-toolbar"),o("v-content",{staticStyle:{"background-color":"white"}},[o("router-view")],1),o("p-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{flat:"",absolute:"",color:"transparent",dark:"",height:"120px"}},[o("v-layout",{attrs:{"justify-center":""}},[o("v-container",[o("v-layout",[o("div",{class:{"display-1 font-weight-bold":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("Alapher W. Hearty.")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"text-right"},[o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#about",t.options)}}},[t._v("About")]),o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio",t.options)}}},[t._v("My Work")]),o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#contact",t.options)}}},[t._v("Contact")])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},c=l,u=o("2877"),p=o("6544"),d=o.n(p),m=o("40dc"),f=o("8336"),g=o("a523"),h=o("a722"),b=o("2fa4"),v=o("2a7f"),y=Object(u["a"])(c,r,s,!1,null,null,null),k=y.exports;d()(y,{VAppBar:m["a"],VBtn:f["a"],VContainer:g["a"],VLayout:h["a"],VSpacer:b["a"],VToolbarItems:v["a"]});var w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Uzir Thapa")])])],1)},x=[],_={},I=_,V=o("62ad"),C=o("553a"),j=Object(u["a"])(I,w,x,!1,null,null,null),O=j.exports;d()(j,{VCol:V["a"],VFooter:C["a"]});var S={name:"App",components:{PToolbar:k,PFooter:O},data:function(){return{}}},T=S,F=o("7496"),A=o("a75b"),E=Object(u["a"])(T,a,i,!1,null,null,null),z=E.exports;d()(E,{VApp:F["a"],VContent:A["a"]});o("d3b7");var $=o("8c4f"),L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("v-img",{attrs:{dark:"","max-height":"500px",src:"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}},[o("v-layout",{attrs:{"fill-height":"","align-center":""}},[o("v-container",[o("v-row",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{class:{"display-2 font-weight-bold ":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("Welcome to my page.")]),o("div",{class:{headline:t.$vuetify.breakpoint.smAndUp,"subtitle-1":t.$vuetify.breakpoint.smAndDown}},[t._v("I make applications.")])])],1)],1)],1)],1),o("v-container",{staticClass:"mt-5"},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"about"}},[t._v("This is me")])]),o("v-flex",{attrs:{xs12:"","mt-5":""}},[o("div",{staticClass:"body-1"},[t._v(t._s(t.aboutText))]),o("div",{staticClass:"body-1 mt-3"},[t._v("Working on starting an app development business and always looking for new clients! Would love to talk to you about your idea.")])])],1),o("v-layout",{attrs:{wrap:"","my-5":""}},[o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"portfolio"}},[t._v("My Work")])]),o("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[o("v-layout",{attrs:{wrap:""}},[t._l(t.apps,(function(t,e){return[o("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[o("p-portfolio-app",{attrs:{app:t}})],1)]}))],2)],1)],1),o("v-layout",{attrs:{wrap:"","my-5":""}},[o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"contact"}},[t._v("Send me a message... :)")])]),t._l(t.contactLinks,(function(t,e){return[o("v-flex",{key:e,attrs:{sm6:"",md4:"",xs12:""}},[o("p-contact-info",{attrs:{contact:t}})],1)]}))],2)],1)],1)},P=[],U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:"",color:"transparent","max-width":"350px"}},[o("v-card-title",[o("v-layout",[o("v-flex",[o("v-card",{staticStyle:{"border-radius":"20px"},attrs:{href:t.app.platforms[0].link,target:"_blank",elevation:"5",width:"100px",height:"100px"}},[o("v-img",{attrs:{src:t.logo(t.app.logo)}})],1)],1),o("v-flex",{attrs:{xs7:""}},[o("div",[t._v(t._s(t.app.name))]),o("div",[o("v-chip",{attrs:{small:"",pill:"",color:"blue",dark:""}},[t._v(t._s(t.app.price))])],1),t._l(t.app.platforms,(function(e,n){return[o("v-btn",{key:n,attrs:{href:e.link,target:"_blank",icon:""}},[o("v-icon",[t._v(t._s(e.icon))])],1)]}))],2)],1)],1),o("v-card-text",[o("div",[t._v(t._s(t.app.description))]),o("div",{staticClass:"title mt-2"},[t._v("Technologies Used")]),o("v-layout",[t._l(t.app.technologies,(function(e,n){return[o("v-flex",{key:n,attrs:{xs3:""}},[o("div",{staticClass:"text-center"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v(t._s(e.icon))])],1),o("div",{staticClass:"caption"},[t._v(t._s(e.name))])],1)])]}))],2),t.app.code.link?o("div",[o("div",{staticClass:"title mt-2"},[t._v("Code")]),o("v-btn",{attrs:{icon:"",href:t.app.code.link,target:"_blank"}},[o("v-icon",[t._v(t._s(t.app.code.icon))])],1)],1):t._e()],1)],1)},D=[],M={props:{app:{type:Object,default:function(){return{}}}},methods:{logo:function(t){return o("1771")("./"+t)}}},B=M,J=o("b0af"),N=o("99d9"),W=o("cc20"),G=o("0e8f"),R=o("132d"),Q=o("adda"),q=Object(u["a"])(B,U,D,!1,null,null,null),H=q.exports;d()(q,{VBtn:f["a"],VCard:J["a"],VCardText:N["a"],VCardTitle:N["b"],VChip:W["a"],VFlex:G["a"],VIcon:R["a"],VImg:Q["a"],VLayout:h["a"]});var Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-item",[o("v-list-item-icon",{staticClass:"pa-0 mr-2"},[o("v-btn",{attrs:{icon:"",href:t.contact.link,target:"_blank"}},[o("v-icon",[t._v(t._s(t.contact.icon))])],1)],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.contact.value))]),o("v-list-item-subtitle",[t._v(t._s(t.contact.name))])],1)],1)},X=[],K={props:{contact:{type:Object,default:function(){return{}}}}},Z=K,tt=o("da13"),et=o("5d23"),ot=o("34c3"),nt=Object(u["a"])(Z,Y,X,!1,null,null,null),at=nt.exports;d()(nt,{VBtn:f["a"],VIcon:R["a"],VListItem:tt["a"],VListItemContent:et["a"],VListItemIcon:ot["a"],VListItemSubtitle:et["b"],VListItemTitle:et["c"]});var it={name:"home",components:{PPortfolioApp:H,PContactInfo:at},data:function(){return{aboutText:"I enjoy building apps in my free time when I'm not doing much. Looking to get into machine learning and trying to automate as many things as possible. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. I'm also not that good of a writer as you can see. lol. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",apps:[{name:"Food Vision",price:"FREE",logo:"food-vision-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:"https://apps.apple.com/us/app/food-vision/id1437083324"}],description:"One day my friend and I were eating at a restaurant and she suddenly asked me what an item looks like. I looked up at her an told her I didnt know. Then she told me why dont you make an app where you can see the pictures of food thats on the menu? Then I made Food Vision. :)",technologies:[{name:"Swift",icon:"mdi-language-swift",link:""},{name:"XCode",icon:"mdi-apple-ios",link:""},{name:"Firebase",icon:"mdi-firebase",link:""}],code:{name:"github",icon:"mdi-github",link:""}},{name:"Finance App",price:"COMING SOON",logo:"finance-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:""},{name:"android",icon:"mdi-android",link:""}],description:"My sister always kept asking me about my money situation and how I was doing there, so I decided that I would make an app that we could use to track our finances. Using Plaid I was able to get access to my bank account and hers and connect the 2 using firebase Functions and Auth to secure the app. ",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""},{name:"Cordova",icon:"mdi-cordova",link:""},{name:"Firebase",icon:"mdi-firebase",link:""},{name:"Node",icon:"mdi-nodejs",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/finance-app"}},{name:"Baguette",price:"COMING SOON",logo:"baguette-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:""},{name:"android",icon:"mdi-android",link:""}],description:"Similar to 'Bag it'. I wanted to make a swippable market place where people could swipe on goods from a store. Also it got rid of all the extra distractions and you are able to focus on just one item at a time. Still need to build the recommender system. But I am working on it! :)",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""},{name:"Cordova",icon:"mdi-cordova",link:""},{name:"Firebase",icon:"mdi-firebase",link:""}],code:{name:"github",icon:"mdi-github",link:""}},{name:"Facebook UI",price:"OPEN SOURCE",logo:"facebook-logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://uzirthapa.github.io/facebook-ui/dist/"}],description:"One Day build - I saw this guy on youtube building apps in 1 day and I wanted to see if I could make a better version of the Facebook UI. I didn't design it but I found this design on dribbble and just thought I would make the designers UI come to life.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/facebook-ui"}},{name:"Firebird Fitness",price:"LIVE",logo:"firebird-logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://firebirdfitness.xyz/"}],description:"I needed a place to put my workouts that we do at work, So I made a place where I could store them and also if I forgot a certian exercise I could easily search it and watch a video on how to do it.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/Firebird-Fitness"}},{name:"Ecommerce Biolerplate",price:"OPEN SOURCE",logo:"logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://ecommerce-skeleton.firebaseapp.com/"}],description:"We Wanted to help people who want to create an ecommerce store with VueJS and Vuetify have a template that had authentication and payments integrated right from the get go. So now you can hit the ground running! In Collaboration with Aatish Balla.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"},{name:"Stripe",icon:"mdi-credit-card-outline",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/ecommerce-skeleton"}},{name:"Sacred Summits",price:"LIVE",logo:"ss-logo-high-res.png",platforms:[{name:"web",icon:"mdi-web",link:"https://sacred-summits-web.firebaseapp.com/"}],description:"Sacred Summits was looking for a redesign of their website and they asked me to come up with a sample. This is what I came up with.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"}],code:{name:"github",icon:"mdi-github",link:""}}],contactLinks:[{name:"Email",value:"uzirthapa@gmail.com",link:"mailto:uzirthapa@gmail.com",icon:"mdi-email"},{name:"LinkedIn",value:"Uzir Thapa",link:"https://www.linkedin.com/in/uzir-thapa/",icon:"mdi-linkedin"},{name:"YouTube",value:"Uzir Thapa",link:"https://www.youtube.com/channel/UCd7Qo_G7c8Sp4-TwG_ObSvQ",icon:"mdi-youtube"},{name:"Github",value:"uzirthapa",link:"https://github.com/uzirthapa/",icon:"mdi-github"},{name:"Facebook",value:"Uzir Thapa",link:"https://www.facebook.com/uzirthapa",icon:"mdi-facebook"},{name:"Instagram",value:"@uzir.thapa",link:"https://www.instagram.com/uzir.thapa/",icon:"mdi-instagram"}]}}},rt=it,st=o("0fd9"),lt=Object(u["a"])(rt,L,P,!1,null,null,null),ct=lt.exports;d()(lt,{VCol:V["a"],VContainer:g["a"],VFlex:G["a"],VImg:Q["a"],VLayout:h["a"],VRow:st["a"]}),n["a"].use($["a"]);var ut=[{path:"/",name:"home",component:ct},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],pt=new $["a"]({mode:"history",base:"/portfolio-website/",routes:ut}),dt=pt,mt=o("2f62");n["a"].use(mt["a"]);var ft=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),gt=o("f309");o("15f5");n["a"].use(gt["a"]);var ht=new gt["a"]({icons:{iconfont:"fa"}});n["a"].config.productionTip=!1,new n["a"]({router:dt,store:ft,vuetify:ht,render:function(t){return t(z)}}).$mount("#app")},"5e8e":function(t,e,o){t.exports=o.p+"img/food-vision-logo.a4357cfc.png"},"787a":function(t,e,o){t.exports=o.p+"img/firebird-logo.c0372fb9.png"},"7a88":function(t,e,o){t.exports=o.p+"img/pic.b4afdb2d.jpg"},"966b":function(t,e,o){t.exports=o.p+"img/baguette-logo.70b7a033.png"},"9b19":function(t,e,o){t.exports=o.p+"img/logo.07d1e22e.svg"},"9e56":function(t,e,o){t.exports=o.p+"img/firebird-logo.e56c7951.svg"},b0fe:function(t,e,o){t.exports=o.p+"img/finance-logo.b2af66c2.png"},c8ce:function(t,e,o){t.exports=o.p+"img/ss-logo-high-res.bce19937.png"},ca04:function(t,e,o){t.exports=o.p+"img/facebook-logo.d133b91c.png"},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c13d1ca9.js.map