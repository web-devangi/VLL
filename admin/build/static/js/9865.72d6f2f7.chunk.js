"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9865],{53233:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(47313),s=a(56140),d=a(67251),l=a(45705),o=a(86345),i=a(78267),r=a(37388),c=a(59491),u=a(99587),v=a(24511),h=a(46417);const{Text:m}=s.Z,f=e=>{let{columns:t=[],setColumns:a,style:s,size:f="",iconOnly:x}=e;const{t:g}=(0,v.$)(),[p,Z]=(0,n.useState)(!1),y=(0,h.jsx)(d.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(d.Z.Item,{children:(0,h.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(o.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(i.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:p,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(c.Z,{style:{...s},size:f,icon:(0,h.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},41481:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(47313),s=a(66672),d=a(16031),l=a(40765),o=a(46417);function i(e){let{handleChange:t,defaultValue:a,resetSearch:i,...r}=e;const[c,u]=(0,n.useState)(a),v=(0,n.useMemo)((()=>(0,d.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[i]),(0,o.jsx)(s.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,o.jsx)(l.Z,{}),...r})}},13945:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>n})},84017:(e,t,a)=>{function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const n=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===a?"".concat(n," ").concat(t):"".concat(t," ").concat(n)}a.d(t,{Z:()=>n})},99865:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(47313),s=a(73591),d=a(45705),l=a(59491),o=a(77181),i=a(78508),r=a(97890),c=a(31741),u=a(2717),v=a(90954),h=a(24511),m=a(80314),f=a(22054),x=a(13945),g=a(41481),p=a(84017),Z=a(53233),y=a(40197),j=a(46417);const{TabPane:w}=s.Z;function _(){var e,t,a;const _=(0,u.I0)(),b=(0,r.s0)(),{t:z}=(0,h.$)(),{defaultCurrency:C}=(0,u.v9)((e=>e.currency),u.wU),{statusList:k}=(0,u.v9)((e=>e.orderStatus),u.wU),V=[{name:"all",id:"0",active:!0,sort:0},...k];console.log("statusList",V);const{activeMenu:I}=(0,u.v9)((e=>e.menu),u.wU),[H,S]=(0,n.useState)("accepted"),M=(null===(e=I.data)||void 0===e?void 0:e.role)||H,P=null===I||void 0===I?void 0:I.data,E={search:null===P||void 0===P?void 0:P.search,sort:null===P||void 0===P?void 0:P.sort,column:null===P||void 0===P?void 0:P.column,perPage:null===P||void 0===P?void 0:P.perPage,page:null===P||void 0===P?void 0:P.page,user_id:null===P||void 0===P?void 0:P.userId,status:M},[L,N]=(0,n.useState)([{title:z("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:z("client"),dataIndex:"user",key:"user",is_show:!0,render:e=>(0,j.jsxs)("div",{children:[e.firstname," ",e.lastname]})},{title:z("number.of.products"),dataIndex:"order_details_count",key:"rate",is_show:!0,render:e=>(0,j.jsxs)("div",{className:"text-lowercase",children:[e||0," ",z("products")]})},{title:z("amount"),dataIndex:"details",key:"price",is_show:!0,render:(e,t)=>(0,p.Z)(null===t||void 0===t?void 0:t.total_price,C.symbol)},{title:z("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:e=>{var t;return z(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:"created.at",dataIndex:"created_at",key:"created_at",is_show:!0},{title:z("options"),key:"options",is_show:!0,render:(e,t)=>(0,j.jsx)(d.Z,{children:(0,j.jsx)(l.Z,{icon:(0,j.jsx)(c.Z,{}),onClick:()=>(e=>{_((0,v.bL)({url:"deliveryman/order/details/".concat(e.id),id:"order_details",name:z("order.details")})),b("/deliveryman/order/details/".concat(e.id))})(t)})})}]),{orders:U,meta:$,loading:B,params:T}=(0,u.v9)((e=>e.orders),u.wU);(0,m.Z)((()=>{_((0,f.Bu)(E))}),[null===I||void 0===I?void 0:I.data]),(0,n.useEffect)((()=>{null!==I&&void 0!==I&&I.refetch&&(_((0,f.Bu)(E)),_((0,v.A_)(I)))}),[null===I||void 0===I?void 0:I.refetch]),(0,n.useEffect)((()=>{console.log("fetching..."),_((0,y.ZL)({}))}),[]);const K=e=>{const t=I.data;_((0,v.nc)({activeMenu:I,data:{...t,...e}}))};return(0,j.jsxs)(o.Z,{title:z("orders"),extra:(0,j.jsxs)(d.Z,{wrap:!0,children:[(0,j.jsx)(g.Z,{placeholder:z("search"),handleChange:e=>K({search:e}),defaultValue:null===(t=I.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(a=I.data)&&void 0!==a&&a.search)}),(0,j.jsx)(Z.Z,{columns:L,setColumns:N})]}),children:[(0,j.jsx)(s.Z,{onChange:e=>{K({role:e,page:1}),S(e)},type:"card",activeKey:M,children:V.filter((e=>e.active)).map((e=>(0,j.jsx)(w,{tab:z(e.name)},e.name)))}),(0,j.jsx)(i.Z,{scroll:{x:!0},columns:null===L||void 0===L?void 0:L.filter((e=>e.is_show)),dataSource:U,loading:B,pagination:{pageSize:T.perPage,page:T.page,total:$.total,defaultCurrent:T.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:n,current:s}=e,{field:d,order:l}=a,o=(0,x.Z)(l);_((0,v.nc)({activeMenu:I,data:{...I.data,perPage:n,page:s,column:d,sort:o}}))}})]})}},99587:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1413),s=a(47313);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=a(17469),o=function(e,t){return s.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:d}))};o.displayName="TableOutlined";const i=s.forwardRef(o)}}]);