"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[11],{10011:(e,i,l)=>{l.r(i),l.d(i,{default:()=>w});var n=l(77181),d=l(45705),s=l(59491),o=l(66204),r=l(78508),t=l(46155),c=l(47313),a=l(24511),v=l(97890),u=l(7370),h=l(51282),x=l(2717),j=l(70816),p=l.n(j),m=l(84017),y=l(31774),f=l(43295),k=l(31025),g=l(90954),Z=l(4014),b=l(84261),_=l(46417);const w=()=>{var e,i,l,j,w,I,N,C,Y,S,q,z;const{t:L}=(0,a.$)(),$=(0,x.I0)(),A=(0,c.useRef)(),F=(0,v.s0)(),{id:M}=(0,v.UO)(),{settings:R}=(0,x.v9)((e=>e.globalSettings)),{defaultCurrency:U}=(0,x.v9)((e=>e.currency),x.wU),{activeMenu:D}=(0,x.v9)((e=>e.menu),x.wU),[E,H]=(0,c.useState)(null),[P,B]=(0,c.useState)(null),O=[{title:L("id"),dataIndex:"id",key:"id",render:(e,i)=>{var l;return null===i||void 0===i||null===(l=i.stock)||void 0===l?void 0:l.id}},{title:L("product.name"),dataIndex:"product",key:"product",render:(e,i)=>{var l,n,d,s;return null!==(l=null===(n=i.stock)||void 0===n||null===(d=n.product)||void 0===d||null===(s=d.translation)||void 0===s?void 0:s.title)&&void 0!==l?l:L("no.name")}},{title:L("price"),dataIndex:"price",key:"price",render:(e,i)=>{var l,n,d;return(0,m.Z)((null===i||void 0===i||null===(l=i.stock)||void 0===l?void 0:l.price)-(null!==(n=null===i||void 0===i||null===(d=i.stock)||void 0===d?void 0:d.tax)&&void 0!==n?n:0),null===U||void 0===U?void 0:U.symbol)}},{title:L("quantity"),dataIndex:"quantity",key:"quantity",render:(e,i)=>{var l,n;return e*((null===i||void 0===i||null===(l=i.stock)||void 0===l||null===(n=l.product)||void 0===n?void 0:n.interval)||1)}},{title:L("tax"),dataIndex:"tax",key:"tax",render:e=>(0,m.Z)(e,null===U||void 0===U?void 0:U.symbol)},{title:L("discount"),dataIndex:"discount",key:"discount",render:(e,i)=>{var l;return(0,m.Z)(null===i||void 0===i||null===(l=i.stock)||void 0===l?void 0:l.discount,null===U||void 0===U?void 0:U.symbol)}},{title:L("total.price"),dataIndex:"total_price",key:"total_price",render:e=>(0,m.Z)(e,null===U||void 0===U?void 0:U.symbol)}];function G(){H(!0),u.Z.getById(M).then((e=>{let{data:i}=e;B(i)})).finally((()=>{H(!1)}))}(0,c.useEffect)((()=>{G(),$((0,g.A_)(D))}),[]),(0,c.useEffect)((()=>{D.refetch&&(G(),$((0,g.A_)(D)))}),[D.refetch]);const K=(0,f.useReactToPrint)({content:()=>A.current});return(0,_.jsx)(n.Z,{title:L("invoice"),extra:(0,_.jsxs)(d.Z,{wrap:!0,children:[(0,_.jsx)(s.Z,{type:"primary",onClick:()=>F(-1),children:(0,_.jsx)("span",{className:"ml-1",children:L("back")})}),(0,_.jsxs)(s.Z,{type:"primary",onClick:()=>K(),ref:A,children:[(0,_.jsx)(y.Z,{type:"printer"}),(0,_.jsx)("span",{className:"ml-1",children:L("print")})]})]}),children:E?(0,_.jsx)(h.Z,{}):(0,_.jsxs)("div",{className:"container_check",ref:A,children:[(0,_.jsxs)("header",{className:"check_header",children:[(0,_.jsx)("span",{children:(0,_.jsx)("img",{src:null===R||void 0===R?void 0:R.favicon,alt:"img",className:"check_icon overflow-hidden w-25 h-25 rounded",width:"100%",height:"100%"})}),(0,_.jsxs)("span",{className:"check_companyInfo",children:[(0,_.jsx)("h1",{children:null===R||void 0===R?void 0:R.title}),(0,_.jsx)("h5",{children:null===R||void 0===R?void 0:R.address})]})]}),(0,_.jsxs)("main",{children:[(0,_.jsxs)("span",{children:[(0,_.jsxs)("h4",{children:[L("order.id"),": ",null===P||void 0===P?void 0:P.id]}),(0,_.jsxs)("h4",{children:[L("date"),":"," ",p()(null===P||void 0===P?void 0:P.created_at).format("YYYY-MM-DD HH:mm")]}),(0,_.jsx)("address",{children:(0,_.jsxs)("p",{children:[(0,_.jsxs)("span",{children:[L("delivery.type"),": ",null===P||void 0===P?void 0:P.delivery_type]}),(null===P||void 0===P||null===(e=P.address)||void 0===e?void 0:e.city)&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("delivery.address"),": ",null===P||void 0===P||null===(i=P.address)||void 0===i?void 0:i.city]})]}),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("delivery.date"),": ",null===P||void 0===P?void 0:P.delivery_date," ",null===P||void 0===P?void 0:P.delivery_time]}),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("status"),": ",(0,_.jsx)(o.Z,{color:"green",children:null===P||void 0===P?void 0:P.status})]})]})})]}),(0,_.jsx)("span",{children:(0,_.jsx)("address",{children:(0,_.jsxs)("p",{children:[(0,_.jsx)("h3",{className:"shop_data",children:L("user")}),(0,_.jsxs)("span",{children:[L("user.id"),": ",null===P||void 0===P||null===(l=P.user)||void 0===l?void 0:l.id]}),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("full.name"),":"," ","".concat(null===P||void 0===P||null===(j=P.user)||void 0===j?void 0:j.firstname," ").concat(null===P||void 0===P||null===(w=P.user)||void 0===w?void 0:w.lastname)]}),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("email"),":"," ",null===(I=null===P||void 0===P||null===(N=P.user)||void 0===N?void 0:N.email)||void 0===I||I?(0,Z.Z)(null===P||void 0===P||null===(C=P.user)||void 0===C?void 0:C.email):null===P||void 0===P||null===(Y=P.user)||void 0===Y?void 0:Y.email]}),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{children:[L("phone"),":"," ",null!==P&&void 0!==P&&null!==(S=P.user)&&void 0!==S&&S.phone?(0,b.Z)(null===P||void 0===P||null===(q=P.user)||void 0===q?void 0:q.phone):L("no.phone")]})]})})}),(0,_.jsx)("span",{children:(0,_.jsx)(k.Z,{orderId:M,showLink:!1,size:1.5})})]}),(0,_.jsx)(r.Z,{scroll:{x:!0},columns:O,dataSource:(null===P||void 0===P?void 0:P.details)||[],loading:E,rowKey:e=>e.id,pagination:!1,className:"check_table"}),(0,_.jsxs)("footer",{children:[(0,_.jsx)("span",{children:(0,_.jsxs)("h3",{children:[L("note"),": ",null!==(z=null===P||void 0===P?void 0:P.note)&&void 0!==z?z:L("no.note")]})}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("origin.price"),":"]}),(0,_.jsx)("h4",{children:(0,m.Z)(null===P||void 0===P?void 0:P.origin_price,null===U||void 0===U?void 0:U.symbol)})]}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("total.tax"),":"]}),(0,_.jsx)("h4",{children:(0,m.Z)(null===P||void 0===P?void 0:P.tax,null===U||void 0===U?void 0:U.symbol)})]}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("service.fee"),":"]}),(0,_.jsx)("h4",{children:(0,m.Z)(null===P||void 0===P?void 0:P.service_fee,null===U||void 0===U?void 0:U.symbol)})]}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("delivery.fee"),":"]}),(0,_.jsx)("h4",{children:(0,m.Z)(null===P||void 0===P?void 0:P.delivery_fee,null===U||void 0===U?void 0:U.symbol)})]}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("total.discount"),":"]}),(0,_.jsxs)("h4",{children:["- ",(0,m.Z)(null===P||void 0===P?void 0:P.total_discount)]})]}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h5",{children:[L("coupon"),":"]}),(0,_.jsxs)("h4",{children:["- ",(0,m.Z)(null===P||void 0===P?void 0:P.coupon_price)]})]}),(0,_.jsx)(t.Z,{}),(0,_.jsxs)("span",{children:[(0,_.jsxs)("h4",{children:[L("total.price"),":"]}),(0,_.jsx)("h3",{children:(0,m.Z)(null===P||void 0===P?void 0:P.total_price,null===U||void 0===U?void 0:U.symbol)})]})]})]}),(0,_.jsxs)("section",{className:"text-center",children:["\xa9 ",p()(new Date).format("YYYY")," ",null===R||void 0===R?void 0:R.title,"."," ",L("all.rights.reserved")]})]})})}},4014:(e,i,l)=>{function n(e){var i,l;let n=null===e||void 0===e?void 0:e.slice(0,1),d=null===e||void 0===e?void 0:e.lastIndexOf("@"),s=null===e||void 0===e?void 0:e.slice(1,d-1);s=null===(i=s)||void 0===i?void 0:i.replace(/./g,"*");let o=null===e||void 0===e?void 0:e.slice(d-1,e.length);return null===n||void 0===n||null===(l=n.concat(s))||void 0===l?void 0:l.concat(o)}l.d(i,{Z:()=>n})},84261:(e,i,l)=>{function n(e){const i="".concat(e),l="*".repeat(i.length-2);return(null===i||void 0===i?void 0:i[0])+l+(null===i||void 0===i?void 0:i[(null===i||void 0===i?void 0:i.length)-1])}l.d(i,{Z:()=>n})},31025:(e,i,l)=>{l.d(i,{Z:()=>j});var n=l(47313),d=l(24511),s=l(51095),o=l(23560),r=l(59491),t=l(66204),c=l(31881),a=l.n(c),v=l(97421),u=l(51282),h=l(46417);const x="https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(v.$h);function j(e){let{orderId:i,showLink:l=!0,size:c=2}=e;const{t:j}=(0,d.$)(),[p,m]=(0,n.useState)(""),[y,f]=(0,n.useState)(!1),[k,g]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{f(!0);const e={dynamicLinkInfo:{domainUriPrefix:v.AC,link:"".concat(v.o6,"/orders/").concat(i),androidInfo:{androidPackageName:v.aG},iosInfo:{iosBundleId:v.Ir}}};try{const{data:i}=await a().post(x,e);g(null),m(null===i||void 0===i?void 0:i.shortLink)}catch(k){g(k),o.Am.error(k.message)}finally{f(!1)}})()}),[i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h3",{children:[j("qr_code"),":"]}),(0,h.jsx)("div",{children:y||k?k?(0,h.jsx)(t.Z,{color:"red",children:j("smth.went.wrong")}):(0,h.jsx)(u.Z,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{width:"".concat(100*c,"px"),height:"".concat(100*c,"px"),borderRadius:"10px",overflow:k?"none":"hidden"},children:(0,h.jsx)(s.Qd,{size:500,id:"qrCode",includeMargin:!0,value:p,style:{width:"100%",aspectRatio:"1/1",height:"100%"},bgColor:"#fff",level:"H"})}),(0,h.jsx)("br",{}),l&&(0,h.jsx)(r.Z,{type:"primary",href:p,target:"_blank",rel:"noreferrer",style:{width:"".concat(100*c,"px")},children:j("link.to.order")})]})})]})}},84017:(e,i,l)=>{function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const n=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?"".concat(n," ").concat(i):"".concat(i," ").concat(n)}l.d(i,{Z:()=>n})}}]);