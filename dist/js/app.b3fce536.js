(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c3bc7124"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1771:function(t,e,o){var a={"./baguette-logo.png":"966b","./facebook-logo.png":"ca04","./finance-logo.png":"b0fe","./firebird-logo.png":"787a","./firebird-logo.svg":"9e56","./food-vision-logo.png":"5e8e","./logo.png":"cf05","./logo.svg":"9b19","./pic.jpg":"7a88","./plaid-logo.svg":"469b","./ss-logo-high-res.png":"c8ce","./uzir.png":"2f3e"};function n(t){var e=i(t);return o(e)}function i(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="1771"},"2f3e":function(t,e,o){t.exports=o.p+"img/uzir.6882648c.png"},"469b":function(t,e,o){t.exports=o.p+"img/plaid-logo.30ba599e.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("p-toolbar"),o("v-content",{staticStyle:{"background-color":"white"}},[o("HelloWorld"),o("router-view")],1),o("p-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{flat:"",absolute:"",color:"transparent",dark:"",height:"120px"}},[o("v-layout",{attrs:{"justify-center":""}},[o("v-container",[o("v-layout",[o("div",{class:{"display-1 font-weight-bold":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("Alapher W. Hearty.")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"text-right"},[o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#about",t.options)}}},[t._v("About")]),o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio",t.options)}}},[t._v("My Work")]),o("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#contact",t.options)}}},[t._v("Contact")])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},c=l,u=o("2877"),p=o("6544"),m=o.n(p),d=o("40dc"),f=o("8336"),h=o("a523"),g=o("a722"),v=o("2fa4"),b=o("2a7f"),y=Object(u["a"])(c,r,s,!1,null,null,null),k=y.exports;m()(y,{VAppBar:d["a"],VBtn:f["a"],VContainer:h["a"],VLayout:g["a"],VSpacer:v["a"],VToolbarItems:b["a"]});var w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Uzir Thapa")])])],1)},x=[],_={},j=_,V=o("62ad"),C=o("553a"),I=Object(u["a"])(j,w,x,!1,null,null,null),O=I.exports;m()(I,{VCol:V["a"],VFooter:C["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},T=[],F={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},E=F,A=o("0e8f"),L=o("adda"),z=Object(u["a"])(E,S,T,!1,null,null,null),$=z.exports;m()(z,{VContainer:h["a"],VFlex:A["a"],VImg:L["a"],VLayout:g["a"]});var P={name:"App",components:{HelloWorld:$,PToolbar:k,PFooter:O},data:function(){return{}}},U=P,W=o("7496"),D=o("a75b"),M=Object(u["a"])(U,n,i,!1,null,null,null),N=M.exports;m()(M,{VApp:W["a"],VContent:D["a"]});o("d3b7");var B=o("8c4f"),J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("v-img",{attrs:{dark:"","max-height":"500px",src:"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}},[o("v-layout",{attrs:{"fill-height":"","align-center":""}},[o("v-container",[o("v-row",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{class:{"display-2 font-weight-bold ":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("Welcome to my page.")]),o("div",{class:{headline:t.$vuetify.breakpoint.smAndUp,"subtitle-1":t.$vuetify.breakpoint.smAndDown}},[t._v("I make applications.")])])],1)],1)],1)],1),o("v-container",{staticClass:"mt-5"},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"about"}},[t._v("This is me")])]),o("v-flex",{attrs:{xs12:"","mt-5":""}},[o("div",{staticClass:"body-1"},[t._v(t._s(t.aboutText))]),o("div",{staticClass:"body-1 mt-3"},[t._v("Working on starting an app development business and always looking for new clients! Would love to talk to you about your idea.")])])],1),o("v-layout",{attrs:{wrap:"","my-5":""}},[o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"portfolio"}},[t._v("My Work")])]),o("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[o("v-layout",{attrs:{wrap:""}},[t._l(t.apps,(function(t,e){return[o("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[o("p-portfolio-app",{attrs:{app:t}})],1)]}))],2)],1)],1),o("v-layout",{attrs:{wrap:"","my-5":""}},[o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"contact"}},[t._v("Send me a message... :)")])]),t._l(t.contactLinks,(function(t,e){return[o("v-flex",{key:e,attrs:{sm6:"",md4:"",xs12:""}},[o("p-contact-info",{attrs:{contact:t}})],1)]}))],2)],1)],1)},q=[],G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:"",color:"transparent","max-width":"350px"}},[o("v-card-title",[o("v-layout",[o("v-flex",[o("v-card",{staticStyle:{"border-radius":"20px"},attrs:{href:t.app.platforms[0].link,target:"_blank",elevation:"5",width:"100px",height:"100px"}},[o("v-img",{attrs:{src:t.logo(t.app.logo)}})],1)],1),o("v-flex",{attrs:{xs7:""}},[o("div",[t._v(t._s(t.app.name))]),o("div",[o("v-chip",{attrs:{small:"",pill:"",color:"blue",dark:""}},[t._v(t._s(t.app.price))])],1),t._l(t.app.platforms,(function(e,a){return[o("v-btn",{key:a,attrs:{href:e.link,target:"_blank",icon:""}},[o("v-icon",[t._v(t._s(e.icon))])],1)]}))],2)],1)],1),o("v-card-text",[o("div",[t._v(t._s(t.app.description))]),o("div",{staticClass:"title mt-2"},[t._v("Technologies Used")]),o("v-layout",[t._l(t.app.technologies,(function(e,a){return[o("v-flex",{key:a,attrs:{xs3:""}},[o("div",{staticClass:"text-center"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v(t._s(e.icon))])],1),o("div",{staticClass:"caption"},[t._v(t._s(e.name))])],1)])]}))],2),t.app.code.link?o("div",[o("div",{staticClass:"title mt-2"},[t._v("Code")]),o("v-btn",{attrs:{icon:"",href:t.app.code.link,target:"_blank"}},[o("v-icon",[t._v(t._s(t.app.code.icon))])],1)],1):t._e()],1)],1)},H=[],Q={props:{app:{type:Object,default:function(){return{}}}},methods:{logo:function(t){return o("1771")("./"+t)}}},R=Q,Y=o("b0af"),X=o("99d9"),K=o("cc20"),Z=o("132d"),tt=Object(u["a"])(R,G,H,!1,null,null,null),et=tt.exports;m()(tt,{VBtn:f["a"],VCard:Y["a"],VCardText:X["a"],VCardTitle:X["b"],VChip:K["a"],VFlex:A["a"],VIcon:Z["a"],VImg:L["a"],VLayout:g["a"]});var ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-item",[o("v-list-item-icon",{staticClass:"pa-0 mr-2"},[o("v-btn",{attrs:{icon:"",href:t.contact.link,target:"_blank"}},[o("v-icon",[t._v(t._s(t.contact.icon))])],1)],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.contact.value))]),o("v-list-item-subtitle",[t._v(t._s(t.contact.name))])],1)],1)},at=[],nt={props:{contact:{type:Object,default:function(){return{}}}}},it=nt,rt=o("da13"),st=o("5d23"),lt=o("34c3"),ct=Object(u["a"])(it,ot,at,!1,null,null,null),ut=ct.exports;m()(ct,{VBtn:f["a"],VIcon:Z["a"],VListItem:rt["a"],VListItemContent:st["a"],VListItemIcon:lt["a"],VListItemSubtitle:st["b"],VListItemTitle:st["c"]});var pt={name:"home",components:{PPortfolioApp:et,PContactInfo:ut},data:function(){return{aboutText:"I enjoy building apps in my free time when I'm not doing much. Looking to get into machine learning and trying to automate as many things as possible. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. I'm also not that good of a writer as you can see. lol. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",apps:[{name:"Food Vision",price:"FREE",logo:"food-vision-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:"https://apps.apple.com/us/app/food-vision/id1437083324"}],description:"One day my friend and I were eating at a restaurant and she suddenly asked me what an item looks like. I looked up at her an told her I didnt know. Then she told me why dont you make an app where you can see the pictures of food thats on the menu? Then I made Food Vision. :)",technologies:[{name:"Swift",icon:"mdi-language-swift",link:""},{name:"XCode",icon:"mdi-apple-ios",link:""},{name:"Firebase",icon:"mdi-firebase",link:""}],code:{name:"github",icon:"mdi-github",link:""}},{name:"Finance App",price:"COMING SOON",logo:"finance-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:""},{name:"android",icon:"mdi-android",link:""}],description:"My sister always kept asking me about my money situation and how I was doing there, so I decided that I would make an app that we could use to track our finances. Using Plaid I was able to get access to my bank account and hers and connect the 2 using firebase Functions and Auth to secure the app. ",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""},{name:"Cordova",icon:"mdi-cordova",link:""},{name:"Firebase",icon:"mdi-firebase",link:""},{name:"Node",icon:"mdi-nodejs",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/finance-app"}},{name:"Baguette",price:"COMING SOON",logo:"baguette-logo.png",platforms:[{name:"apple",icon:"mdi-apple",link:""},{name:"android",icon:"mdi-android",link:""}],description:"Similar to 'Bag it'. I wanted to make a swippable market place where people could swipe on goods from a store. Also it got rid of all the extra distractions and you are able to focus on just one item at a time. Still need to build the recommender system. But I am working on it! :)",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""},{name:"Cordova",icon:"mdi-cordova",link:""},{name:"Firebase",icon:"mdi-firebase",link:""}],code:{name:"github",icon:"mdi-github",link:""}},{name:"Facebook UI",price:"OPEN SOURCE",logo:"facebook-logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://uzirthapa.github.io/facebook-ui/dist/"}],description:"One Day build - I saw this guy on youtube building apps in 1 day and I wanted to see if I could make a better version of the Facebook UI. I didn't design it but I found this design on dribbble and just thought I would make the designers UI come to life.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:""},{name:"Vuetify",icon:"mdi-vuetify",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/facebook-ui"}},{name:"Firebird Fitness",price:"LIVE",logo:"firebird-logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://firebirdfitness.xyz/"}],description:"I needed a place to put my workouts that we do at work, So I made a place where I could store them and also if I forgot a certian exercise I could easily search it and watch a video on how to do it.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/Firebird-Fitness"}},{name:"Ecommerce Biolerplate",price:"OPEN SOURCE",logo:"logo.png",platforms:[{name:"web",icon:"mdi-web",link:"https://ecommerce-skeleton.firebaseapp.com/"}],description:"We Wanted to help people who want to create an ecommerce store with VueJS and Vuetify have a template that had authentication and payments integrated right from the get go. So now you can hit the ground running! In Collaboration with Aatish Balla.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"},{name:"Stripe",icon:"mdi-credit-card-outline",link:""}],code:{name:"github",icon:"mdi-github",link:"https://github.com/uzirthapa/ecommerce-skeleton"}},{name:"Sacred Summits",price:"LIVE",logo:"ss-logo-high-res.png",platforms:[{name:"web",icon:"mdi-web",link:"https://sacred-summits-web.firebaseapp.com/"}],description:"Sacred Summits was looking for a redesign of their website and they asked me to come up with a sample. This is what I came up with.",technologies:[{name:"VueJS",icon:"mdi-vuejs",link:"https://vuejs.org/"},{name:"Vuetify",icon:"mdi-vuetify",link:"https://vuetifyjs.com/"},{name:"Firebase",icon:"mdi-firebase",link:"https://firebase.google.com/"}],code:{name:"github",icon:"mdi-github",link:""}}],contactLinks:[{name:"Email",value:"uzirthapa@gmail.com",link:"mailto:uzirthapa@gmail.com",icon:"mdi-email"},{name:"LinkedIn",value:"Uzir Thapa",link:"https://www.linkedin.com/in/uzir-thapa/",icon:"mdi-linkedin"},{name:"YouTube",value:"Uzir Thapa",link:"https://www.youtube.com/channel/UCd7Qo_G7c8Sp4-TwG_ObSvQ",icon:"mdi-youtube"},{name:"Github",value:"uzirthapa",link:"https://github.com/uzirthapa/",icon:"mdi-github"},{name:"Facebook",value:"Uzir Thapa",link:"https://www.facebook.com/uzirthapa",icon:"mdi-facebook"},{name:"Instagram",value:"@uzir.thapa",link:"https://www.instagram.com/uzir.thapa/",icon:"mdi-instagram"}]}}},mt=pt,dt=o("0fd9"),ft=Object(u["a"])(mt,J,q,!1,null,null,null),ht=ft.exports;m()(ft,{VCol:V["a"],VContainer:h["a"],VFlex:A["a"],VImg:L["a"],VLayout:g["a"],VRow:dt["a"]}),a["a"].use(B["a"]);var gt=[{path:"/",name:"home",component:ht},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],vt=new B["a"]({mode:"history",base:"/",routes:gt}),bt=vt,yt=o("2f62");a["a"].use(yt["a"]);var kt=new yt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),wt=o("f309");o("15f5");a["a"].use(wt["a"]);var xt=new wt["a"]({icons:{iconfont:"fa"}});a["a"].config.productionTip=!1,new a["a"]({router:bt,store:kt,vuetify:xt,render:function(t){return t(N)}}).$mount("#app")},"5e8e":function(t,e,o){t.exports=o.p+"img/food-vision-logo.a4357cfc.png"},"787a":function(t,e,o){t.exports=o.p+"img/firebird-logo.c0372fb9.png"},"7a88":function(t,e,o){t.exports=o.p+"img/pic.b4afdb2d.jpg"},"966b":function(t,e,o){t.exports=o.p+"img/baguette-logo.70b7a033.png"},"9b19":function(t,e,o){t.exports=o.p+"img/logo.07d1e22e.svg"},"9e56":function(t,e,o){t.exports=o.p+"img/firebird-logo.e56c7951.svg"},b0fe:function(t,e,o){t.exports=o.p+"img/finance-logo.b2af66c2.png"},c8ce:function(t,e,o){t.exports=o.p+"img/ss-logo-high-res.bce19937.png"},ca04:function(t,e,o){t.exports=o.p+"img/facebook-logo.d133b91c.png"},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b3fce536.js.map