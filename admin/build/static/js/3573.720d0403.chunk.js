"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3573],{55940:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(59491),l=a(47515),s=a(23560),d=a(24511),i=a(79492),r=a(46417);function o(e){let{size:t="",onClick:a,type:o="default",...c}=e;const{t:u}=(0,d.$)(),{isDemo:h}=(0,i.Z)();return(0,r.jsx)(n.Z,{size:t,icon:(0,r.jsx)(l.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):a(e)},type:o,...c})}},53233:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(47313),l=a(56140),s=a(67251),d=a(45705),i=a(86345),r=a(78267),o=a(37388),c=a(59491),u=a(99587),h=a(24511),v=a(46417);const{Text:m}=l.Z,p=e=>{let{columns:t=[],setColumns:a,style:l,size:p="",iconOnly:x}=e;const{t:Z}=(0,h.$)(),[f,g]=(0,n.useState)(!1),b=(0,v.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,v.jsx)(s.Z.Item,{children:(0,v.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(r.Z,{overlay:b,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,v.jsx)(o.Z,{title:Z("change.columns"),children:(0,v.jsx)(c.Z,{style:{...l},size:p,icon:(0,v.jsx)(u.Z,{}),children:x?null:Z("Columns")})})})}},41481:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(47313),l=a(66672),s=a(16031),d=a(40765),i=a(46417);function r(e){let{handleChange:t,defaultValue:a,resetSearch:r,...o}=e;const[c,u]=(0,n.useState)(a),h=(0,n.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[r]),(0,i.jsx)(l.Z,{value:c,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,i.jsx)(d.Z,{}),...o})}},89281:(e,t,a)=>{a.d(t,{h:()=>o});var n=a(47313),l=a(12279),s=a.n(l),d=a(74294),i=a(72652),r=a(46417);const o=e=>{let{fetchOptions:t,debounceTimeout:a=400,onClear:l,refetchOptions:o=!1,...c}=e;const[u,h]=(0,n.useState)(!1),[v,m]=(0,n.useState)([]),p=(0,n.useMemo)((()=>s()((e=>{m([]),h(!0),t(e).then((e=>{m(e),h(!1)}))}),a)),[t,a]);return(0,r.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),l&&l()},notFoundContent:u?(0,r.jsx)(i.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{v.length&&!o||p("")}})}},13945:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>n})},63573:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(47313),l=a(26824),s=a(45705),d=a(59491),i=a(77181),r=a(78508),o=a(48697),c=a(24511),u=a(45464),h=a(55940),v=a(12019),m=a(47515),p=a(55768),x=a(53233),Z=a(2717),f=a(97890),g=a(23560),b=a(69658),j=a(74580),y=a(10976),C=a(9274),w=a(89281),k=a(90954),z=a(46417);function S(e){let{isModalOpen:t,handleCancel:a}=e;const{t:l}=(0,c.$)(),[s]=y.Z.useForm(),[i,r]=(0,n.useState)(!1),{activeMenu:u}=(0,Z.v9)((e=>e.menu),Z.wU),h=(0,Z.I0)(),v=(0,f.s0)();return(0,z.jsx)(C.Z,{visible:t,title:l("add.brands"),onCancel:a,footer:[(0,z.jsx)(d.Z,{type:"primary",onClick:()=>(h((0,k.bL)({url:"seller/brand/add",id:"seller/brand/add",name:l("add.brand")})),void v("/seller/brand/add")),loading:i,icon:(0,z.jsx)(p.Z,{}),children:l("add.new.brands")},"save-form"),(0,z.jsx)(d.Z,{type:"primary",onClick:()=>s.submit(),loading:i,children:l("save")},"save"),(0,z.jsx)(d.Z,{type:"default",onClick:a,children:l("cancel")},"cancel")],children:(0,z.jsx)(y.Z,{layout:"vertical",name:"user-address",form:s,onFinish:e=>{const t={...Object.assign({},...e.title.map(((e,t)=>({["brands[".concat(t,"]")]:e.value}))))};r(!0),o.Z.create(t).then((()=>{a(),h((0,k.xo)(u))})).catch((e=>console.error(e))).finally((()=>r(!1)))},children:(0,z.jsx)(y.Z.Item,{name:"title",label:l("title"),rules:[{required:!0,message:"required"}],children:(0,z.jsx)(w.h,{mode:"multiple",placeholder:"Select brand",fetchOptions:async function(e){const t={search:0!==e.length?e:null,perPage:10};return o.Z.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150}})})})})}var V=a(70816),_=a.n(V),M=a(73253),I=a(13945),H=a(80314),O=a(41481);function P(){var e,t,a,y,C;const{t:w}=(0,c.$)(),[V,P]=(0,n.useState)(null),[R,E]=(0,n.useState)(null),F=(0,Z.I0)(),N=(0,f.s0)(),{setIsModalVisible:T}=(0,n.useContext)(j._),[Y,$]=(0,n.useState)(!1),[A,D]=(0,n.useState)(!1),{activeMenu:J}=(0,Z.v9)((e=>e.menu),Z.wU),{brands:L,meta:U,loading:q,params:B}=(0,Z.v9)((e=>e.brand),Z.wU),K=J.data,W={search:null===K||void 0===K?void 0:K.search,sort:null===K||void 0===K?void 0:K.sort,column:null===K||void 0===K?void 0:K.column,perPage:null===K||void 0===K?void 0:K.perPage,page:null===K||void 0===K?void 0:K.page},[G,Q]=(0,n.useState)([{title:w("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:w("title"),dataIndex:"title",key:"title",is_show:!0},{title:w("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,z.jsx)(l.Z,{src:(0,u.Z)(e),alt:"img_gallery",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0},e+t.id)},{title:"created_at",dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>_()(e).format("YYYY-MM-DD")},{title:w("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,z.jsxs)(s.Z,{children:[(0,z.jsx)(d.Z,{type:"primary",icon:(0,z.jsx)(v.Z,{}),onClick:()=>(e=>{F((0,k.bL)({url:"seller/brand/".concat(e.id),id:"brand_edit",name:w("brands")})),N("/seller/brand/".concat(e.id))})(t),disabled:!t.shop_id}),(0,z.jsx)(h.Z,{icon:(0,z.jsx)(m.Z,{}),onClick:()=>{E([t.id]),T(!0),P(!0)},disabled:!t.shop_id})]})}]);(0,n.useEffect)((()=>{J.refetch&&(F((0,M.RJ)({})),F((0,k.A_)(J)))}),[J.refetch]),(0,H.Z)((()=>{F((0,M.RJ)(W))}),[J.data]);const X={selectedRowKeys:R,onChange:e=>{E(e)}};return console.log("brands",L),(0,z.jsxs)(i.Z,{title:w("brands"),extra:(0,z.jsxs)(s.Z,{wrap:!0,children:[(0,z.jsx)(O.Z,{placeholder:w("search"),handleChange:e=>(e=>{const t=J.data;F((0,k.nc)({activeMenu:J,data:{...t,...e}}))})({search:e}),defaultValue:null===(e=J.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=J.data)&&void 0!==t&&t.search)}),(0,z.jsx)(d.Z,{type:"primary",icon:(0,z.jsx)(p.Z,{}),onClick:()=>{F((0,k.bL)({url:"seller/brand/add",id:"seller/brand/add",name:w("add.brand")})),N("/seller/brand/add")},children:w("add.brands")}),(0,z.jsx)(x.Z,{columns:G,setColumns:Q})]}),children:[(0,z.jsx)(r.Z,{scroll:{x:!0},rowSelection:X,columns:null===G||void 0===G?void 0:G.filter((e=>e.is_show)),dataSource:L,pagination:{pageSize:B.perPage,page:(null===(a=J.data)||void 0===a?void 0:a.page)||1,total:U.total,defaultCurrent:null===(y=J.data)||void 0===y?void 0:y.page,current:null===(C=J.data)||void 0===C?void 0:C.page},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:n,current:l}=e,{field:s,order:d}=a,i=(0,I.Z)(d);F((0,k.nc)({activeMenu:J,data:{...J.data,perPage:n,page:l,column:s,sort:i}}))},loading:q}),Y&&(0,z.jsx)(S,{handleCancel:()=>$(!1),isModalOpen:Y}),(0,z.jsx)(b.Z,{click:()=>{D(!0);const e={...Object.assign({},...R.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};o.Z.delete(e).then((()=>{g.Am.success(w("successfully.deleted")),F((0,M.RJ)({})),T(!1),E(null)})).finally((()=>D(!1)))},text:w(V?"delete":"all.delete"),setText:E,loading:A})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=a(17469),i=function(e,t){return l.createElement(d.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};i.displayName="PlusCircleOutlined";const r=l.forwardRef(i)},99587:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1413),l=a(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=a(17469),i=function(e,t){return l.createElement(d.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};i.displayName="TableOutlined";const r=l.forwardRef(i)}}]);