(this.webpackJsonptwitzlariak=this.webpackJsonptwitzlariak||[]).push([[0],{146:function(e){e.exports=JSON.parse('{"client_id":"e3lru0kww739k9i9qvw50qh90its46","token":"ns9qmx2ghd2yolux9w7glgevjuutij","client_secret":"wvjugh6hou4aty8j7el84rqi290ntp"}')},194:function(e,t,a){},214:function(e,t,a){},217:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(162),c=a.n(r),i=a(32),s=a(27),l=(a(194),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,258)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))}),o=a(7),j=a(12),d=a(51),u=a(9),b=a.n(u),h=a(15),O=a(146),p=a(165),x=a.n(p).a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"client-id":O.client_id,Authorization:"Bearer "+O.token}}),m=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("streams?user_login="+t.join("&user_login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Promise.all(t.map(function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("clips?broadcaster_id=".concat(t.id,"&first=100"));case 2:r=e.sent,a.push({user_id:t.id,username:t.display_name,clips:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("users?login="+t.join("&login="));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=x,k="GET_ERABILTZAILEAK_PENDING",w="GET_ERABILTZAILEAK_SUCCESS",_="GET_ERABILTZAILEAK_ERROR",y="GET_ZUZENEKOAK_PENDING",z="GET_ZUZENEKOAK_SUCCESS",E="GET_ZUZENEKOAK_ERROR",C="GET_KLIPAK_PENDING",N="GET_KLIPAK_SUCCESS",S="GET_KLIPAK_ERROR",I="GET_BIDEOAK_PENDING",D="GET_BIDEOAK_SUCCESS",R="GET_BIDEOAK_ERROR",A=a(1),P=function(e){var t=d.twitzlariak;return function(a){var r=Object(i.b)();return Object(n.useEffect)((function(){var e;r((e=t,function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k}),t.next=3,g(e);case 3:n=t.sent;try{a({type:w,payload:{items:n}})}catch(r){a({type:_,payload:r})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[r]),Object(A.jsx)(e,Object(j.a)(Object(j.a)({},a),{},{children:a.children}))}},G=a(250),K=a(240),T=(a(214),function(){var e=Object(o.j)();return Object(A.jsxs)("div",{className:"header",children:["/"===e.pathname&&Object(A.jsx)("h1",{children:"Twitch euskaraz"}),Object(A.jsx)(G.a,{inverted:!0,children:Object(A.jsxs)(K.a,{children:[Object(A.jsx)(G.a.Item,{as:s.b,to:"/",children:"Hasierako orria"}),Object(A.jsx)(G.a.Item,{as:s.b,to:"/gutarrak",children:"Gutarrak"})]})})]})}),F=a(251),L=a(252),M=a(253),Y=a(245),B=(a(217),function(){return Object(A.jsx)(F.a,{vertical:!0,className:"footer",children:Object(A.jsx)(K.a,{children:Object(A.jsxs)(L.a,{divided:!0,stackable:!0,children:[Object(A.jsxs)(L.a.Column,{width:8,children:[Object(A.jsx)(M.a,{inverted:!0,as:"h4",content:"Informazio orokorra"}),Object(A.jsx)("p",{children:"Posible da hemen streamer euskaldun guztiak ez agertzea, eta agian norbait aktibo ez egotea. Dena den, noizbait zuzenekoren bat euskaraz egin duen oro zerrendan gehitzeko saiakera egon da. Norbait falta dela ikusten baduzu mesedez jakinarazi."})]}),Object(A.jsxs)(L.a.Column,{width:8,children:[Object(A.jsx)(M.a,{inverted:!0,as:"h4",content:"Niri buruz:"}),Object(A.jsxs)(Y.a,{children:[Object(A.jsxs)(Y.a.Item,{children:[Object(A.jsx)(Y.a.Icon,{name:"twitter"}),Object(A.jsx)(Y.a.Content,{children:Object(A.jsx)("a",{href:"https://www.twitter.com/ionliz",children:"@ionliz"})})]}),Object(A.jsxs)(Y.a.Item,{children:[Object(A.jsx)(Y.a.Icon,{name:"twitch"}),Object(A.jsx)(Y.a.Content,{children:Object(A.jsx)("a",{href:"https://www.twitch.com/ionliz",children:"@ionliz"})})]}),Object(A.jsxs)(Y.a.Item,{children:[Object(A.jsx)(Y.a.Icon,{name:"github"}),Object(A.jsx)(Y.a.Content,{children:Object(A.jsx)("a",{href:"https://www.github.com/ionlizarazu",children:"@ionlizarazu"})})]})]})]})]})})})});var H=P((function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(T,{}),Object(A.jsx)(o.a,{}),Object(A.jsx)(B,{})]})})),Z=(a(220),a(17)),U=a(10),q=a(106),J=a(246),V=a(62),Q=a(169),W=(a(221),function(e){var t=e.title,a=e.meta,n=e.description,r=e.image_url,c=e.zuzenean,i=void 0!==c&&c;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(Q.a,{floated:"left",size:"tiny",src:r||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(A.jsxs)(J.a.Header,{children:[i&&Object(A.jsx)(V.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),t||"Twitzlaria"]}),Object(A.jsx)(J.a.Meta,{children:a?a+" ikustaldi":"0 ikustaldi"}),Object(A.jsx)(J.a.Description,{className:"ellipsis",children:n||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})}),X=a(46),$=a.n(X),ee=function(e){var t=Object(n.useState)([]),a=Object(U.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([]),l=Object(U.a)(i,2),o=l[0],j=l[1],u=Object(n.useState)([]),O=Object(U.a)(u,2),p=O[0],x=O[1],m=Object(n.useState)([]),f=Object(U.a)(m,2),g=f[0],k=f[1],w=Object(n.useState)([]),_=Object(U.a)(w,2),y=_[0],z=_[1],E=Object(n.useState)([]),C=Object(U.a)(E,2),N=C[0],S=C[1],I=d.twitzlariak.map((function(e){return{key:e,text:e,value:e}}));function D(){return(D=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(S(t.display_name),k([]),z([]),a=[],k([]),z(a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.length>0&&v.get("users?login="+p.join("&login=")).then((function(e){return c(e.data.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(n.useEffect)((function(){j(I),S("")}),[I]);var R=new Date;return(new Date).setDate(R.getDate()-7),Object(A.jsxs)(K.a,{children:[Object(A.jsx)(q.a,{placeholder:"Erabiltzaileak",fluid:!0,multiple:!0,selection:!0,search:!0,allowAdditions:!0,onAddItem:function(e,t){return j([].concat(Object(Z.a)(o),[{key:t.value,text:t.value,value:t.value}]))},options:o,onChange:function(e,t){var a=t.value;x(a),k([]),z([])}}),Object(A.jsx)(F.a,{children:Object(A.jsxs)(L.a,{columns:2,divided:!0,children:[Object(A.jsx)(L.a.Column,{width:5,children:r.length>0?r.map((function(e,t){return Object(A.jsx)(J.a,{className:N===e.display_name?"active":"",onClick:function(){return function(e){return D.apply(this,arguments)}(e)},children:Object(A.jsx)(W,{title:e.display_name,meta:e.view_count,description:e.description,image_url:e.profile_image_url},t)})})):Object(A.jsx)(J.a,{children:Object(A.jsx)(W,{})})}),Object(A.jsxs)(L.a.Column,{width:5,children:[Object(A.jsx)(F.a,{children:Object(A.jsxs)(M.a,{as:"h2",children:[Object(A.jsx)(V.a,{size:"tiny",name:"video camera"}),Object(A.jsx)(M.a.Content,{children:"Bideoak"})]})}),Object(A.jsx)(J.a.Group,{children:g.length>0?g.map((function(e,t){return Object(A.jsxs)(J.a,{children:[Object(A.jsx)(Q.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(J.a.Header,{as:s.b,to:{pathname:e.url},target:"_blank",children:e.title}),Object(A.jsx)(J.a.Description,{as:"a",children:$()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(A.jsx)(A.Fragment,{children:"Ez dago bideorik..."})})]}),Object(A.jsxs)(L.a.Column,{width:5,children:[Object(A.jsx)(F.a,{children:Object(A.jsxs)(M.a,{as:"h2",children:[Object(A.jsx)(V.a,{size:"tiny",name:"paperclip"}),Object(A.jsx)(M.a.Content,{children:"klipak"})]})}),Object(A.jsx)(J.a.Group,{children:y.length>0?y.map((function(e,t){return Object(A.jsxs)(J.a,{children:[Object(A.jsx)(Q.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(J.a.Header,{as:s.b,to:{pathname:e.url},children:e.title}),Object(A.jsx)(J.a.Description,{as:"a",children:$()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})):Object(A.jsx)(A.Fragment,{children:"Ez dago klipik..."})})]})]})})]})},te=function(e){var t,a=Object(o.o)().user,n=Object(i.c)((function(e){return e.erabiltzaileak})),r=n.loaded&&n.items.length>0?n.items.filter((function(e){return e.login.toUpperCase()===a.toUpperCase()})):{},c=r.length>0?r[0]:{};return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:a}),Object(A.jsxs)(J.a,{children:[Object(A.jsx)(Q.a,{src:null===c||void 0===c||null===(t=c.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228),wrapped:!0,ui:!1}),Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(J.a.Header,{children:null===c||void 0===c?void 0:c.display_name}),Object(A.jsx)(J.a.Meta,{children:Object(A.jsx)("span",{className:"date",children:$()(null===c||void 0===c?void 0:c.created_at).format("YYYY/MM/DD")})}),Object(A.jsx)(J.a.Description,{children:null===c||void 0===c?void 0:c.description})]}),Object(A.jsxs)(J.a.Content,{extra:!0,children:[Object(A.jsx)(V.a,{name:"eye"}),null===c||void 0===c?void 0:c.view_count," ikustaldi"]})]})]})},ae=a(254),ne=a(241),re=function(e){var t,a=e.user;return Object(A.jsxs)(J.a,{children:[Object(A.jsx)(s.b,{to:"/gutarrak/".concat(null===a||void 0===a?void 0:a.display_name),children:Object(A.jsx)(Q.a,{src:null===a||void 0===a||null===(t=a.profile_image_url)||void 0===t?void 0:t.replace("%{width}",440).replace("%{height}",228)})}),Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(J.a.Header,{children:Object(A.jsx)(s.b,{to:"/gutarrak/".concat(null===a||void 0===a?void 0:a.display_name),children:null===a||void 0===a?void 0:a.display_name})}),Object(A.jsx)(J.a.Meta,{children:Object(A.jsx)("span",{className:"date",children:$()(null===a||void 0===a?void 0:a.created_at).format("YYYY/MM/DD")})}),(null===a||void 0===a?void 0:a.description)&&Object(A.jsx)(J.a.Description,{children:(null===a||void 0===a?void 0:a.description.length)>60?"".concat(null===a||void 0===a?void 0:a.description.substring(0,60),"..."):null===a||void 0===a?void 0:a.description})]}),Object(A.jsxs)(J.a.Content,{extra:!0,children:[Object(A.jsx)(V.a,{name:"eye"}),null===a||void 0===a?void 0:a.view_count," ikustaldi"]})]})};function ce(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}}var ie=function(e){var t=Object(i.c)((function(e){return e.erabiltzaileak}));return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Gutarrak"}),Object(A.jsx)(F.a,{basic:!0,children:Object(A.jsxs)(J.a.Group,{itemsPerRow:6,doubling:!0,children:[Object(A.jsx)(ae.a,{active:t.loading,inverted:!0,children:Object(A.jsx)(ne.a,{children:"Bagatoz..."})}),t.loaded&&t.items.sort(ce("display_name")).map((function(e){return Object(A.jsx)(re,{user:e})}))]})})]})},se=a(247),le=a(248),oe=a(242),je=a(257),de=a(249),ue=a(132),be=a(243),he=(a(223),function(e){var t=e.clip;return Object(A.jsxs)(J.a,{className:"clip-card",children:[Object(A.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Q.a,{src:t.thumbnail_url.replace("%{width}",440).replace("%{height}",228)})}),Object(A.jsx)(ue.a,{attached:"top left",className:"card-ribbon",children:t.broadcaster_name}),Object(A.jsxs)(J.a.Content,{className:"card-content",children:[Object(A.jsx)(J.a.Header,{children:Object(A.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title})}),Object(A.jsx)(F.a,{basic:!0,children:Object(A.jsx)(L.a,{children:Object(A.jsxs)(L.a.Row,{children:[Object(A.jsx)(L.a.Column,{width:11,className:"no-l-padded",children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(L.a.Row,{className:"no-padded",children:Object(A.jsxs)(L.a.Column,{children:[Object(A.jsx)(V.a,{name:"paperclip"}),t.creator_name.length>15?"".concat(t.creator_name.substring(0,15),"..."):t.creator_name]})}),Object(A.jsx)(L.a.Row,{className:"no-padded",children:Object(A.jsxs)(L.a.Column,{children:[Object(A.jsx)(V.a,{name:"clock"}),$()(t.created_at).format("YYYY/MM/DD")]})}),Object(A.jsx)(L.a.Row,{className:"no-padded",children:Object(A.jsxs)(L.a.Column,{children:[Object(A.jsx)(V.a,{name:"eye"}),t.view_count," ikustaldi"]})})]})}),Object(A.jsxs)(L.a.Column,{width:5,className:"share-clip",children:[Object(A.jsx)("a",{type:"button",role:"button",title:"Share on twitter",target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?url=[".concat(t.broadcaster_name,"]%0A").concat(t.title,"%0A%0A").concat(t.url),children:Object(A.jsx)(V.a,{name:"twitter",color:"blue",size:"large"})}),Object(A.jsx)(be.a,{content:"Arbelean kopiatu da zure sareetan partekatzeko!",basic:!0,inverted:!0,position:"top center",on:"click",trigger:Object(A.jsx)(V.a,{name:"copy",size:"large",className:"copy-icon",onClick:function(){navigator.clipboard.writeText("[".concat(t.broadcaster_name,"]\n").concat(t.title,"\n\n").concat(t.url))}})})]})]})})})]})]})}),Oe=function(e){var t=e.erabiltzailea;return Object(A.jsxs)(J.a,{children:[Object(A.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Q.a,{src:(null===t||void 0===t?void 0:t.thumbnail_url.replace("{width}",440).replace("{height}",228))||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",className:"live-img"})}),Object(A.jsxs)(J.a.Content,{children:[Object(A.jsx)(ue.a,{color:"red",ribbon:"right",children:"Zuzenean"}),Object(A.jsx)(J.a.Header,{children:Object(A.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:(null===t||void 0===t?void 0:t.user_name)||"Twitzlaria"})}),(null===t||void 0===t?void 0:t.game_name)&&Object(A.jsx)(J.a.Meta,{children:null===t||void 0===t?void 0:t.game_name}),Object(A.jsxs)(J.a.Description,{children:[(null===t||void 0===t?void 0:t.title)||"twitzlariaren deskribapena hemen idatzita agertuko da",Object(A.jsxs)("div",{children:[Object(A.jsx)(V.a,{name:"eye"}),t.viewer_count," ikusle"]})]})]})]})},pe=[{key:"-created_at",value:"-created_at",text:Object(A.jsx)(A.Fragment,{children:"Berrienetik zaharrenera"})},{key:"created_at",value:"created_at",text:Object(A.jsx)(A.Fragment,{children:"Zaharrenetik berrienera"})},{key:"-view_count",value:"-view_count",text:Object(A.jsx)(A.Fragment,{children:"Ikusienak aurrena"})},{key:"broadcaster_name",value:"broadcaster_name",text:Object(A.jsxs)(A.Fragment,{children:["Streamerra",Object(A.jsx)(V.a,{name:"sort alphabet down"})]})},{key:"-broadcaster_name",value:"-broadcaster_name",text:Object(A.jsxs)(A.Fragment,{children:["Streamerra",Object(A.jsx)(V.a,{name:"sort alphabet up"})]})},{key:"creator_name",value:"creator_name",text:Object(A.jsxs)(A.Fragment,{children:["Egilea",Object(A.jsx)(V.a,{name:"sort alphabet down"})]})},{key:"-creator_name",value:"-creator_name",text:Object(A.jsxs)(A.Fragment,{children:["Egilea",Object(A.jsx)(V.a,{name:"sort alphabet up"})]})}],xe=(Object(Z.a)(d.twitzlariak.map((function(e){return{key:e,value:e,text:e}}))),a(224),a(16)),me=function(e){var t,a,r=Object(i.c)((function(e){return e.erabiltzaileak})),c=Object(n.useRef)(r),s=Object(i.c)((function(e){return e.zuzenekoak})),l=Object(i.c)((function(e){return e.klipak})),o=Object(i.b)(),u=Object(n.useState)([]),O=Object(U.a)(u,2),p=O[0],x=O[1],g=Object(n.useState)([]),v=Object(U.a)(g,2),k=v[0],w=v[1],_=Object(n.useState)([]),I=Object(U.a)(_,2),D=I[0],R=I[1],P=Object(n.useState)(!1),G=Object(U.a)(P,2),K=G[0],T=G[1],Y=function(e){var t=Object(n.useState)(e),a=Object(U.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(e),s=Object(U.a)(i,2),l=s[0],o=s[1],d=Object(n.useState)(10),u=Object(U.a)(d,2),b=u[0],h=u[1],O=Object(n.useState)(1),p=Object(U.a)(O,2),x=p[0],m=p[1],f=Object(n.useState)(e.slice((x-1)*b,(x-1)*b+b)),g=Object(U.a)(f,2),v=g[0],k=g[1],w=Object(n.useState)({}),_=Object(U.a)(w,2),y=_[0],z=_[1];return Object(n.useEffect)((function(){var e=Object(Z.a)(r);Object.entries(y).forEach((function(t){var a=t[0],n=t[1];n.length>0&&(e=e.filter((function(e){return n.includes(e[a])})))})),o(e)}),[y]),Object(n.useEffect)((function(){k(l.slice((x-1)*b,(x-1)*b+b))}),[l,x,b]),{functions:{setCurrentPage:m,setPaginationSize:h,applyFilter:function(e,t,a,n){var r=t.value,c=Object(j.a)(Object(j.a)({},y),{},Object(xe.a)({},a,r));z(c)},setDataList:o,setOriginalDataList:c,clearFilters:function(){o(r),z({})},applyOrder:function(e){o(Object(Z.a)(l.sort(ce(e))))}},data:{pagination:v,currentPage:x,paginationSize:b,originalDataList:r,dataList:l,filters:y}}}([]),B=Y.functions,H=Y.data,Q=H.pagination,W=H.currentPage,X=H.paginationSize,$=H.dataList,ee=H.filters;Object(n.useEffect)((function(){if(l.loaded&&Object.keys(l.broadcasters).length>0){var e=[];Object.keys(l.broadcasters).forEach((function(t){l.broadcasters[t].length>0&&l.broadcasters[t].forEach((function(t){return e.push(t)}))})),B.setDataList(e.sort(ce("-created_at"))),B.setOriginalDataList(Object(Z.a)(e.sort(ce("-created_at")))),x(Object(Z.a)(new Set(e.map((function(e){return e.broadcaster_name})).sort())).map((function(e){return{key:e,value:e,text:e}}))),w(Object(Z.a)(new Set(e.map((function(e){return e.creator_name})).sort())).map((function(t){var a=e.filter((function(e){return e.creator_name===t}));return{key:t,value:t,text:t,count:a.length}})))}}),[l.loaded,l.broadcasters]);var te=d.twitzlariak;Object(n.useEffect)((function(){o(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.next=3,m(e);case 3:n=t.sent;try{a({type:z,payload:{items:n}})}catch(r){a({type:E,payload:r})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(te))}),[o,te]),Object(n.useEffect)((function(){c.current.loading&&r.loaded&&r.items.length>0&&o(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:C}),t.next=3,f(e);case 3:n=t.sent;try{a({type:N,payload:{items:n}})}catch(r){a({type:S,payload:r})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r.items)),c.current=r}),[o,r]);return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"live-container",children:[Object(A.jsx)("h2",{children:"Orain zuzenean"}),s.loaded&&s.items.length>0?Object(A.jsx)(F.a,{basic:!0,className:"lives-container",children:Object(A.jsx)(J.a.Group,{itemsPerRow:3,stackable:!0,children:s.items.map((function(e,t){return Object(A.jsx)(Oe,{erabiltzailea:e,isLive:!0})}))})}):Object(A.jsx)(F.a,{basic:!0,className:"live",children:Object(A.jsxs)(M.a,{icon:!0,children:[Object(A.jsx)(V.a,{name:"history"}),"Orain momentuan ez dago inor zuzenean."]})})]}),Object(A.jsxs)("div",{className:"clips-container",children:[Object(A.jsx)("h2",{children:"Klipak"}),Object(A.jsxs)(se.a.Pushable,{as:F.a,style:{overflow:"hidden"},children:[Object(A.jsxs)(se.a,{as:F.a,animation:"push",visible:K,className:"clip-filter-container",children:[Object(A.jsx)(V.a,{className:"close-filter",name:"close",onClick:function(){return T(!1)}}),Object(A.jsx)("h3",{children:"Iragazkiak:"}),Object(A.jsxs)(L.a,{columns:1,stackable:!0,children:[Object(A.jsx)(L.a.Row,{children:Object(A.jsxs)(L.a.Column,{children:[Object(A.jsx)("strong",{className:"filter-heading",children:"Klip egilea:"}),Object(A.jsx)(q.a,{id:"filter-clip-creator",placeholder:"Klip egilea",multiple:!0,selection:!0,search:!0,value:null!==(t=ee.creator_name)&&void 0!==t?t:[],onAddItem:function(e,t){return R([].concat(Object(Z.a)(D),[{key:t.value,text:t.value,value:t.value}]))},options:k,onChange:function(e,t){return B.applyFilter(e,t,"creator_name")}})]})}),Object(A.jsx)(L.a.Row,{children:Object(A.jsxs)(L.a.Column,{children:[Object(A.jsx)("strong",{className:"filter-heading",children:"Streamerra:"}),Object(A.jsx)(q.a,{id:"filter-streamer",placeholder:"Steamerra",multiple:!0,selection:!0,search:!0,value:null!==(a=ee.broadcaster_name)&&void 0!==a?a:[],onAddItem:function(e,t){return R([].concat(Object(Z.a)(D),[{key:t.value,text:t.value,value:t.value}]))},options:p,onChange:function(e,t){return B.applyFilter(e,t,"broadcaster_name")}})]})}),Object(A.jsx)(L.a.Row,{children:Object(A.jsx)(L.a.Column,{children:Object(A.jsx)(le.a,{className:"secondary",onClick:B.clearFilters,children:"Garbitu iragazkiak"})})})]})]}),Object(A.jsx)(se.a.Pusher,{children:Object(A.jsxs)(F.a,{basic:!0,className:"clips-container",loading:l.loading,children:[Object(A.jsxs)(le.a,{onClick:function(){return T(!K)},icon:!0,labelPosition:"left",className:K?"hidden-button primary":"primary",children:[Object(A.jsx)(V.a,{name:"filter"}),"Iragazkiak"]}),Object(A.jsx)("strong",{className:"filter-heading",children:"Ordenatu:"}),Object(A.jsx)(oe.a,{placeholder:"Ordenatu klipak",options:pe,onChange:function(e,t){var a=t.value;return B.applyOrder(a)},defaultValue:"-created_at"}),Q.length>0?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J.a.Group,{itemsPerRow:5,stackable:!0,children:Q.map((function(e,t){return Object(A.jsx)(he,{clip:e},t)}))}),Math.round($.length/X)>1&&Object(A.jsxs)(F.a,{basic:!0,textAlign:"center",children:[Object(A.jsx)(je.a,{boundaryRange:1,firstItem:null,lastItem:null,size:"mini",activePage:W,onPageChange:function(e,t){var a=t.activePage;return B.setCurrentPage(a)},totalPages:Math.round($.length/X)}),Object(A.jsx)(oe.a,{className:"pagination-size",options:[{value:10,text:"10 klip orriko"},{value:20,text:"20 klip orriko"},{value:50,text:"50 klip orriko"},{value:100,text:"100 klip orriko"}],onChange:function(e,t){var a=t.value;return B.setPaginationSize(a)},defaultValue:X})]})]}):Object(A.jsx)(F.a,{placeholder:!0,className:"no-clips",children:Object(A.jsx)(M.a,{})})]})})]}),Object(A.jsxs)(F.a,{className:"clipers-container",children:[Object(A.jsx)("h3",{children:"Klipen egileak:"}),Object(A.jsx)(L.a,{columns:5,stackable:!0,className:"ranking-grid",children:k&&k.sort(ce("-count")).slice(0,25).map((function(e,t){return Object(A.jsx)(L.a.Column,{children:Object(A.jsxs)(de.a,{size:(a=e.count,a<20?"mini":a<50?"tiny":a<75?"small":a<100?"large":"huge"),color:"violet",children:[Object(A.jsx)(de.a.Value,{children:e.count}),Object(A.jsx)(de.a.Label,{children:e.value})]})},t);var a}))})]})]})]})};a(225);var fe=function(){return Object(A.jsx)(o.d,{children:Object(A.jsxs)(o.b,{path:"/",element:Object(A.jsx)(H,{}),children:[Object(A.jsx)(o.b,{exact:!0,path:"/",element:Object(A.jsx)(me,{})}),Object(A.jsx)(o.b,{exact:!0,path:"/bilatzailea",element:Object(A.jsx)(ee,{})}),Object(A.jsx)(o.b,{basename:"/twitzlariak",exact:!0,path:"/gutarrak",element:Object(A.jsx)(ie,{})}),Object(A.jsx)(o.b,{path:"/gutarrak/:user",element:Object(A.jsx)(te,{})})]})})},ge=a(168),ve=a(102),ke=a(39),we={items:[],loading:!1,loaded:!1,error:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,loaded:!1});case w:return Object(j.a)(Object(j.a)({},e),{},{items:t.payload.items,loading:!1,loaded:!0});case _:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},ye={items:[],loading:!1,loaded:!1,error:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,loaded:!1});case z:return Object(j.a)(Object(j.a)({},e),{},{items:t.payload.items,loading:!1,loaded:!0});case E:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},Ee={broadcasters:{},clippers:{},loading:!1,loaded:!1,error:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,a={},n={};switch(t.type){case C:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,loaded:!1});case N:return t.payload.items.forEach((function(e){a[e.username]=e.clips.length,n[e.username]=e.clips})),Object(j.a)(Object(j.a)({},e),{},{broadcasters:Object(j.a)(Object(j.a)({},e.broadcasters),n),clippers:Object(j.a)(Object(j.a)({},e.clippers),a),loading:!1,loaded:!0});case S:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},Ne={broadcasters:{},loading:!1,loaded:!1,error:null},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,loaded:!1});case D:return Object(j.a)(Object(j.a)({},e),{},{broadcasters:Object(j.a)(Object(j.a)({},e.broadcasters),{},Object(xe.a)({},t.username,t.payload.items)),loading:!1,loaded:!0});case R:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,loading:!1,loaded:!1});default:return e}},Ie=Object(ke.b)({erabiltzaileak:_e,zuzenekoak:ze,klipak:Ce,bideoak:Se}),De=Object(ge.a)({reducer:Ie,middleware:[ve.a],devTools:!1});c.a.createRoot(document.getElementById("root")).render(Object(A.jsx)(i.a,{store:De,children:Object(A.jsx)(s.a,{basename:"/twitzlariak",children:Object(A.jsx)(fe,{})})})),l()},51:function(e){e.exports=JSON.parse('{"twitzlariak":["aioraprobatxoa","anderzubillaga","andromeda2030","andonirock","antukun","ardobeltza000","arkkuso","arruartegamer3","athe2403","bigarrenkafea","bykugganhunter","doblemauler","eitbtwitch","ekintaekin","errazkin08","eupirratia","gaizkaizagirre","gaztea_","gamerauntsia","gari_infernu666","gaztezulo","harresigorria","ibila87","il4rgi_","iratimatelo","ionliz","kafearensemea","koxkortxo","kukulumutxun_sumoeuskaraz","landeths","larreategi","lastotxapel","maik_eus","maketoirratia","martxin","nebukaixo","norbait","pubguitar","pilulagorria","rekisab","river_rock_","satantxiki4","sithtal","sutanbang","suspekain_","sustatu","tasiosudupe","theprodigyeh","trikuxabi","txetxedeletxe","zitalko"]}')}},[[226,1,2]]]);
//# sourceMappingURL=main.2a15dcbd.chunk.js.map