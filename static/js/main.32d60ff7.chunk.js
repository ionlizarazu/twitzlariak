(this.webpackJsonptwitzlariak=this.webpackJsonptwitzlariak||[]).push([[0],{145:function(e){e.exports=JSON.parse('{"client_id":"e3lru0kww739k9i9qvw50qh90its46","token":"jz018cjswwlpnpq3a4iv9ntx3rqnfl","client_secret":"wvjugh6hou4aty8j7el84rqi290ntp"}')},192:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(161),c=a(35),i=a(28),s=(a(192),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,251)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))}),l=a(7),o=a(24),u=a(51),j=a(8),d=a.n(j),b=a(14),h=a(145),O=a(164),p=a.n(O).a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"client-id":h.client_id,Authorization:"Bearer "+h.token}}),x=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("streams?user_login="+t.join("&user_login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("videos?user_id="+t);case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("clips?broadcaster_id="+t+"&first=100");case 2:return a=e.sent,n=new Date,(r=new Date).setDate(n.getDate()-30),e.abrupt("return",a.data.data.filter((function(e){return new Date(e.created_at)>r})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("users?login="+t.join("&login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=p,k="GET_ERABILTZAILEAK_PENDING",w="GET_ERABILTZAILEAK_SUCCESS",_="GET_ERABILTZAILEAK_ERROR",y="GET_ZUZENEKOAK_PENDING",z="GET_ZUZENEKOAK_SUCCESS",C="GET_ZUZENEKOAK_ERROR",E=a(1),D=function(e){var t=u.twitzlariak;return function(a){var r=Object(c.b)();return Object(n.useEffect)((function(){var e;r((e=t,function(){var t=Object(b.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k}),t.next=3,v(e);case 3:n=t.sent;try{a({type:w,payload:{items:n}})}catch(r){a({type:_,payload:r})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]),Object(E.jsx)(e,Object(o.a)(Object(o.a)({},a),{},{children:a.children}))}},S=a(243),A=a(235),M=function(){return Object(E.jsx)(S.a,{inverted:!0,children:Object(E.jsxs)(A.a,{children:[Object(E.jsx)(S.a.Item,{as:i.b,to:"/",children:"Hasierako orria"}),Object(E.jsx)(S.a.Item,{as:i.b,to:"/bilatzailea",children:"Bilatzailea"}),Object(E.jsx)(S.a.Item,{as:i.b,to:"/gutarrak",children:"Gutarrak"})]})})},Y=a(244),F=a(245),I=a(246),G=function(){return Object(E.jsx)(Y.a,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em"},children:Object(E.jsx)(A.a,{textAlign:"center",children:Object(E.jsxs)(F.a,{divided:!0,inverted:!0,stackable:!0,children:[Object(E.jsxs)(F.a.Column,{width:8,children:[Object(E.jsx)(I.a,{inverted:!0,as:"h4",content:"Footer Header"}),Object(E.jsx)("p",{children:"Extra space for a call to action inside the footer that could help re-engage users."})]}),Object(E.jsxs)(F.a.Column,{width:8,children:[Object(E.jsx)(I.a,{inverted:!0,as:"h4",content:"Footer Header"}),Object(E.jsx)("p",{children:"Extra space for a call to action inside the footer that could help re-engage users."})]})]})})})};var N=D((function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(M,{}),Object(E.jsx)(l.a,{}),Object(E.jsx)(G,{})]})})),R=(a(216),a(15)),H=a(10),T=a(105),L=a(241),P=a(94),U=a(168),Z=(a(217),function(e){var t=e.title,a=e.meta,n=e.description,r=e.image_url,c=e.zuzenean,i=void 0!==c&&c;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(U.a,{floated:"left",size:"tiny",src:r||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(E.jsxs)(L.a.Header,{children:[i&&Object(E.jsx)(P.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),t||"Twitzlaria"]}),Object(E.jsx)(L.a.Meta,{children:a?a+" ikustaldi":"0 ikustaldi"}),Object(E.jsx)(L.a.Description,{className:"ellipsis",children:n||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})}),B=a(45),K=a.n(B),q=function(e){var t=Object(n.useState)([]),a=Object(H.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),l=Object(H.a)(s,2),o=l[0],j=l[1],h=Object(n.useState)([]),O=Object(H.a)(h,2),p=O[0],x=O[1],v=Object(n.useState)([]),k=Object(H.a)(v,2),w=k[0],_=k[1],y=Object(n.useState)([]),z=Object(H.a)(y,2),C=z[0],D=z[1],S=Object(n.useState)([]),M=Object(H.a)(S,2),G=M[0],N=M[1],B=u.twitzlariak.map((function(e){return{key:e,text:e,value:e}})),q=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function V(){return(V=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return N(t.display_name),_([]),D([]),a=[],n=[],e.next=8,q(t.id);case 8:return e.next=10,e.sent.map((function(e){a=[].concat(Object(R.a)(a),[e])}));case 10:return _(a),e.next=13,J(t.id);case 13:return e.next=15,e.sent.map((function(e){n=[].concat(Object(R.a)(n),[e])}));case 15:D(n);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.length>0&&g.get("users?login="+p.join("&login=")).then((function(e){return c(e.data.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(n.useEffect)((function(){j(B),N("")}),[]);var Q=new Date;return(new Date).setDate(Q.getDate()-7),Object(E.jsxs)(A.a,{children:[Object(E.jsx)(T.a,{placeholder:"Erabiltzaileak",fluid:!0,multiple:!0,selection:!0,search:!0,allowAdditions:!0,onAddItem:function(e,t){return j([].concat(Object(R.a)(o),[{key:t.value,text:t.value,value:t.value}]))},options:o,onChange:function(e,t){var a=t.value;x(a),_([]),D([])}}),Object(E.jsx)(Y.a,{children:Object(E.jsxs)(F.a,{columns:2,divided:!0,children:[Object(E.jsx)(F.a.Column,{width:5,children:r.length>0?r.map((function(e,t){return Object(E.jsx)(L.a,{className:G===e.display_name?"active":"",onClick:function(){return function(e){return V.apply(this,arguments)}(e)},children:Object(E.jsx)(Z,{title:e.display_name,meta:e.view_count,description:e.description,image_url:e.profile_image_url},t)})})):Object(E.jsx)(L.a,{children:Object(E.jsx)(Z,{})})}),Object(E.jsxs)(F.a.Column,{width:5,children:[Object(E.jsx)(Y.a,{children:Object(E.jsxs)(I.a,{as:"h2",children:[Object(E.jsx)(P.a,{size:"tiny",name:"video camera"}),Object(E.jsx)(I.a.Content,{children:"Bideoak"})]})}),Object(E.jsx)(L.a.Group,{children:w.length>0?w.map((function(e,t){return Object(E.jsxs)(L.a,{children:[Object(E.jsx)(U.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(L.a.Header,{as:i.b,to:{pathname:e.url},target:"_blank",children:e.title}),Object(E.jsx)(L.a.Description,{as:"a",children:K()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(E.jsx)(E.Fragment,{children:"Ez dago bideorik..."})})]}),Object(E.jsxs)(F.a.Column,{width:5,children:[Object(E.jsx)(Y.a,{children:Object(E.jsxs)(I.a,{as:"h2",children:[Object(E.jsx)(P.a,{size:"tiny",name:"paperclip"}),Object(E.jsx)(I.a.Content,{children:"klipak"})]})}),Object(E.jsx)(L.a.Group,{children:C.length>0?C.map((function(e,t){return Object(E.jsxs)(L.a,{children:[Object(E.jsx)(U.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(L.a.Header,{as:i.b,to:{pathname:e.url},children:e.title}),Object(E.jsx)(L.a.Description,{as:"a",children:K()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(E.jsx)(E.Fragment,{children:"Ez dago klipik..."})})]})]})})]})},J=function(e){var t,a=Object(l.o)().user,n=Object(c.c)((function(e){return e.erabiltzaileak})),r=n.loaded&&n.items.length>0?n.items.filter((function(e){return e.login.toUpperCase()===a.toUpperCase()})):{},i=r.length>0?r[0]:{};return Object(E.jsxs)(A.a,{children:[Object(E.jsx)(I.a,{as:"h1",children:a}),Object(E.jsxs)(L.a,{children:[Object(E.jsx)(U.a,{src:null===i||void 0===i||null===(t=i.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228),wrapped:!0,ui:!1}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(L.a.Header,{children:null===i||void 0===i?void 0:i.display_name}),Object(E.jsx)(L.a.Meta,{children:Object(E.jsx)("span",{className:"date",children:K()(null===i||void 0===i?void 0:i.created_at).format("YYYY/MM/DD")})}),Object(E.jsx)(L.a.Description,{children:null===i||void 0===i?void 0:i.description})]}),Object(E.jsxs)(L.a.Content,{extra:!0,children:[Object(E.jsx)(P.a,{name:"eye"}),null===i||void 0===i?void 0:i.view_count," ikustaldi"]})]})]})},V=a(247),Q=a(236);function W(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}}var X=function(e){var t=Object(c.c)((function(e){return e.erabiltzaileak}));return Object(E.jsxs)(A.a,{children:[Object(E.jsx)(I.a,{as:"h1",children:"Gutarrak"}),Object(E.jsxs)(L.a.Group,{itemsPerRow:6,doubling:!0,children:[Object(E.jsx)(V.a,{active:t.loading,inverted:!0,children:Object(E.jsx)(Q.a,{children:"Bagatoz..."})}),t.loaded&&t.items.sort(W("display_name")).map((function(e){var t;return Object(E.jsxs)(L.a,{children:[Object(E.jsx)(U.a,{src:null===e||void 0===e||null===(t=e.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228),wrapped:!0,ui:!1}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(L.a.Header,{children:Object(E.jsx)(i.b,{to:"/gutarrak/".concat(null===e||void 0===e?void 0:e.display_name),children:null===e||void 0===e?void 0:e.display_name})}),Object(E.jsx)(L.a.Meta,{children:Object(E.jsx)("span",{className:"date",children:K()(null===e||void 0===e?void 0:e.created_at).format("YYYY/MM/DD")})}),(null===e||void 0===e?void 0:e.description)&&Object(E.jsxs)(L.a.Description,{children:[null===e||void 0===e?void 0:e.description.substring(0,55),"..."]})]}),Object(E.jsxs)(L.a.Content,{extra:!0,children:[Object(E.jsx)(P.a,{name:"eye"}),null===e||void 0===e?void 0:e.view_count," ikustaldi"]})]})}))]})]})},$=(a(219),a(239)),ee=a(242),te=a(237),ae=a(250),ne=[{key:"-created_at",value:"-created_at",text:Object(E.jsx)(E.Fragment,{children:"Berrienak"})},{key:"created_at",value:"created_at",text:Object(E.jsx)(E.Fragment,{children:"Zaharrenak"})},{key:"-view_count",value:"-view_count",text:Object(E.jsx)(E.Fragment,{children:"Ikusienak"})},{key:"broadcaster_name",value:"broadcaster_name",text:Object(E.jsxs)(E.Fragment,{children:["Streamerra",Object(E.jsx)(P.a,{name:"sort alphabet down"})]})},{key:"-broadcaster_name",value:"-broadcaster_name",text:Object(E.jsxs)(E.Fragment,{children:["Streamerra",Object(E.jsx)(P.a,{name:"sort alphabet up"})]})},{key:"creator_name",value:"creator_name",text:Object(E.jsxs)(E.Fragment,{children:["Egilea",Object(E.jsx)(P.a,{name:"sort alphabet down"})]})},{key:"-creator_name",value:"-creator_name",text:Object(E.jsxs)(E.Fragment,{children:["Egilea",Object(E.jsx)(P.a,{name:"sort alphabet up"})]})}],re=Object(R.a)(u.twitzlariak.map((function(e){return{key:e,value:e,text:e}}))),ce=a(238),ie=a(131),se=function(e){var t=e.clip;return Object(E.jsxs)(L.a,{children:[Object(E.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(E.jsx)(U.a,{src:t.thumbnail_url.replace("%{width}",440).replace("%{height}",228)})}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(L.a.Header,{children:t.title}),Object(E.jsx)(L.a.Description,{children:Object(E.jsx)(F.a,{children:Object(E.jsxs)(F.a.Row,{columns:2,children:[Object(E.jsxs)(F.a.Column,{width:12,children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(P.a,{name:"clock"}),K()(t.created_at).format("YYYY/MM/DD")]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(P.a,{name:"paperclip"}),t.creator_name]})]}),Object(E.jsxs)(F.a.Column,{width:4,children:[Object(E.jsx)("a",{type:"button",role:"button",title:"Share on twitter",target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?url=["+t.broadcaster_name+"]%0A"+t.title+"%0A%0A"+t.url,children:Object(E.jsx)(P.a,{name:"twitter",color:"blue",size:"big"})}),Object(E.jsx)("br",{}),Object(E.jsx)(ce.a,{content:"Arbelean kopiatu da zure sareetan partekatzeko!",hideOnScroll:!0,basic:!0,inverted:!0,position:"top center",on:"click",trigger:Object(E.jsx)(P.a,{name:"copy",size:"big",onClick:function(){navigator.clipboard.writeText("["+t.broadcaster_name+"]\n"+t.title+"\n\n"+t.url)}})})]})]})})}),Object(E.jsx)(ie.a,{attached:"top left",color:"violet",children:t.broadcaster_name})]}),Object(E.jsx)(L.a.Content,{extra:!0,children:Object(E.jsxs)("div",{children:[Object(E.jsx)(P.a,{name:"eye"}),t.view_count," ikustaldi"]})})]})},le=function(e){var t=e.erabiltzailea;return Object(E.jsxs)(L.a,{children:[Object(E.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:Object(E.jsx)(U.a,{src:(null===t||void 0===t?void 0:t.thumbnail_url.replace("{width}",440).replace("{height}",228))||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"})}),Object(E.jsxs)(L.a.Content,{children:[Object(E.jsx)(ie.a,{color:"red",ribbon:"right",children:"Zuzenean"}),Object(E.jsx)(L.a.Header,{children:Object(E.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:(null===t||void 0===t?void 0:t.user_name)||"Twitzlaria"})}),Object(E.jsx)(L.a.Meta,{children:(null===t||void 0===t?void 0:t.game_name)||"Jokoaren izena"}),Object(E.jsxs)(L.a.Description,{children:[(null===t||void 0===t?void 0:t.title)||"twitzlariaren deskribapena hemen idatzita agertuko da",Object(E.jsxs)("div",{children:[Object(E.jsx)(P.a,{name:"eye"}),t.viewer_count," ikusle"]})]})]})]})},oe=function(e){var t=Object(c.b)(),a=Object(n.useState)([]),r=Object(H.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)([]),o=Object(H.a)(l,2),j=o[0],h=o[1],O=Object(n.useState)(""),p=Object(H.a)(O,2),m=p[0],v=p[1],g=Object(n.useState)([]),k=Object(H.a)(g,2),w=k[0],_=k[1],D=Object(n.useState)(j.slice(0,12)),S=Object(H.a)(D,2),M=S[0],G=S[1],N=Object(n.useState)(1),U=Object(H.a)(N,2),Z=U[0],B=U[1],K=Object(n.useState)([]),q=Object(H.a)(K,2),J=q[0],V=q[1],Q=Object(c.c)((function(e){return e.erabiltzaileak})),X=Object(c.c)((function(e){return e.zuzenekoak})),ce=u.twitzlariak;Object(n.useEffect)((function(){var e;t((e=ce,function(){var t=Object(b.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.next=3,x(e);case 3:n=t.sent;try{a({type:z,payload:{items:n}})}catch(r){a({type:C,payload:r})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]);var ie=new Date;(new Date).setDate(ie.getDate()-30);var oe=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){G(j.slice(12*(Z-1),12*(Z-1)+12))}),[j,Z]),Object(n.useEffect)((function(){if(Q.loaded&&Q.items.length>0){var e=Object(R.a)(J);Q.items.forEach((function(t){oe(t.id).then((function(t){t.forEach((function(t){0===e.filter((function(e){return e.egilea.toUpperCase()===t.creator_name.toUpperCase()})).length?e.push({egilea:t.creator_name,klipak:1}):e.forEach((function(e){e.egilea.toUpperCase()===t.creator_name.toUpperCase()&&e.klipak++})),h((function(e){return[].concat(Object(R.a)(e),[t]).sort(W("-created_at"))})),s((function(e){return[].concat(Object(R.a)(e),[t]).sort(W("-created_at"))}))})),V(e)}))}))}}),[Q]);return Object(E.jsxs)(A.a,{children:[Object(E.jsx)("h1",{children:"Hasierako orria"}),Object(E.jsx)("div",{className:"pulsating-circle"}),Object(E.jsx)("h2",{className:"pulsating-circle",children:"Orain zuzenean"}),X.loaded&&X.items.length>0?Object(E.jsx)(L.a.Group,{itemsPerRow:3,doubling:!0,children:X.items.map((function(e,t){return Object(E.jsx)(le,{erabiltzailea:e})}))}):Object(E.jsx)(Y.a,{placeholder:!0,children:Object(E.jsxs)(I.a,{icon:!0,children:[Object(E.jsx)(P.a,{name:"history"}),"Orain momentuan ez dago inor zuzenean."]})}),Object(E.jsx)("hr",{}),Object(E.jsx)("h2",{children:"Azken 30 egunetako klipak"}),Object(E.jsxs)(Y.a,{children:[Object(E.jsx)("h3",{children:"Klipari ekinenak:"}),Object(E.jsx)(F.a,{columns:5,children:J&&J.sort(W("-klipak")).map((function(e,t){return Object(E.jsx)(F.a.Column,{children:Object(E.jsx)($.a,{header:Object(E.jsx)(ee.a,{inverted:m.toLowerCase()!==e.egilea.toLowerCase(),color:"violet",onClick:function(){return function(e){var t=Object(R.a)(i.filter((function(t){return t.creator_name.toLowerCase()===e.toLowerCase()})));v(e),h(t)}(e.egilea)},children:Object(E.jsx)("strong",{children:e.egilea})}),description:"".concat(e.klipak," klip eginda")})},t)}))})]}),Object(E.jsxs)(Y.a,{children:[Object(E.jsx)("strong",{children:"Ordenatu: "}),Object(E.jsx)(te.a,{placeholder:"Ordenatu klipak",options:ne,onChange:function(e,t){var a,n=t.value;return a=n,h(Object(R.a)(j.sort(W(a)))),void s(Object(R.a)(j.sort(W(a))))},defaultValue:"-created_at"}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("strong",{children:"Iragazi: "}),Object(E.jsx)(T.a,{placeholder:"Erabiltzaileak",multiple:!0,selection:!0,search:!0,onAddItem:function(e,t){return _([].concat(Object(R.a)(w),[{key:t.value,text:t.value,value:t.value}]))},options:re,onChange:function(e,t){var a=t.value;if(a.length>0){var n=Object(R.a)(i.filter((function(e){return a.includes(e.broadcaster_name.toLowerCase())})));h(n)}else 0===a.length&&h(i)}}),Object(E.jsx)("br",{}),Object(E.jsx)(ee.a,{as:"a",inverted:!0,color:"violet",className:"link-style",onClick:function(){v(""),h(i)},children:"Garbitu iragazkiak"})]}),Object(E.jsx)(Y.a,{children:M.length>0?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(L.a.Group,{itemsPerRow:4,doubling:!0,children:M.map((function(e){return Object(E.jsx)(se,{clip:e})}))}),Math.round(j.length/12)>1&&Object(E.jsx)(ae.a,{boundaryRange:1,defaultActivePage:1,showEllipsis:!0,activePage:Z,onPageChange:function(e,t){var a=t.activePage;return B(a)},totalPages:Math.round(j.length/12)})]}):Object(E.jsx)(Y.a,{placeholder:!0,children:Object(E.jsxs)(I.a,{icon:!0,children:[Object(E.jsx)(P.a,{name:"video"}),"Ez dago bilaketa horrekin ezer."]})})})]})};a(220);var ue=function(){return Object(E.jsxs)(l.d,{children:[Object(E.jsxs)(l.b,{path:"/",element:Object(E.jsx)(N,{}),children:[Object(E.jsx)(l.b,{exact:!0,path:"/",element:Object(E.jsx)(oe,{})}),Object(E.jsx)(l.b,{exact:!0,path:"/bilatzailea",element:Object(E.jsx)(q,{})}),Object(E.jsx)(l.b,{exact:!0,path:"/gutarrak",element:Object(E.jsx)(X,{})}),Object(E.jsx)(l.b,{path:"/gutarrak/:user",element:Object(E.jsx)(J,{})})]}),Object(E.jsx)(l.b,{exact:!0,path:"/",element:Object(E.jsx)(oe,{})})]})},je=a(167),de=a(101),be=a(39),he={items:[],loading:!1,loaded:!1,error:null},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(o.a)(Object(o.a)({},e),{},{loading:!0,loaded:!1});case w:return Object(o.a)(Object(o.a)({},e),{},{items:t.payload.items,loading:!1,loaded:!0});case _:return Object(o.a)(Object(o.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},pe={items:[],loading:!1,loaded:!1,error:null},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(o.a)(Object(o.a)({},e),{},{loading:!0,loaded:!1});case z:return Object(o.a)(Object(o.a)({},e),{},{items:t.payload.items,loading:!1,loaded:!0});case C:return Object(o.a)(Object(o.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},me=Object(be.b)({erabiltzaileak:Oe,zuzenekoak:xe}),fe=Object(je.a)({reducer:me,middleware:[de.a],devTools:!1});Object(r.createRoot)(document.getElementById("root")).render(Object(E.jsx)(c.a,{store:fe,children:Object(E.jsx)(i.a,{children:Object(E.jsx)(ue,{})})})),s()},51:function(e){e.exports=JSON.parse('{"twitzlariak":["aioraprobatxoa","anderzubillaga","andromeda2030","andonirock","antukun","ardobeltza000","arkkuso","arruartegamer3","athe2403","bigarrenkafea","bykugganhunter","doblemauler","eitbtwitch","ekintaekin","errazkin08","eupirratia","gaizkaizagirre","gaztea_","gamerauntsia","gari_infernu666","gaztezulo","harresigorria","ibila87","il4rgi_","iratimatelo","ionliz","kafearensemea","koxkortxo","kukulumutxun_sumoeuskaraz","landeths","larreategi","lastotxapel","maik_eus","maketoirratia","martxin","nebukaixo","norbait","pubguitar","pilulagorria","rekisab","river_rock_","satantxiki4","sithtal","sutanbang","suspekain_","sustatu","tasiosudupe","theprodigyeh","trikuxabi","txetxedeletxe","zitalko"]}')}},[[221,1,2]]]);
//# sourceMappingURL=main.32d60ff7.chunk.js.map