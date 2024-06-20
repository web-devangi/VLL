"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[11],{10011:function(n,e,i){i.r(e);var l=i(29439),d=i(77181),r=i(45705),o=i(59491),t=i(66204),s=i(78508),c=i(46155),a=i(47313),u=i(24511),v=i(97890),h=i(7370),x=i(51282),p=i(2717),f=i(70816),j=i.n(f),m=i(84017),y=i(31774),k=i(43295),Z=i(31025),g=i(90954),b=i(4014),_=i(84261),w=i(46417);e.default=function(){var n,e,i,f,I,N,C,Y,S,q,z,L,$=(0,u.$)().t,A=(0,p.I0)(),F=(0,a.useRef)(),M=(0,v.s0)(),R=(0,v.UO)().id,U=(0,p.v9)((function(n){return n.globalSettings})).settings,D=(0,p.v9)((function(n){return n.currency}),p.wU).defaultCurrency,E=(0,p.v9)((function(n){return n.menu}),p.wU).activeMenu,H=(0,a.useState)(null),P=(0,l.Z)(H,2),B=P[0],O=P[1],G=(0,a.useState)(null),K=(0,l.Z)(G,2),Q=K[0],T=K[1],J=[{title:$("id"),dataIndex:"id",key:"id",render:function(n,e){var i;return null===e||void 0===e||null===(i=e.stock)||void 0===i?void 0:i.id}},{title:$("product.name"),dataIndex:"product",key:"product",render:function(n,e){var i,l,d,r;return null!==(i=null===(l=e.stock)||void 0===l||null===(d=l.product)||void 0===d||null===(r=d.translation)||void 0===r?void 0:r.title)&&void 0!==i?i:$("no.name")}},{title:$("price"),dataIndex:"price",key:"price",render:function(n,e){var i,l,d;return(0,m.Z)((null===e||void 0===e||null===(i=e.stock)||void 0===i?void 0:i.price)-(null!==(l=null===e||void 0===e||null===(d=e.stock)||void 0===d?void 0:d.tax)&&void 0!==l?l:0),null===D||void 0===D?void 0:D.symbol)}},{title:$("quantity"),dataIndex:"quantity",key:"quantity",render:function(n,e){var i,l;return n*((null===e||void 0===e||null===(i=e.stock)||void 0===i||null===(l=i.product)||void 0===l?void 0:l.interval)||1)}},{title:$("tax"),dataIndex:"tax",key:"tax",render:function(n){return(0,m.Z)(n,null===D||void 0===D?void 0:D.symbol)}},{title:$("discount"),dataIndex:"discount",key:"discount",render:function(n,e){var i;return(0,m.Z)(null===e||void 0===e||null===(i=e.stock)||void 0===i?void 0:i.discount,null===D||void 0===D?void 0:D.symbol)}},{title:$("total.price"),dataIndex:"total_price",key:"total_price",render:function(n){return(0,m.Z)(n,null===D||void 0===D?void 0:D.symbol)}}];function V(){O(!0),h.Z.getById(R).then((function(n){var e=n.data;T(e)})).finally((function(){O(!1)}))}(0,a.useEffect)((function(){V(),A((0,g.A_)(E))}),[]),(0,a.useEffect)((function(){E.refetch&&(V(),A((0,g.A_)(E)))}),[E.refetch]);var W=(0,k.useReactToPrint)({content:function(){return F.current}});return(0,w.jsx)(d.Z,{title:$("invoice"),extra:(0,w.jsxs)(r.Z,{wrap:!0,children:[(0,w.jsx)(o.Z,{type:"primary",onClick:function(){return M(-1)},children:(0,w.jsx)("span",{className:"ml-1",children:$("back")})}),(0,w.jsxs)(o.Z,{type:"primary",onClick:function(){return W()},ref:F,children:[(0,w.jsx)(y.Z,{type:"printer"}),(0,w.jsx)("span",{className:"ml-1",children:$("print")})]})]}),children:B?(0,w.jsx)(x.Z,{}):(0,w.jsxs)("div",{className:"container_check",ref:F,children:[(0,w.jsxs)("header",{className:"check_header",children:[(0,w.jsx)("span",{children:(0,w.jsx)("img",{src:null===U||void 0===U?void 0:U.favicon,alt:"img",className:"check_icon overflow-hidden w-25 h-25 rounded",width:"100%",height:"100%"})}),(0,w.jsxs)("span",{className:"check_companyInfo",children:[(0,w.jsx)("h1",{children:null===U||void 0===U?void 0:U.title}),(0,w.jsx)("h5",{children:null===U||void 0===U?void 0:U.address})]})]}),(0,w.jsxs)("main",{children:[(0,w.jsxs)("span",{children:[(0,w.jsxs)("h4",{children:[$("order.id"),": ",null===Q||void 0===Q?void 0:Q.id]}),(0,w.jsxs)("h4",{children:[$("date"),":"," ",j()(null===Q||void 0===Q?void 0:Q.created_at).format("YYYY-MM-DD HH:mm")]}),(0,w.jsx)("address",{children:(0,w.jsxs)("p",{children:[(0,w.jsxs)("span",{children:[$("delivery.type"),": ",null===Q||void 0===Q?void 0:Q.delivery_type]}),(null===Q||void 0===Q||null===(n=Q.address)||void 0===n?void 0:n.city)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("delivery.address"),": ",null===Q||void 0===Q||null===(e=Q.address)||void 0===e?void 0:e.city]})]}),(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("delivery.date"),": ",null===Q||void 0===Q?void 0:Q.delivery_date," ",null===Q||void 0===Q?void 0:Q.delivery_time]}),(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("status"),": ",(0,w.jsx)(t.Z,{color:"green",children:null===Q||void 0===Q?void 0:Q.status})]})]})})]}),(0,w.jsx)("span",{children:(0,w.jsx)("address",{children:(0,w.jsxs)("p",{children:[(0,w.jsx)("h3",{className:"shop_data",children:$("user")}),(0,w.jsxs)("span",{children:[$("user.id"),": ",null===Q||void 0===Q||null===(i=Q.user)||void 0===i?void 0:i.id]}),(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("full.name"),":"," ","".concat(null===Q||void 0===Q||null===(f=Q.user)||void 0===f?void 0:f.firstname," ").concat(null===Q||void 0===Q||null===(I=Q.user)||void 0===I?void 0:I.lastname)]}),(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("email"),":"," ",null===(N=null===Q||void 0===Q||null===(C=Q.user)||void 0===C?void 0:C.email)||void 0===N||N?(0,b.Z)(null===Q||void 0===Q||null===(Y=Q.user)||void 0===Y?void 0:Y.email):null===Q||void 0===Q||null===(S=Q.user)||void 0===S?void 0:S.email]}),(0,w.jsx)("br",{}),(0,w.jsxs)("span",{children:[$("phone"),":"," ",null!==Q&&void 0!==Q&&null!==(q=Q.user)&&void 0!==q&&q.phone?(0,_.Z)(null===Q||void 0===Q||null===(z=Q.user)||void 0===z?void 0:z.phone):$("no.phone")]})]})})}),(0,w.jsx)("span",{children:(0,w.jsx)(Z.Z,{orderId:R,showLink:!1,size:1.5})})]}),(0,w.jsx)(s.Z,{scroll:{x:!0},columns:J,dataSource:(null===Q||void 0===Q?void 0:Q.details)||[],loading:B,rowKey:function(n){return n.id},pagination:!1,className:"check_table"}),(0,w.jsxs)("footer",{children:[(0,w.jsx)("span",{children:(0,w.jsxs)("h3",{children:[$("note"),": ",null!==(L=null===Q||void 0===Q?void 0:Q.note)&&void 0!==L?L:$("no.note")]})}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("origin.price"),":"]}),(0,w.jsx)("h4",{children:(0,m.Z)(null===Q||void 0===Q?void 0:Q.origin_price,null===D||void 0===D?void 0:D.symbol)})]}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("total.tax"),":"]}),(0,w.jsx)("h4",{children:(0,m.Z)(null===Q||void 0===Q?void 0:Q.tax,null===D||void 0===D?void 0:D.symbol)})]}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("service.fee"),":"]}),(0,w.jsx)("h4",{children:(0,m.Z)(null===Q||void 0===Q?void 0:Q.service_fee,null===D||void 0===D?void 0:D.symbol)})]}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("delivery.fee"),":"]}),(0,w.jsx)("h4",{children:(0,m.Z)(null===Q||void 0===Q?void 0:Q.delivery_fee,null===D||void 0===D?void 0:D.symbol)})]}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("total.discount"),":"]}),(0,w.jsxs)("h4",{children:["- ",(0,m.Z)(null===Q||void 0===Q?void 0:Q.total_discount)]})]}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h5",{children:[$("coupon"),":"]}),(0,w.jsxs)("h4",{children:["- ",(0,m.Z)(null===Q||void 0===Q?void 0:Q.coupon_price)]})]}),(0,w.jsx)(c.Z,{}),(0,w.jsxs)("span",{children:[(0,w.jsxs)("h4",{children:[$("total.price"),":"]}),(0,w.jsx)("h3",{children:(0,m.Z)(null===Q||void 0===Q?void 0:Q.total_price,null===D||void 0===D?void 0:D.symbol)})]})]})]}),(0,w.jsxs)("section",{className:"text-center",children:["\xa9 ",j()(new Date).format("YYYY")," ",null===U||void 0===U?void 0:U.title,"."," ",$("all.rights.reserved")]})]})})}},4014:function(n,e,i){function l(n){var e,i,l=null===n||void 0===n?void 0:n.slice(0,1),d=null===n||void 0===n?void 0:n.lastIndexOf("@"),r=null===n||void 0===n?void 0:n.slice(1,d-1);r=null===(e=r)||void 0===e?void 0:e.replace(/./g,"*");var o=null===n||void 0===n?void 0:n.slice(d-1,n.length);return null===l||void 0===l||null===(i=l.concat(r))||void 0===i?void 0:i.concat(o)}i.d(e,{Z:function(){return l}})},84261:function(n,e,i){function l(n){var e="".concat(n),i="*".repeat(e.length-2);return(null===e||void 0===e?void 0:e[0])+i+(null===e||void 0===e?void 0:e[(null===e||void 0===e?void 0:e.length)-1])}i.d(e,{Z:function(){return l}})},31025:function(n,e,i){i.d(e,{Z:function(){return y}});var l=i(15861),d=i(29439),r=i(87757),o=i.n(r),t=i(47313),s=i(24511),c=i(51095),a=i(23560),u=i(59491),v=i(66204),h=i(31881),x=i.n(h),p=i(97421),f=i(51282),j=i(46417),m="https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(p.$h);function y(n){var e=n.orderId,i=n.showLink,r=void 0===i||i,h=n.size,y=void 0===h?2:h,k=(0,s.$)().t,Z=(0,t.useState)(""),g=(0,d.Z)(Z,2),b=g[0],_=g[1],w=(0,t.useState)(!1),I=(0,d.Z)(w,2),N=I[0],C=I[1],Y=(0,t.useState)(null),S=(0,d.Z)(Y,2),q=S[0],z=S[1],L=function(){var n=(0,l.Z)(o().mark((function n(){var i,l,d;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C(!0),i={dynamicLinkInfo:{domainUriPrefix:p.AC,link:"".concat(p.o6,"/orders/").concat(e),androidInfo:{androidPackageName:p.aG},iosInfo:{iosBundleId:p.Ir}}},n.prev=2,n.next=5,x().post(m,i);case 5:l=n.sent,d=l.data,z(null),_(null===d||void 0===d?void 0:d.shortLink),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),z(n.t0),a.Am.error(n.t0.message);case 15:return n.prev=15,C(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,11,15,18]])})));return function(){return n.apply(this,arguments)}}();return(0,t.useEffect)((function(){L()}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("h3",{children:[k("qr_code"),":"]}),(0,j.jsx)("div",{children:N||q?q?(0,j.jsx)(v.Z,{color:"red",children:k("smth.went.wrong")}):(0,j.jsx)(f.Z,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{width:"".concat(100*y,"px"),height:"".concat(100*y,"px"),borderRadius:"10px",overflow:q?"none":"hidden"},children:(0,j.jsx)(c.Qd,{size:500,id:"qrCode",includeMargin:!0,value:b,style:{width:"100%",aspectRatio:"1/1",height:"100%"},bgColor:"#fff",level:"H"})}),(0,j.jsx)("br",{}),r&&(0,j.jsx)(u.Z,{type:"primary",href:b,target:"_blank",rel:"noreferrer",style:{width:"".concat(100*y,"px")},children:k("link.to.order")})]})})]})}},84017:function(n,e,i){function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after",l=Number(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===i?"".concat(l," ").concat(e):"".concat(e," ").concat(l)}i.d(e,{Z:function(){return l}})}}]);