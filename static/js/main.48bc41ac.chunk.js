(this.webpackJsonptwitzlariak=this.webpackJsonptwitzlariak||[]).push([[0],{103:function(e){e.exports=JSON.parse('{"twitzlariak":["ardobeltza000","arkkuso","bykugganhunter","ekintaekin","errazkin08","ibila87","il4rgi_","ionliz","kukulumutxun_sumoeuskaraz","lastotxapel","nebukaixo","pubguitar","zitalko"]}')},126:function(e){e.exports=JSON.parse('{"client_id":"e3lru0kww739k9i9qvw50qh90its46","token":"prqn224ilspkpzfyfkgb9sz944fygk","newtoken":"5zicjka4a4x9geid47n5vq2khgfbuf"}')},148:function(e,t,a){"use strict";(function(e){a(0),a(172),a(173);var n=a(114),i=a(132),c=a(60),r=a(52),s=a(10),l=a(149),j=a(154),o=a(155),d=a(2);t.a=function(){return console.log("PROCESS: ",e),Object(d.jsxs)(r.a,{basename:"/",children:[Object(d.jsx)(n.a,{inverted:!0,children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(n.a.Item,{as:r.b,to:"/",children:"Portada"}),Object(d.jsx)(n.a.Item,{as:r.b,to:"/bilatzailea",children:"Bilatzailea"}),Object(d.jsxs)(n.a.Item,{as:r.b,to:"/zuzenean",header:!0,children:[Object(d.jsx)(c.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),"Zuzenean"]})]})}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(o.a,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/bilatzailea",children:Object(d.jsx)(l.a,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/zuzenean",children:Object(d.jsx)(j.a,{})})]})]})}}).call(this,a(133))},149:function(e,t,a){"use strict";var n=a(113),i=a(125),c=a.n(i),r=a(150),s=a(36),l=a(0),j=a(54),o=a(132),d=a(202),u=a(116),b=a(117),h=a(9),O=a(115),p=a(60),x=a(59),m=a(52),g=a(87),f=a(103),w=a(128),k=a.n(w),v=a(2);t.a=function(e){var t=Object(l.useState)([]),a=Object(s.a)(t,2),i=a[0],w=a[1],z=Object(l.useState)([]),_=Object(s.a)(z,2),D=_[0],y=_[1],C=Object(l.useState)([]),S=Object(s.a)(C,2),F=S[0],M=S[1],H=Object(l.useState)([]),Y=Object(s.a)(H,2),E=Y[0],I=Y[1],B=Object(l.useState)([]),N=Object(s.a)(B,2),T=N[0],q=N[1],J=Object(l.useState)([]),P=Object(s.a)(J,2),A=P[0],G=P[1],L=f.twitzlariak.map((function(e){return{key:e,text:e,value:e}}));Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F.length>0&&j.a.get("users?login="+F.join("&login=")).then((function(e){return w(e.data.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[F]),Object(l.useEffect)((function(){y(L),G("")}),[]);var R=new Date,Z=new Date;return Z.setDate(R.getDate()-900),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(d.a,{placeholder:"Erabiltzaileak",fluid:!0,multiple:!0,selection:!0,search:!0,allowAdditions:!0,onAddItem:function(e,t){return y([].concat(Object(n.a)(D),[{key:t.value,text:t.value,value:t.value}]))},options:D,onChange:function(e,t){var a=t.value;M(a),I([]),q([])}}),Object(v.jsx)(u.a,{children:Object(v.jsxs)(b.a,{columns:2,divided:!0,children:[Object(v.jsx)(b.a.Column,{width:5,children:i.length>0?i.map((function(e,t){return Object(v.jsx)(h.a,{className:A===e.display_name?"active":"",onClick:function(){return function(e){if(e){G(e.display_name),I([]),q([]);var t=[],a=[];j.a.get("videos?user_id="+e.id).then((function(e){e.data.data.map((function(e){new Date(e.created_at)>Z&&(t=[].concat(Object(n.a)(t),[e]))})),I(t)})),j.a.get("clips?broadcaster_id="+e.id).then((function(e){e.data.data.map((function(e){new Date(e.created_at)>Z&&(a=[].concat(Object(n.a)(a),[e]))})),q(a)}))}}(e)},children:Object(v.jsx)(g.a,{title:e.display_name,meta:e.view_count,description:e.description,image_url:e.profile_image_url},t)})})):Object(v.jsx)(h.a,{children:Object(v.jsx)(g.a,{})})}),Object(v.jsxs)(b.a.Column,{width:5,children:[E.length>0&&Object(v.jsx)(u.a,{children:Object(v.jsxs)(O.a,{as:"h2",children:[Object(v.jsx)(p.a,{size:"tiny",name:"video camera"}),Object(v.jsx)(O.a.Content,{children:"Bideoak"})]})}),Object(v.jsx)(h.a.Group,{children:E.length>0?E.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:new Date(e.created_at)>Z&&Object(v.jsxs)(h.a,{children:[Object(v.jsx)(x.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(v.jsxs)(h.a.Content,{children:[Object(v.jsx)(h.a.Header,{as:m.b,to:{pathname:e.url},target:"_blank",children:e.title}),Object(v.jsx)(h.a.Description,{as:"a",children:k()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})})):Object(v.jsx)(v.Fragment,{})})]}),Object(v.jsxs)(b.a.Column,{width:5,children:[T.length>0&&Object(v.jsx)(u.a,{children:Object(v.jsxs)(O.a,{as:"h2",children:[Object(v.jsx)(p.a,{size:"tiny",name:"paperclip"}),Object(v.jsx)(O.a.Content,{children:"Clipak"})]})}),Object(v.jsx)(h.a.Group,{children:T.length>0?T.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:new Date(e.created_at)>Z&&Object(v.jsxs)(h.a,{children:[Object(v.jsx)(x.a,{src:e.thumbnail_url.replace("%{width}",440).replace("%{height}",228)}),Object(v.jsxs)(h.a.Content,{children:[Object(v.jsx)(h.a.Header,{as:m.b,to:{pathname:e.url},children:e.title}),Object(v.jsx)(h.a.Description,{as:"a",children:k()(e.created_at).format("YYYY/MM/DD HH:MM")})]})]})})})):Object(v.jsx)(v.Fragment,{})})]})]})})]})}},154:function(e,t,a){"use strict";var n=a(36),i=a(0),c=(a(87),a(132)),r=a(116),s=a(9),l=a(59),j=a(131),o=a(54),d=a(103),u=a(2);t.a=function(e){var t=Object(i.useState)([]),a=Object(n.a)(t,2),b=a[0],h=a[1],O=d.twitzlariak.map((function(e){return e}));return Object(i.useEffect)((function(){o.a.get("streams?user_login="+O.join("&user_login=")).then((function(e){return h(e.data.data)}))}),[]),Object(u.jsx)(c.a,{style:{margin:20},children:Object(u.jsx)(r.a,{children:Object(u.jsx)(s.a.Group,{children:b.length>0?b.map((function(e,t){return Object(u.jsxs)(u.Fragment,{children:[console.log(e),Object(u.jsxs)(s.a,{children:[Object(u.jsx)(l.a,{src:(null===e||void 0===e?void 0:e.thumbnail_url.replace("{width}",440).replace("{height}",228))||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(u.jsxs)(s.a.Content,{children:[Object(u.jsx)(j.a,{color:"red",ribbon:"right",children:"Zuzenean"}),Object(u.jsx)(s.a.Header,{children:(null===e||void 0===e?void 0:e.user_name)||"Twitzlaria"}),Object(u.jsx)(s.a.Meta,{children:null===e||void 0===e?void 0:e.game_name}),Object(u.jsx)(s.a.Description,{children:(null===e||void 0===e?void 0:e.title)||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})]})]})})):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{children:Object(u.jsxs)(s.a.Content,{children:[Object(u.jsx)(l.a,{floated:"right",size:"tiny",src:"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(u.jsx)(s.a.Header,{children:"Twitzlaria"}),Object(u.jsx)(s.a.Meta,{children:"0 ikustaldi"}),Object(u.jsx)(s.a.Description,{className:"ellipsis",children:"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})})})})})}},155:function(e,t,a){"use strict";a(0);var n=a(2);t.a=function(e){return Object(n.jsx)(n.Fragment,{children:"Kaixo"})}},171:function(e,t,a){},172:function(e,t,a){},192:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(53),r=a.n(c),s=(a(171),a(148)),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},j=a(2);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{})}),document.getElementById("root")),l()},54:function(e,t,a){"use strict";var n=a(151),i=a.n(n),c=a(126),r=i.a.create({baseURL:"https://api.twitch.tv/helix/",headers:{"client-id":c.client_id,Authorization:"Bearer "+c.token}});t.a=r},87:function(e,t,a){"use strict";a(0);var n=a(9),i=a(59),c=a(60),r=(a(192),a(54),a(2));t.a=function(e){var t=e.title,a=e.meta,s=e.description,l=e.image_url,j=e.zuzenean,o=void 0!==j&&j;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(n.a.Content,{children:[Object(r.jsx)(i.a,{floated:"left",size:"tiny",src:l||"https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"}),Object(r.jsxs)(n.a.Header,{children:[o&&Object(r.jsx)(c.a,{circular:!0,inverted:!0,size:"tiny",color:"red",name:"record"}),t||"Twitzlaria"]}),Object(r.jsx)(n.a.Meta,{children:a?a+" ikustaldi":"0 ikustaldi"}),Object(r.jsx)(n.a.Description,{className:"ellipsis",children:s||"twitzlariaren deskribapena hemen idatzita agertuko da"})]})})}}},[[201,1,2]]]);
//# sourceMappingURL=main.48bc41ac.chunk.js.map