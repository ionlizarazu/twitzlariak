(this.webpackJsonptwitzlariak=this.webpackJsonptwitzlariak||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"twitzlariak":["ardobeltza000","arkkuso","bigarrenkafea","bykugganhunter","ekintaekin","errazkin08","ibila87","il4rgi_","ionliz","kukulumutxun_sumoeuskaraz","lastotxapel","nebukaixo","pubguitar","zitalko"]}')},121:function(e){e.exports=JSON.parse('{"client_id":"e3lru0kww739k9i9qvw50qh90its46","tokenold":"prqn224ilspkpzfyfkgb9sz944fygk","token":"5zicjka4a4x9geid47n5vq2khgfbuf"}')},141:function(e,t,n){"use strict";(function(e){n(0),n(167),n(168);var a=n(114),r=n(150),c=n(113),i=n(53),s=n(9),u=n(148),l=n(149),o=n(145),j=n(2);t.a=function(){return console.log("PROCESS: ",e),Object(j.jsxs)(i.a,{basename:"/",children:[Object(j.jsx)(a.a,{inverted:!0,children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(a.a.Item,{as:i.b,to:"/",children:"Portada"}),Object(j.jsx)(a.a.Item,{as:i.b,to:"/bilatzailea",children:"Bilatzailea"}),Object(j.jsxs)(a.a.Item,{as:i.b,to:"/zuzenean",header:!0,children:[Object(j.jsx)(c.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),"Zuzenean"]})]})}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(o.a,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/bilatzailea",children:Object(j.jsx)(u.a,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/zuzenean",children:Object(j.jsx)(l.a,{})})]})]})}}).call(this,n(126))},145:function(e,t,n){"use strict";n(0);var a=n(150),r=n(2);t.a=function(e){return Object(r.jsx)(a.a,{children:Object(r.jsx)("h1",{children:"Portadako titularra"})})}},148:function(e,t,n){"use strict";var a=n(112),r=n(14),c=n.n(r),i=n(30),s=n(37),u=n(0),l=n(55),o=n(150),j=n(205),d=n(208),b=n(209),h=n(206),p=n(210),O=n(113),x=n(146),f=n(53),m=(n(187),n(2)),g=function(e){var t=e.title,n=e.meta,a=e.description,r=e.image_url,c=e.zuzenean,i=void 0!==c&&c;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h.a.Content,{children:[Object(m.jsx)(x.a,{floated:"left",size:"tiny",src:r||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(m.jsxs)(h.a.Header,{children:[i&&Object(m.jsx)(O.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),t||"Twitzlaria"]}),Object(m.jsx)(h.a.Meta,{children:n?n+" ikustaldi":"0 ikustaldi"}),Object(m.jsx)(h.a.Description,{className:"ellipsis",children:a||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})},v=n(102),w=n(123),k=n.n(w);t.a=function(e){var t=Object(u.useState)([]),n=Object(s.a)(t,2),r=n[0],w=n[1],z=Object(u.useState)([]),_=Object(s.a)(z,2),y=_[0],D=_[1],C=Object(u.useState)([]),S=Object(s.a)(C,2),M=S[0],F=S[1],H=Object(u.useState)([]),Y=Object(s.a)(H,2),E=Y[0],I=Y[1],B=Object(u.useState)([]),P=Object(s.a)(B,2),q=P[0],J=P[1],N=Object(u.useState)([]),T=Object(s.a)(N,2),A=T[0],G=T[1],L=v.twitzlariak.map((function(e){return{key:e,text:e,value:e}})),R=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(){return(U=Object(i.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return G(t.display_name),I([]),J([]),n=[],r=[],e.next=8,R(t.id);case 8:return e.next=10,e.sent.map((function(e){new Date(e.created_at)>Q&&(n=[].concat(Object(a.a)(n),[e]))}));case 10:return I(n),e.next=13,Z(t.id);case 13:return e.next=15,e.sent.map((function(e){new Date(e.created_at)>Q&&(r=[].concat(Object(a.a)(r),[e]))}));case 15:J(r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(u.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.length>0&&l.d.get("users?login="+M.join("&login=")).then((function(e){return w(e.data.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[M]),Object(u.useEffect)((function(){D(L),G("")}),[]);var K=new Date,Q=new Date;return Q.setDate(K.getDate()-7),Object(m.jsxs)(o.a,{children:[Object(m.jsx)(j.a,{placeholder:"Erabiltzaileak",fluid:!0,multiple:!0,selection:!0,search:!0,allowAdditions:!0,onAddItem:function(e,t){return D([].concat(Object(a.a)(y),[{key:t.value,text:t.value,value:t.value}]))},options:y,onChange:function(e,t){var n=t.value;F(n),I([]),J([])}}),Object(m.jsx)(d.a,{children:Object(m.jsxs)(b.a,{columns:2,divided:!0,children:[Object(m.jsx)(b.a.Column,{width:5,children:r.length>0?r.map((function(e,t){return Object(m.jsx)(h.a,{className:A===e.display_name?"active":"",onClick:function(){return function(e){return U.apply(this,arguments)}(e)},children:Object(m.jsx)(g,{title:e.display_name,meta:e.view_count,description:e.description,image_url:e.profile_image_url},t)})})):Object(m.jsx)(h.a,{children:Object(m.jsx)(g,{})})}),Object(m.jsxs)(b.a.Column,{width:5,children:[E.length>0&&Object(m.jsx)(d.a,{children:Object(m.jsxs)(p.a,{as:"h2",children:[Object(m.jsx)(O.a,{size:"tiny",name:"video camera"}),Object(m.jsx)(p.a.Content,{children:"Bideoak"})]})}),Object(m.jsx)(h.a.Group,{children:E.length>0?E.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:new Date(e.created_at)>Q&&Object(m.jsxs)(h.a,{children:[Object(m.jsx)(x.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(m.jsxs)(h.a.Content,{children:[Object(m.jsx)(h.a.Header,{as:f.b,to:{pathname:e.url},target:"_blank",children:e.title}),Object(m.jsx)(h.a.Description,{as:"a",children:k()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})})):Object(m.jsx)(m.Fragment,{})})]}),Object(m.jsxs)(b.a.Column,{width:5,children:[q.length>0&&Object(m.jsx)(d.a,{children:Object(m.jsxs)(p.a,{as:"h2",children:[Object(m.jsx)(O.a,{size:"tiny",name:"paperclip"}),Object(m.jsx)(p.a.Content,{children:"klipak"})]})}),Object(m.jsx)(h.a.Group,{children:q.length>0?q.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:new Date(e.created_at)>Q&&Object(m.jsxs)(h.a,{children:[Object(m.jsx)(x.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(m.jsxs)(h.a.Content,{children:[Object(m.jsx)(h.a.Header,{as:f.b,to:{pathname:e.url},children:e.title}),Object(m.jsx)(h.a.Description,{as:"a",children:k()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})})):Object(m.jsx)(m.Fragment,{})})]})]})})]})}},149:function(e,t,n){"use strict";var a=n(14),r=n.n(a),c=n(30),i=n(37),s=n(0),u=n(206),l=n(146),o=n(147),j=n(2),d=function(e){var t=e.erabiltzailea;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",{href:"https://www.twitch.tv/"+(null===t||void 0===t?void 0:t.user_login),target:"_blank",rel:"noreferrer",children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(l.a,{src:(null===t||void 0===t?void 0:t.thumbnail_url.replace("{width}",440).replace("{height}",228))||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(j.jsxs)(u.a.Content,{children:[Object(j.jsx)(o.a,{color:"red",ribbon:"right",children:"Zuzenean"}),Object(j.jsx)(u.a.Header,{children:(null===t||void 0===t?void 0:t.user_name)||"Twitzlaria"}),Object(j.jsx)(u.a.Meta,{children:null===t||void 0===t?void 0:t.game_name}),Object(j.jsx)(u.a.Description,{children:(null===t||void 0===t?void 0:t.title)||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})]})})})},b=n(150),h=n(208),p=n(55),O=n(102);t.a=function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),a=n[0],l=n[1],o=O.twitzlariak.map((function(e){return e})),x=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,Object(p.c)(o);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x()}),[]),Object(j.jsx)(b.a,{style:{margin:20},children:Object(j.jsx)(h.a,{children:Object(j.jsx)(u.a.Group,{children:a.length>0?a.map((function(e,t){return Object(j.jsx)(d,{erabiltzailea:e})})):Object(j.jsx)(d,{})})})})}},166:function(e,t,n){},167:function(e,t,n){},187:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(54),i=n.n(c),s=(n(166),n(141)),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},l=n(2);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{})}),document.getElementById("root")),u()},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var a=n(14),r=n.n(a),c=n(30),i=n(142),s=n.n(i),u=n(121),l=s.a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"client-id":u.client_id,Authorization:"Bearer "+u.token}}),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("streams?user_login="+t.join("&user_login="));case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("videos?user_id="+t);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("clips?broadcaster_id="+t);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.d=l}},[[196,1,2]]]);
//# sourceMappingURL=main.a4b6be38.chunk.js.map