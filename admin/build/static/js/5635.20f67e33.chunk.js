"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5635],{55940:(e,t,n)=>{n.d(t,{Z:()=>c});n(47313);var a=n(59491),s=n(47515),l=n(23560),d=n(24511),i=n(79492),r=n(46417);function c(e){let{size:t="",onClick:n,type:c="default",...o}=e;const{t:u}=(0,d.$)(),{isDemo:h}=(0,i.Z)();return(0,r.jsx)(a.Z,{size:t,icon:(0,r.jsx)(s.Z,{}),onClick:e=>{h?l.Am.warning(u("cannot.work.demo")):n(e)},type:c,...o})}},53233:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(47313),s=n(56140),l=n(67251),d=n(45705),i=n(86345),r=n(78267),c=n(37388),o=n(59491),u=n(99587),h=n(24511),v=n(46417);const{Text:x}=s.Z,m=e=>{let{columns:t=[],setColumns:n,style:s,size:m="",iconOnly:f}=e;const{t:g}=(0,h.$)(),[Z,p]=(0,a.useState)(!1),j=(0,v.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,v.jsx)(l.Z.Item,{children:(0,v.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(x,{children:e.title}),(0,v.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,v.jsx)(r.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{p(e)},visible:Z,children:(0,v.jsx)(c.Z,{title:g("change.columns"),children:(0,v.jsx)(o.Z,{style:{...s},size:m,icon:(0,v.jsx)(u.Z,{}),children:f?null:g("Columns")})})})}},41481:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(47313),s=n(66672),l=n(16031),d=n(40765),i=n(46417);function r(e){let{handleChange:t,defaultValue:n,resetSearch:r,...c}=e;const[o,u]=(0,a.useState)(n),h=(0,a.useMemo)((()=>(0,l.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(n)}),[r]),(0,i.jsx)(s.Z,{value:o,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,i.jsx)(d.Z,{}),...c})}},13945:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>a})},15635:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var a=n(47313),s=n(73591),l=n(66204),d=n(45705),i=n(59491),r=n(77181),c=n(78508),o=n(97890),u=n(31741),h=n(69658),v=n(74580),x=n(2717),m=n(90954),f=n(23560),g=n(24511),Z=n(55940),p=n(53233),j=n(74198),w=n(49319),y=n(41481),C=n(80314),k=n(13945),z=n(70816),b=n.n(z),_=n(46417);const{TabPane:S}=s.Z,V=["pending","accepted","canceled"],H=()=>{var e,t,n,z,H,I;const{t:M}=(0,g.$)(),N=(0,x.I0)(),R=(0,o.s0)(),{refund_delete:A}=(0,x.v9)((e=>e.globalSettings.settings),x.wU),[T,Y]=(0,a.useState)([{title:M("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:M("order.id"),is_show:!0,dataIndex:"order.id",key:"order.id",render:(e,t)=>(0,_.jsx)("div",{children:t.order.id})},{title:M("client"),is_show:!0,dataIndex:"user",key:"user",render:(e,t)=>{var n,a;return(0,_.jsxs)("div",{children:[null===(n=t.order.user)||void 0===n?void 0:n.firstname," ",null===(a=t.order.user)||void 0===a?void 0:a.lastname]})}},{title:M("status"),is_show:!0,dataIndex:"status",key:"status",render:e=>(0,_.jsx)("div",{children:"new"===e?(0,_.jsx)(l.Z,{color:"blue",children:M(e)}):"canceled"===e?(0,_.jsx)(l.Z,{color:"error",children:M(e)}):(0,_.jsx)(l.Z,{color:"cyan",children:M(e)})})},{title:M("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:e=>b()(e).format("YYYY-MM-DD HH:mm")},{title:M("options"),is_show:!0,key:"options",render:(e,t)=>(0,_.jsxs)(d.Z,{children:[(0,_.jsx)(i.Z,{icon:(0,_.jsx)(u.Z,{}),onClick:()=>(e=>{N((0,m.bL)({url:"refund/details/".concat(e),id:"refund_details",name:M("refund.details")})),R("/refund/details/".concat(e))})(t.id)}),"0"===A?null:(0,_.jsx)(Z.Z,{onClick:()=>{K([t.id]),D(!0),$(!0)}})]})}]),{setIsModalVisible:D}=(0,a.useContext)(v._),[E,K]=(0,a.useState)(null),[O,P]=(0,a.useState)(!1),[U,$]=(0,a.useState)(null),[B,L]=(0,a.useState)("pending"),{activeMenu:q}=(0,x.v9)((e=>e.menu),x.wU),{refund:F,meta:G,loading:J,params:Q}=(0,x.v9)((e=>e.refund),x.wU),W=(null===(e=q.data)||void 0===e?void 0:e.role)||B,X=q.data,ee={search:null===X||void 0===X?void 0:X.search,pageSize:G.per_page,page:null===X||void 0===X?void 0:X.page,status:W||"published"};(0,a.useEffect)((()=>{q.refetch&&(N((0,j.yR)(ee)),N((0,m.A_)(q)))}),[q.refetch]),(0,C.Z)((()=>{N((0,j.yR)(ee))}),[q.data]);const te={selectedRowKeys:E,onChange:e=>{K(e)}},ne=e=>{const t=q.data;N((0,m.nc)({activeMenu:q,data:{...t,...e}}))};return(0,_.jsxs)(r.Z,{title:M("refunds"),extra:(0,_.jsxs)(d.Z,{children:["0"===A?null:(0,_.jsx)(d.Z,{children:(0,_.jsx)(Z.Z,{size:"",onClick:()=>{null===E||0===E.length?f.Am.warning(M("select.the.product")):(D(!0),$(!1))},children:M("delete.selected")})}),(0,_.jsx)(p.Z,{columns:T,setColumns:Y})]}),children:[(0,_.jsx)("div",{className:"d-flex justify-content-between",children:(0,_.jsx)(y.Z,{placeholder:M("search"),className:"w-25",handleChange:e=>ne({search:e}),resetSearch:!(null!==(t=q.data)&&void 0!==t&&t.search),defaultValue:null===(n=q.data)||void 0===n?void 0:n.search})}),(0,_.jsx)(s.Z,{className:"mt-3",activeKey:W,onChange:e=>{ne({role:e,page:1}),L(e)},type:"card",children:V.map((e=>(0,_.jsx)(S,{tab:M(e)},e)))}),(0,_.jsx)(c.Z,{scroll:{x:!0},rowSelection:te,columns:null===T||void 0===T?void 0:T.filter((e=>e.is_show)),dataSource:F,pagination:{pageSize:Q.perPage,page:(null===(z=q.data)||void 0===z?void 0:z.page)||1,total:G.total,defaultCurrent:null===(H=q.data)||void 0===H?void 0:H.page,current:null===(I=q.data)||void 0===I?void 0:I.page},rowKey:e=>e.id,loading:J,onChange:function(e,t,n){const{pageSize:a,current:s}=e,{field:l,order:d}=n,i=(0,k.Z)(d);N((0,m.nc)({activeMenu:q,data:{...q.data,perPage:a,page:s,column:l,sort:i}}))}}),(0,_.jsx)(h.Z,{click:()=>{P(!0);const e={...Object.assign({},...E.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};w.Z.delete(e).then((()=>{N((0,j.yR)(ee)),f.Am.success(M("successfully.deleted"))})).finally((()=>{D(!1),P(!1),K(null)}))},text:M(U?"delete":"all.delete"),loading:O,setText:K})]})}},99587:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(1413),s=n(47313);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=n(17469),i=function(e,t){return s.createElement(d.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};i.displayName="TableOutlined";const r=s.forwardRef(i)}}]);