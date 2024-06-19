"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4921],{17649:(e,l,i)=>{i.d(l,{Z:()=>n});i(97421);function n(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const l=e.location.split(", ");return{lat:Number(null===l||void 0===l?void 0:l[0]),lng:Number(null===l||void 0===l?void 0:l[1])}}},84017:(e,l,i)=>{function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const n=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===i?"".concat(n," ").concat(l):"".concat(l," ").concat(n)}i.d(l,{Z:()=>n})},24921:(e,l,i)=>{i.r(l),i.d(l,{default:()=>D});var n=i(47313),t=i(45705),d=i(66204),s=i(26824),a=i(78508),o=i(77181),r=i(59491),c=i(72652),u=i(68197),v=i(59624),x=i(97890),h=i(90046),p=i(45464),m=i(2717),j=i(90954),y=i(10976),Z=i(9274),g=i(74294),f=i(24511),b=i(46417);const k=["new","accepted","ready","on_a_way","delivered"];function w(e){let{orderDetails:l,handleCancel:i}=e;const{activeMenu:t}=(0,m.v9)((e=>e.menu),m.wU),[d]=y.Z.useForm(),s=(0,m.I0)(),{t:a}=(0,f.$)(),[o,c]=(0,n.useState)(!1),[x,p]=(0,n.useState)(k);(0,n.useEffect)((()=>{const e=k.findIndex((e=>e===l.status));let i=[k[e],k[e+1],"canceled"];e<0&&(i=[k[e+1],"canceled"]),p(i)}),[l]);return(0,b.jsx)(Z.Z,{visible:!!l,title:l.title,onCancel:i,footer:[(0,b.jsx)(r.Z,{type:"primary",onClick:()=>d.submit(),loading:o,children:a("save")}),(0,b.jsx)(r.Z,{type:"default",onClick:i,children:a("cancel")})],children:(0,b.jsx)(y.Z,{form:d,layout:"vertical",onFinish:e=>{c(!0);const n={...e};h.Z.updateStatus(l.id,n).then((()=>{i(),s((0,j.xo)(t))})).finally((()=>c(!1)))},initialValues:{status:l.status},children:(0,b.jsx)(u.Z,{gutter:12,children:(0,b.jsx)(v.Z,{span:24,children:(0,b.jsx)(y.Z.Item,{label:a("status"),name:"status",rules:[{required:!0,message:a("required")}],children:(0,b.jsx)(g.Z,{children:x.map(((e,l)=>(0,b.jsx)(g.Z.Option,{value:e,children:a(e)},e+l)))})})})})})})}var _=i(75052),N=i(84017),I=i(36967),S=i(58821),C=i(32916),U=i(70816),q=i.n(U);function D(){var e,l,i,y,Z;const{activeMenu:g}=(0,m.v9)((e=>e.menu),m.wU),{defaultCurrency:k}=(0,m.v9)((e=>e.currency),m.wU),{statusList:U}=(0,m.v9)((e=>e.orderStatus),m.wU),D=null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.data,{t:F}=(0,f.$)(),{id:M}=(0,x.UO)(),R=(0,m.I0)(),$=(0,n.useRef)(),A=(0,n.useRef)(),[B,L]=(0,n.useState)(null),[E,P]=(0,n.useState)(!1),[Y,z]=(0,n.useState)(null),[H,K]=(0,n.useState)(null),[O,V]=(0,n.useState)(null),G=[{title:F("id"),dataIndex:"id",key:"id",render:(e,l)=>{var i;return null===l||void 0===l||null===(i=l.shop)||void 0===i?void 0:i.id}},{title:F("shop.name"),dataIndex:"shop.name",key:"shop.name",render:(e,l)=>{var i;return(0,b.jsx)(t.Z,{direction:"vertical",className:"relative",children:null===l||void 0===l||null===(i=l.shop.translation)||void 0===i?void 0:i.title})}},{title:F("image"),dataIndex:"shop.img",key:"shop.img",render:(e,l)=>{var i;return(0,b.jsx)(s.Z,{src:(0,p.Z)(null===l||void 0===l||null===(i=l.shop)||void 0===i?void 0:i.logo_img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:F("Phone"),dataIndex:"origin_price",key:"shop.phone",render:(e,l)=>{var i,n;return(0,b.jsx)("a",{href:"tel:".concat(null===l||void 0===l||null===(i=l.shop)||void 0===i?void 0:i.phone),children:null===l||void 0===l||null===(n=l.shop)||void 0===n?void 0:n.phone})}},{title:F("tax"),dataIndex:"tax",key:"tax",render:(e,l)=>{var i;return null===l||void 0===l||null===(i=l.shop)||void 0===i?void 0:i.tax}},{title:F("total.price"),dataIndex:"total_price",key:"total_price",render:e=>(0,N.Z)(e,null===k||void 0===k?void 0:k.symbol)}],Q=()=>{z(null),K(null),V(null)};return(0,n.useEffect)((()=>{g.refetch&&(P(!0),h.Z.getById(M).then((e=>{let{data:l}=e;const i=l.currency,n=l.user,t=l.id,d=l.price,s=l.created_at,a=l.details.map((e=>{var l,i;return{...e,title:null===(l=e.shop)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title}}));R((0,j.nc)({activeMenu:g,data:{details:a,currency:i,user:n,id:t,createdAt:s,price:d,data:l}}))})).finally((()=>{P(!1),R((0,j.A_)(g))})))}),[g.refetch]),(0,b.jsxs)("div",{className:"order_details",children:[(0,b.jsx)(o.Z,{className:"order-details-info",title:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C.Qyq,{className:"mr-2 icon"}),"".concat(F("order")," ").concat(null!==D&&void 0!==D&&D.id?"#".concat(null===D||void 0===D?void 0:D.id," "):"")," ",F("from.order")," ",null===D||void 0===D||null===(l=D.table)||void 0===l?void 0:l.name]}),extra:"delivered"!==(null===D||void 0===D?void 0:D.status)&&"canceled"!==(null===D||void 0===D?void 0:D.status)&&"accepted"!==(null===D||void 0===D?void 0:D.status)&&"cooking"!==(null===D||void 0===D?void 0:D.status)?(0,b.jsx)(r.Z,{type:"primary",onClick:()=>z(D),children:F("change.status")}):null}),(0,b.jsx)(c.Z,{spinning:E,children:(0,b.jsx)(o.Z,{style:{minHeight:"200px"},children:(0,b.jsxs)(u.Z,{hidden:E,className:"mb-3 order_detail",children:[(0,b.jsx)(v.Z,{span:12,children:(0,b.jsxs)("div",{children:[F("created.date.&.time"),":",(0,b.jsxs)("span",{className:"ml-2",children:[(0,b.jsx)(S.yoA,{className:"mr-1"})," ",q()(null===D||void 0===D?void 0:D.created_at).format("YYYY-MM-DD HH:mm")," "]})]})}),(0,b.jsx)(v.Z,{span:12,children:(0,b.jsxs)("div",{children:[F("status"),":",(0,b.jsx)("span",{className:"ml-2",children:"new"===(null===D||void 0===D?void 0:D.status)?(0,b.jsx)(d.Z,{color:"blue",children:F(null===D||void 0===D?void 0:D.status)}):"canceled"===(null===D||void 0===D?void 0:D.status)?(0,b.jsx)(d.Z,{color:"error",children:F(null===D||void 0===D?void 0:D.status)}):(0,b.jsx)(d.Z,{color:"cyan",children:F(null===D||void 0===D?void 0:D.status)})})]})})," ",(0,b.jsx)(v.Z,{span:12,children:(0,b.jsxs)("div",{children:[F("table"),":",(0,b.jsx)("span",{className:"ml-2",children:(null===D||void 0===D||null===(i=D.table)||void 0===i?void 0:i.name)||F("unspecified")})]})}),(0,b.jsx)(v.Z,{span:12,children:(0,b.jsxs)("div",{children:[F("delivery_type"),":",(0,b.jsx)("span",{className:"ml-2",children:(null===D||void 0===D?void 0:D.delivery_type)||F("unspecified")})]})})]})})}),(0,b.jsxs)(o.Z,{className:"w-100 order-table",children:[(0,b.jsx)(a.Z,{ref:A,scroll:{x:!0},columns:G,dataSource:(null===(y=g.data)||void 0===y?void 0:y.details)||[],loading:E,rowKey:e=>e.id,pagination:!1,expandable:{expandedRowRender:e=>{const l=[{title:F("id"),dataIndex:"id",key:"id",render:(e,l)=>{var i;return null===(i=l.stock)||void 0===i?void 0:i.id}},{title:F("product.name"),dataIndex:"product",key:"product",render:(e,l)=>{var i,n,s,a,o;return(0,b.jsxs)(t.Z,{direction:"vertical",className:"relative",children:[null===(i=l.stock)||void 0===i||null===(n=i.product)||void 0===n||null===(s=n.translation)||void 0===s?void 0:s.title,null===(a=l.stock)||void 0===a||null===(o=a.extras)||void 0===o?void 0:o.map((e=>{var l,i,n;return(0,b.jsxs)(d.Z,{children:[null===(l=e.group)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title,": ",null===(n=e.value)||void 0===n?void 0:n.value]},null===e||void 0===e?void 0:e.id)}))]})}},{title:F("image"),dataIndex:"img",key:"img",render:(e,l)=>{var i,n;return(0,b.jsx)(s.Z,{src:(0,p.Z)(null===(i=l.stock)||void 0===i||null===(n=i.product)||void 0===n?void 0:n.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:F("price"),dataIndex:"origin_price",key:"origin_price",render:e=>(0,N.Z)(e,null===k||void 0===k?void 0:k.symbol)},{title:F("quantity"),dataIndex:"quantity",key:"quantity",render:e=>(0,b.jsx)("span",{children:e})},{title:F("discount"),dataIndex:"discount",key:"discount",render:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,N.Z)(e,null===k||void 0===k?void 0:k.symbol)}},{title:F("tax"),dataIndex:"tax",key:"tax",render:e=>(0,N.Z)(e,null===k||void 0===k?void 0:k.symbol)},{title:F("total.price"),dataIndex:"total_price",key:"total_price",render:(e,l)=>(0,N.Z)(e,null===k||void 0===k?void 0:k.symbol)}],i=(null===e||void 0===e?void 0:e.products)||[];return(0,b.jsx)(a.Z,{columns:l,dataSource:i,pagination:!1})},defaultExpandedRowKeys:["0"]}}),(0,b.jsxs)(t.Z,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("span",{children:[F("delivery.fee"),":"]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("order.tax"),":"]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("product"),":"]}),(0,b.jsx)("br",{}),(0,b.jsxs)("span",{children:[F("discount"),":"]}),(0,b.jsx)("br",{}),(0,b.jsxs)("h3",{children:[F("total.price"),":"]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:(0,N.Z)(null!==(Z=null===D||void 0===D?void 0:D.delivery_price)&&void 0!==Z?Z:0,null===k||void 0===k?void 0:k.symbol)}),(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:(0,N.Z)(null===D||void 0===D?void 0:D.total_tax,null===k||void 0===k?void 0:k.symbol)}),(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:(0,N.Z)(null===D||void 0===D?void 0:D.origin_price,null===k||void 0===k?void 0:k.symbol)}),(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:(0,N.Z)(null===D||void 0===D?void 0:D.total_discount,null===k||void 0===k?void 0:k.symbol)}),(0,b.jsx)("br",{}),(0,b.jsx)("h3",{ref:$,children:(0,N.Z)(null===D||void 0===D?void 0:D.total_price,null===k||void 0===k?void 0:k.symbol)})]})]})]}),Y&&(0,b.jsx)(w,{orderDetails:Y,handleCancel:Q,status:U}),H&&(0,b.jsx)(_.Z,{orderDetails:H,handleCancel:Q}),O&&(0,b.jsx)(I.Z,{id:O,handleCancel:Q})]})}},75052:(e,l,i)=>{i.d(l,{Z:()=>p});var n=i(47313),t=i(10976),d=i(9274),s=i(59491),a=i(68197),o=i(59624),r=i(74294),c=i(2717),u=i(90046),v=i(90954),x=i(24511),h=i(46417);function p(e){var l;let{orderDetails:i,handleCancel:p}=e;const{t:m}=(0,x.$)(),{activeMenu:j}=(0,c.v9)((e=>e.menu),c.wU),{deliverymans:y}=(0,c.v9)((e=>e.deliveryman),c.wU),[Z]=t.Z.useForm(),g=(0,c.I0)(),[f,b]=(0,n.useState)(!1);return(0,h.jsx)(d.Z,{visible:!!i,title:i.title,onCancel:p,footer:[(0,h.jsx)(s.Z,{type:"primary",onClick:()=>Z.submit(),loading:f,children:m("save")}),(0,h.jsx)(s.Z,{type:"default",onClick:p,children:m("cancel")})],children:(0,h.jsx)(t.Z,{form:Z,layout:"vertical",onFinish:e=>{const l={...e};b(!0),u.Z.updateDelivery(i.id,l).then((()=>{p(),g((0,v.xo)(j))})).finally((()=>b(!1)))},initialValues:{deliveryman:null===(l=i.deliveryman)||void 0===l?void 0:l.id},children:(0,h.jsx)(a.Z,{gutter:12,children:(0,h.jsx)(o.Z,{span:24,children:(0,h.jsx)(t.Z.Item,{label:m("deliveryman"),name:"deliveryman",rules:[{required:!0,message:m("required")}],children:(0,h.jsx)(r.Z,{children:y.map(((e,l)=>(0,h.jsxs)(r.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)))})})})})})})}},36967:(e,l,i)=>{i.d(l,{Z:()=>U});var n=i(84697),t=i(83999),d=i(9274),s=i(59491),a=i(77181),o=i(68197),r=i(59624),c=i(66204),u=i(47313),v=i(24511),x=i(90046),h=i(51282),p=i(58821),m=i(2717),j=i(97421),y=i(18478),Z=i(84618),g=i(17649),f=i(66461),b=i(22539),k=i(3394),w=i(57864),_=i(46417);const{Step:N}=t.Z,I=()=>(0,_.jsx)("img",{src:y,width:"50",alt:"Pin"}),S=()=>(0,_.jsx)("img",{src:Z,width:"50",alt:"Pin"}),C=["blue","red","gold","volcano","cyan","lime"],U=e=>{var l,i,y,Z,U,q;let{id:D,handleCancel:F}=e;const{t:M}=(0,v.$)(),[R,$]=(0,u.useState)(null),[A,B]=(0,u.useState)(null),[L,E]=(0,u.useState)(null),{settings:P}=(0,m.v9)((e=>e.globalSettings),m.wU),Y=(0,g.Z)(P),[z,H]=(0,u.useState)(0),[K,O]=(0,u.useState)((0,g.Z)(P)),[V,G]=(0,u.useState)((0,g.Z)(P)),[Q,T]=(0,u.useState)([{id:0,name:"new",icon:(0,_.jsx)(f.Z,{})},{id:1,name:"accepted",icon:(0,_.jsx)(p.IQF,{})},{id:2,name:"ready",icon:(0,_.jsx)(b.TkG,{})},{id:3,name:"on_a_way",icon:(0,_.jsx)(k.Akc,{})},{id:4,name:"delivered",icon:(0,_.jsx)(k.kme,{})}]);const{google_map_key:W}=(0,m.v9)((e=>e.globalSettings.settings),m.wU);(0,u.useEffect)((()=>{$(!0),x.Z.getById(D).then((e=>{var l;let{data:i}=e;T("canceled"===i.status?[{id:1,name:"new",icon:(0,_.jsx)(f.Z,{})},{id:5,name:"canceled",icon:(0,_.jsx)(w.SV5,{})}]:Q),H("canceled"===i.status?1:null===(l=Q.find((e=>e.name===i.status)))||void 0===l?void 0:l.id),E("canceled"===i.status?"error":"success"),B(i),G({lat:i.location.latitude,lng:i.location.longitude}),O({lat:i.shop.location.latitude,lng:i.shop.location.longitude})})).finally((()=>{$(!1)}))}),[]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(d.Z,{visible:!!D,title:M("show.locations"),closable:!0,onCancel:F,style:{minWidth:"80vw"},footer:[(0,_.jsx)(s.Z,{type:"default",onClick:F,children:M("cancel")},"cancelBtn")],children:R?(0,_.jsx)(h.Z,{}):(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(t.Z,{current:z,status:L,className:"mb-5",children:null===Q||void 0===Q?void 0:Q.map(((e,l)=>(0,_.jsx)(N,{title:M(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+l)))}),(0,_.jsxs)(o.Z,{gutter:12,children:[(0,_.jsxs)(r.Z,{span:12,children:[(0,_.jsxs)("h3",{children:[M("order.id")," #",null===A||void 0===A?void 0:A.id]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(p.D73,{})," ",null===A||void 0===A?void 0:A.created_at]}),(0,_.jsxs)("p",{children:[M("schedulet.at")," ",null===A||void 0===A?void 0:A.delivery_date]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("strong",{children:null===A||void 0===A||null===(l=A.shop)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title})," ",null===A||void 0===A||null===(y=A.details)||void 0===y?void 0:y.map(((e,l)=>{var i;return(0,_.jsx)(c.Z,{className:"mb-2",color:C[l],children:null===e||void 0===e||null===(i=e.stock)||void 0===i?void 0:i.product.translation.title})}))]})]}),(0,_.jsxs)(r.Z,{span:12,children:[(0,_.jsxs)("p",{children:[M("status")," ","new"===(null===A||void 0===A?void 0:A.status)?(0,_.jsx)(c.Z,{color:"blue",children:M(null===A||void 0===A?void 0:A.status)}):"canceled"===(null===A||void 0===A?void 0:A.status)?(0,_.jsx)(c.Z,{color:"error",children:M(null===A||void 0===A?void 0:A.status)}):(0,_.jsx)(c.Z,{color:"cyan",children:M(null===A||void 0===A?void 0:A.status)})]}),(0,_.jsxs)("p",{children:[M("payment.method")," ",(0,_.jsx)("strong",{children:null===A||void 0===A||null===(Z=A.transaction)||void 0===Z||null===(U=Z.payment_system)||void 0===U?void 0:U.tag})]}),(0,_.jsxs)("p",{children:[M("order.type")," ",(0,_.jsx)("strong",{children:null===A||void 0===A?void 0:A.delivery_type})]}),(0,_.jsxs)("p",{children:[M("payment.type")," ",(0,_.jsx)("strong",{children:null===A||void 0===A||null===(q=A.transaction)||void 0===q?void 0:q.status})]})]}),(0,_.jsxs)(r.Z,{span:24,className:"mt-5",children:[(0,_.jsx)("h4",{children:M("map")}),(0,_.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,_.jsxs)(n.ZP,{bootstrapURLKeys:{key:W||j.kr},defaultZoom:14,center:Y,options:{fullscreenControl:!1},onGoogleApiLoaded:e=>{let{map:l,maps:i}=e;const n=[K,V].map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));let t=new i.LatLngBounds;for(var d=0;d<n.length;d++)t.extend(n[d]);l.fitBounds(t)},children:[(0,_.jsx)(S,{lat:null===K||void 0===K?void 0:K.lat,lng:null===K||void 0===K?void 0:K.lng}),(0,_.jsx)(I,{lat:null===V||void 0===V?void 0:V.lat,lng:null===V||void 0===V?void 0:V.lng})]})})]})]})]})})})}},84618:(e,l,i)=>{e.exports=i.p+"static/media/shop.46d7a94ca800c711764a.png"},18478:(e,l,i)=>{e.exports=i.p+"static/media/user.fbe7078c52acde79652d.jpg"}}]);