(this.webpackJsonptwitzlariak=this.webpackJsonptwitzlariak||[]).push([[0],{126:function(e){e.exports=JSON.parse('{"client_id":"e3lru0kww739k9i9qvw50qh90its46","token":"zq4ynxde9ypy7sj3fk7xz7cp9l406s","client_secret":"wvjugh6hou4aty8j7el84rqi290ntp"}')},165:function(e,t,a){},166:function(e,t,a){},188:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);a(165),a(166),a(167);var n=a(85),r=a(9),c=a.n(r),i=a(17),s=a(18),u=a(214),o=a(216),l=a(220),j=a(221),d=a(218),b=a(222),h=a(130),p=a(150),x=a(0),O=a.n(x),f=a(146),m=a.n(f),v=a(126),g=m.a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"client-id":v.client_id,Authorization:"Bearer "+v.token}}),k=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("streams?user_login="+t.join("&user_login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("videos?user_id="+t);case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("clips?broadcaster_id="+t+"&first=100");case 2:return a=e.sent,n=new Date,(r=new Date).setDate(n.getDate()-40),e.abrupt("return",a.data.data.filter((function(e){return new Date(e.created_at)>r})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("users?login="+t.join("&login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=g,D=a(56),C=(a(188),a(1)),M=function(e){var t=e.title,a=e.meta,n=e.description,r=e.image_url,c=e.zuzenean,i=void 0!==c&&c;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(p.a,{floated:"left",size:"tiny",src:r||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(C.jsxs)(d.a.Header,{children:[i&&Object(C.jsx)(h.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),t||"Twitzlaria"]}),Object(C.jsx)(d.a.Meta,{children:a?a+" ikustaldi":"0 ikustaldi"}),Object(C.jsx)(d.a.Description,{className:"ellipsis",children:n||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})},Y=a(38),S=a.n(Y),E=a(73),H=function(e){var t=Object(x.useState)([]),a=Object(s.a)(t,2),r=a[0],O=a[1],f=Object(x.useState)([]),m=Object(s.a)(f,2),v=m[0],g=m[1],k=Object(x.useState)([]),z=Object(s.a)(k,2),Y=z[0],H=z[1],A=Object(x.useState)([]),P=Object(s.a)(A,2),F=P[0],N=P[1],G=Object(x.useState)([]),I=Object(s.a)(G,2),R=I[0],B=I[1],J=Object(x.useState)([]),T=Object(s.a)(J,2),q=T[0],L=T[1],K=E.twitzlariak.map((function(e){return{key:e,text:e,value:e}})),U=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Q(){return(Q=Object(i.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return L(t.display_name),N([]),B([]),a=[],r=[],e.next=8,U(t.id);case 8:return e.next=10,e.sent.map((function(e){a=[].concat(Object(n.a)(a),[e])}));case 10:return N(a),e.next=13,Z(t.id);case 13:return e.next=15,e.sent.map((function(e){r=[].concat(Object(n.a)(r),[e])}));case 15:B(r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(x.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y.length>0&&y.get("users?login="+Y.join("&login=")).then((function(e){return O(e.data.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[Y]),Object(x.useEffect)((function(){g(K),L("")}),[]);var V=new Date;return(new Date).setDate(V.getDate()-7),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(o.a,{placeholder:"Erabiltzaileak",fluid:!0,multiple:!0,selection:!0,search:!0,allowAdditions:!0,onAddItem:function(e,t){return g([].concat(Object(n.a)(v),[{key:t.value,text:t.value,value:t.value}]))},options:v,onChange:function(e,t){var a=t.value;H(a),N([]),B([])}}),Object(C.jsx)(l.a,{children:Object(C.jsxs)(j.a,{columns:2,divided:!0,children:[Object(C.jsx)(j.a.Column,{width:5,children:r.length>0?r.map((function(e,t){return Object(C.jsx)(d.a,{className:q===e.display_name?"active":"",onClick:function(){return function(e){return Q.apply(this,arguments)}(e)},children:Object(C.jsx)(M,{title:e.display_name,meta:e.view_count,description:e.description,image_url:e.profile_image_url},t)})})):Object(C.jsx)(d.a,{children:Object(C.jsx)(M,{})})}),Object(C.jsxs)(j.a.Column,{width:5,children:[Object(C.jsx)(l.a,{children:Object(C.jsxs)(b.a,{as:"h2",children:[Object(C.jsx)(h.a,{size:"tiny",name:"video camera"}),Object(C.jsx)(b.a.Content,{children:"Bideoak"})]})}),Object(C.jsx)(d.a.Group,{children:F.length>0?F.map((function(e,t){return Object(C.jsxs)(d.a,{children:[Object(C.jsx)(p.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(d.a.Header,{as:D.b,to:{pathname:e.url},target:"_blank",children:e.title}),Object(C.jsx)(d.a.Description,{as:"a",children:S()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(C.jsx)(C.Fragment,{children:"Ez dago bideorik..."})})]}),Object(C.jsxs)(j.a.Column,{width:5,children:[Object(C.jsx)(l.a,{children:Object(C.jsxs)(b.a,{as:"h2",children:[Object(C.jsx)(h.a,{size:"tiny",name:"paperclip"}),Object(C.jsx)(b.a.Content,{children:"klipak"})]})}),Object(C.jsx)(d.a.Group,{children:R.length>0?R.map((function(e,t){return Object(C.jsxs)(d.a,{children:[Object(C.jsx)(p.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(d.a.Header,{as:D.b,to:{pathname:e.url},children:e.title}),Object(C.jsx)(d.a.Description,{as:"a",children:S()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(C.jsx)(C.Fragment,{children:"Ez dago klipik..."})})]})]})})]})},A=function(e){var t,a=Object(x.useState)(),n=Object(s.a)(a,2),r=n[0],o=n[1],l=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.useEffect)((function(){l([e.match.params.user]).then((function(e){o(e[0])}))}),[]),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(b.a,{as:"h1",children:e.match.params.user}),Object(C.jsxs)(d.a,{children:[Object(C.jsx)(p.a,{src:null===r||void 0===r||null===(t=r.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228),wrapped:!0,ui:!1}),Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(d.a.Header,{children:null===r||void 0===r?void 0:r.display_name}),Object(C.jsx)(d.a.Meta,{children:Object(C.jsx)("span",{className:"date",children:S()(null===r||void 0===r?void 0:r.created_at).format("YYYY/MM/DD")})}),Object(C.jsx)(d.a.Description,{children:null===r||void 0===r?void 0:r.description})]}),Object(C.jsxs)(d.a.Content,{extra:!0,children:[Object(C.jsx)(h.a,{name:"eye"}),null===r||void 0===r?void 0:r.view_count," ikustaldi"]})]})]})};function P(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}}var F=function(e){var t=Object(x.useState)([]),a=Object(s.a)(t,2),n=a[0],r=a[1],o=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.useEffect)((function(){o(E.twitzlariak).then((function(e){r(e)}))}),[]),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(b.a,{as:"h1",children:"Gutarrak"}),Object(C.jsx)(d.a.Group,{itemsPerRow:6,stackable:!0,children:n.sort(P("display_name")).map((function(e){var t;return Object(C.jsxs)(d.a,{children:[Object(C.jsx)(p.a,{src:null===e||void 0===e||null===(t=e.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228),wrapped:!0,ui:!1}),Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(d.a.Header,{children:null===e||void 0===e?void 0:e.display_name}),Object(C.jsx)(d.a.Meta,{children:Object(C.jsx)("span",{className:"date",children:S()(null===e||void 0===e?void 0:e.created_at).format("YYYY/MM/DD")})}),(null===e||void 0===e?void 0:e.description)&&Object(C.jsxs)(d.a.Description,{children:[null===e||void 0===e?void 0:e.description.substring(0,55),"..."]})]}),Object(C.jsxs)(d.a.Content,{extra:!0,children:[Object(C.jsx)(h.a,{name:"eye"}),null===e||void 0===e?void 0:e.view_count," ikustaldi"]})]})}))})]})},N=(a(200),a(225)),G=a(151),I=a(215),R=function(e){var t=e.clip;return Object(C.jsxs)(d.a,{children:[Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(G.a,{attached:"top left",color:"violet",children:t.broadcaster_name}),Object(C.jsx)(d.a.Header,{children:t.title})]}),Object(C.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(C.jsx)(p.a,{src:t.thumbnail_url.replace("%{width}",440).replace("%{height}",228)})}),Object(C.jsx)(d.a.Content,{extra:!0,children:Object(C.jsx)(j.a,{divided:"vertically",children:Object(C.jsxs)(j.a.Row,{columns:2,children:[Object(C.jsxs)(j.a.Column,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(h.a,{name:"eye"}),t.view_count," ikustaldi"]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(h.a,{name:"clock"}),S()(t.created_at).format("YYYY/MM/DD")]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(h.a,{name:"paperclip"}),t.creator_name]})]}),Object(C.jsxs)(j.a.Column,{children:[Object(C.jsx)("a",{type:"button",role:"button",title:"Share on twitter",target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?url=[#"+t.broadcaster_name+"]%0A"+t.title+"%0A%0A"+t.url,children:Object(C.jsx)(h.a,{name:"twitter",color:"blue",size:"big"})}),Object(C.jsx)(I.a,{content:"Arbelean kopiatu da zure sareetan partekatzeko!",hideOnScroll:!0,basic:!0,inverted:!0,position:"top center",on:"click",trigger:Object(C.jsx)(h.a,{name:"copy",size:"big",onClick:function(){navigator.clipboard.writeText("["+t.broadcaster_name+"]\n"+t.title+"\n\n"+t.url)}})})]})]})})})]})},B=function(e){var t=e.erabiltzailea;return Object(C.jsxs)(d.a,{children:[Object(C.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:Object(C.jsx)(p.a,{src:(null===t||void 0===t?void 0:t.thumbnail_url.replace("{width}",440).replace("{height}",228))||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"})}),Object(C.jsxs)(d.a.Content,{children:[Object(C.jsx)(G.a,{color:"red",ribbon:"right",children:"Zuzenean"}),Object(C.jsx)(d.a.Header,{children:Object(C.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:(null===t||void 0===t?void 0:t.user_name)||"Twitzlaria"})}),Object(C.jsx)(d.a.Meta,{children:(null===t||void 0===t?void 0:t.game_name)||"Jokoaren izena"}),Object(C.jsxs)(d.a.Description,{children:[(null===t||void 0===t?void 0:t.title)||"twitzlariaren deskribapena hemen idatzita agertuko da",Object(C.jsxs)("div",{children:[Object(C.jsx)(h.a,{name:"eye"}),t.viewer_count," ikusle"]})]})]})]})},J=function(e){var t=Object(x.useState)([]),a=Object(s.a)(t,2),r=a[0],o=a[1],j=Object(x.useState)([]),p=Object(s.a)(j,2),O=p[0],f=p[1],m=Object(x.useState)(r.slice(0,12)),v=Object(s.a)(m,2),g=v[0],w=v[1],y=Object(x.useState)(1),D=Object(s.a)(y,2),M=D[0],Y=D[1],S=Object(x.useState)([]),H=Object(s.a)(S,2),A=H[0],F=H[1],G=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=F,e.next=3,k(I);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(x.useEffect)((function(){G()}),[]);var I=E.twitzlariak,J=new Date;(new Date).setDate(J.getDate()-20);var T=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(x.useEffect)((function(){q(I).then((function(e){f(e)}))}),[]),Object(x.useEffect)((function(){w(r.sort(P("-created_at")).slice(12*(M-1),12*(M-1)+12))}),[r,M]),Object(x.useEffect)((function(){O.length>0&&O.forEach((function(e){T(e.id).then((function(e){e.forEach((function(e){o((function(t){return[].concat(Object(n.a)(t),[e])}))}))}))}))}),[O]);return Object(C.jsxs)(u.a,{children:[Object(C.jsx)("h1",{children:"Hasierako orria"}),Object(C.jsx)("div",{className:"pulsating-circle"}),Object(C.jsx)("h2",{className:"pulsating-circle",children:"Orain zuzenean"}),A.length>0?Object(C.jsx)(d.a.Group,{itemsPerRow:3,stackable:!0,children:A.map((function(e,t){return Object(C.jsx)(B,{erabiltzailea:e})}))}):Object(C.jsx)(l.a,{placeholder:!0,children:Object(C.jsxs)(b.a,{icon:!0,children:[Object(C.jsx)(h.a,{name:"history"}),"Orain momentuan ez dago inor zuzenean."]})}),Object(C.jsx)("hr",{}),Object(C.jsx)("h2",{children:"Azken 40 egunetako klipak"}),Object(C.jsx)(l.a,{children:Object(C.jsx)("h3",{children:"Klipari ekinenak:"})}),Object(C.jsx)(d.a.Group,{itemsPerRow:4,stackable:!0,children:g.map((function(e){return Object(C.jsx)(R,{clip:e})}))}),Object(C.jsx)(l.a,{children:Object(C.jsx)(N.a,{boundaryRange:1,defaultActivePage:1,showEllipsis:!0,activePage:M,onPageChange:function(e,t){var a=t.activePage;return Y(a)},totalPages:Math.round(r.length/12)})})]})},T=a(223),q=a(12);var L=function(){return Object(C.jsxs)(D.a,{basename:"/",children:[Object(C.jsx)(T.a,{inverted:!0,children:Object(C.jsxs)(u.a,{children:[Object(C.jsx)(T.a.Item,{as:D.b,to:"/",children:"Hasierako orria"}),Object(C.jsx)(T.a.Item,{as:D.b,to:"/bilatzailea",children:"Bilatzailea"}),Object(C.jsx)(T.a.Item,{as:D.b,to:"/gutarrak",children:"Gutarrak"})]})}),Object(C.jsxs)(q.c,{children:[Object(C.jsx)(q.a,{exact:!0,path:"/",children:Object(C.jsx)(J,{})}),Object(C.jsx)(q.a,{exact:!0,path:"/bilatzailea",children:Object(C.jsx)(H,{})}),Object(C.jsx)(q.a,{exact:!0,path:"/gutarrak",children:Object(C.jsx)(F,{})}),Object(C.jsx)(q.a,{exact:!0,path:"/gutarrak/:user",component:A})]}),Object(C.jsx)(l.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"},children:Object(C.jsx)(u.a,{textAlign:"center",children:Object(C.jsxs)(j.a,{divided:!0,inverted:!0,stackable:!0,children:[Object(C.jsxs)(j.a.Column,{width:8,children:[Object(C.jsx)(b.a,{inverted:!0,as:"h4",content:"Footer Header"}),Object(C.jsx)("p",{children:"Extra space for a call to action inside the footer that could help re-engage users."})]}),Object(C.jsxs)(j.a.Column,{width:8,children:[Object(C.jsx)(b.a,{inverted:!0,as:"h4",content:"Footer Header"}),Object(C.jsx)("p",{children:"Extra space for a call to action inside the footer that could help re-engage users."})]})]})})})]})},K=a(59),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a.n(K).a.render(Object(C.jsx)(O.a.StrictMode,{children:Object(C.jsx)(L,{})}),document.getElementById("root")),U()},73:function(e){e.exports=JSON.parse('{"twitzlariak":["aioraprobatxoa","andromeda2030","andonirock","antukun","ardobeltza000","arkkuso","arruartegamer3","athe2403","bigarrenkafea","bykugganhunter","doblemauler","eitbtwitch","ekintaekin","errazkin08","gaizkaizagirre","gamerauntsia","gari_infernu666","gaztezulo","harresigorria","ibila87","il4rgi_","iratimatelo","ionliz","kafearensemea","kukulumutxun_sumoeuskaraz","landeths","larreategi","lastotxapel","maik_eus","maketoirratia","martxin","nebukaixo","norbait","pubguitar","pilulagorria","rekisab","river_rock_","satantxiki4","sithtal","suspekain_","tasiosudupe","theprodigyeh","trikuxabi","txetxedeletxe","zitalko"]}')}},[[201,1,2]]]);
//# sourceMappingURL=main.1195ac74.chunk.js.map